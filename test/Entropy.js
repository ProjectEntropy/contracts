contract('Entropy', (accounts) => {

  it("lets someone become a Citizen", function(done) {

    deployEntropyContract()
      .then((entropy) => {

        assert.typeOf(e, 'Contract');
        done();

      })
      .catch(assert.fail)
  });
})



deployEntropyContract = () => {
  return Entropy.new({gas: 1000000})
}
