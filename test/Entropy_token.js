const helpers = require('./helpers');

contract('EntropyToken', (accounts) => {
  describe("Basic", () => {
    it("Sets valid attributes", function(done) {
      helpers.deployEntropyContract()
      .then((entropy) => {
        helpers.callAndCheck( entropy, 'name', 'Entropy', 'Wrong name!')
        helpers.callAndCheck( entropy, 'symbol', 'ENT', 'Wrong symbol!')
        helpers.callAndCheck( entropy, 'totalSupply', 1, 'Wrong total supply!')
        .then(() => {
          done();
        })
      })
    })
  });

  describe("Buying Entropy tokens", () => {
    it("Lets you buy Entropy tokens", function(done) {
      helpers.deployEntropyContract()
      .then((entropy) => {
        // Buy with 2 Eth worth of value
        entropy.buyTokens({ from: accounts[1], value: 2e18 })
        .then(() => {
          entropy.balanceOf.call(accounts[1])
          .then((balance) => {
            console.log("BALANCE:::::")
            console.log(balance)

            assert.equal(balance.valueOf(), 2);
            done();
          })
        })
      })
    })
  })
})
