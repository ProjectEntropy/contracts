exports.deployEntropyContract = () => {
  return Entropy.new({gas: 1000000})
}


exports.getBalance = (address) => {
  return new Promise((fullfil, reject) => {
    web3.eth.getBalance(address, (err, balance) => {
      if (err) { return reject(err) }
      return fullfil(balance);
    })
  })
};


exports.expectedExceptionPromise = (action, gasToUse) => {
  return new Promise((resolve, reject) => {
      try {
        resolve(action());
      } catch(e) {
        reject(e);
      }
    })
    .then(function (txn) {
      // https://gist.github.com/xavierlepretre/88682e871f4ad07be4534ae560692ee6
      return web3.eth.getTransactionReceiptMined(txn);
    })
    .then(function (receipt) {
      // We are in Geth
      assert.equal(receipt.gasUsed, gasToUse, "should have used all the gas");
    })
    .catch(function (e) {
      if ((e + "").indexOf("invalid JUMP") || (e + "").indexOf("out of gas") > -1) {
        // We are in TestRPC
      } else if ((e + "").indexOf("please check your gas amount") > -1) {
        // We are in Geth for a deployment
      } else {
        throw e;
      }
    });
};


// Wrap the call and assert pattern in promises
exports.callAndCheck = ( contract, f, expected, message ) => {
  return contract[f].call().then((response) => {
    assert.equal(response, expected, false, message);
  })
}
