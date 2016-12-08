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
          entropy.balanceOf(accounts[1])
          .then((balance) => {
            // Should have 2 tokens
            assert.equal(balance.valueOf(), 2);
            done();
          })
        })
      })
    })
    it("handles non integer amounts (should floor)", function(done) {
      helpers.deployEntropyContract()
      .then((entropy) => {
        // Buy with 3.5 Eth worth of value
        entropy.buyTokens({ from: accounts[1], value: 2500000000000000000 })
        .then(() => {
          entropy.balanceOf(accounts[1])
          .then((balance) => {
            // Should have 2 tokens
            assert.equal(balance.valueOf(), 2);
            done();
          })
        })
      })
    })
  })
})
