require('./helpers.js')

// Wow metaprogramming in JS almost
callAndCheck = ( contract, f, expected, message ) => {
  contract[f].call().then((response) => {
    assert.equal(response, expected, false, message);
  })
}

contract('EntropyToken', (accounts) => {
  describe("Basic", function(){
    it("Sets valid attributes", function(done) {
      deployEntropyContract()
      .then((entropy) => {
        return entropy.name.call(accounts[0]);
      })
      .then((name) => {
        assert.equal(name, 'Entropy', false, "Wrong name!");
        done();
      })
    })
  })
  //
  // describe("Buying tokens", function(){
  //   it("should fail if doesn't pay enough", function(done) {
  //     deployEntropyContract()
  //       .then((f) => {
  //         return f.buyInsurancePlan(0, {value: web3.toWei(1, 'wei')});
  //       })
  //       .then(() => {
  //         assert.fail('should have failed because not enough money was sent');
  //         done();
  //       })
  //       .catch(function(e) {
  //         assert.typeOf(e, 'Error');
  //         done();
  //       });
  //   });
  // })
})

//
// contract('EntropyToken', (accounts) => {
//   describe('basics', () => {
//     it('has correct token attributes', (done) => {
//       deployEntropyContract().then((entropy) => {
//         console.log("address");
//         console.log(entropy.address);
//         // entropy.name.call().then((name) => {
//         //   assert.equal(name, 'Entropy', false, "Wrong name!");
//         // })
//         // callAndCheck( entropy, 'name', 'Entropy', "Wrong name!" )
//         done();
//       })
//     })
//   })
// })
