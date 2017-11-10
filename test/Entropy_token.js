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
        // Buy with 2 Eth worth of tokens
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
        // Buy with 3.5 Eth worth of tokens
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

  describe("Safety Limit", () => {

    it("is ok near the safety limit", function(done) {
      helpers.deployEntropyContract()
      .then((entropy) => {
        // Send 299 Eth
        entropy.buyTokens({ from: accounts[0], value: 299e18 })
        .then(() => {
          // Buy with 1 Eth worth of tokens
          entropy.buyTokens({ from: accounts[1], value: 1e18 })
          .then(() => {
            entropy.balanceOf(accounts[1])
            .then((balance) => {
              // Should have 2 tokens
              assert.equal(balance.valueOf(), 1);
              done();
            })
          })
        })
      })
    })

    it("wont go over safety limit", function(done) {
      helpers.deployEntropyContract()
      .then((entropy) => {
        // Send 300 Eth
        entropy.buyTokens({ from: accounts[0], value: 300e18 })
        .then(() => {
          // Buy with 1 Eth worth of tokens - should throw
          return helpers.expectedExceptionPromise(function () {
            return entropy.buyTokens({ from: accounts[1], gas: 3000000 });
          }, 3000000);
        })
        .then(() => {
          done();
        })
      })
    })

    it("lets guardians change safety limit", (done) => {
      helpers.deployEntropyContract()
      .then((entropy) => {
        entropy.changeSafetyLimit(500e18)
        .then(() => {
          // Buy with 399 Eth worth of tokens
          entropy.buyTokens({ value: 399e18 })
          .then(() => {
            entropy.balanceOf(accounts[0])
            .then((balance) => {
              // Should have 2 tokens
              assert.equal(balance.valueOf(), 400);
              done();
            })
          })
        })
      })
    })
  })
})
