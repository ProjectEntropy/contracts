contract('Entropy', (accounts) => {

  it("makes creator a Citizen", function(done) {
    deployEntropyContract()
      .then((entropy) => {
        entropy.balanceOf(web3.eth.accounts[0]).then((balance) => {
          assert.equal(balance, '1', false, "Did \
          not give citizenship token");
          done();
        })
      })
  });

  it("makes creator a Guardian", function(done) {
    deployEntropyContract()
      .then((entropy) => {
        entropy.isGuardian(web3.eth.accounts[0]).then((guardian) => {
          assert.equal(guardian, true, false, "Did \
          not set as guardian");
          done();
        })
      })
  });
})



deployEntropyContract = () => {
  return Entropy.new({gas: 1000000})
}
