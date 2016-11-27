deployEntropyContract = () => {
  return Entropy.new({gas: 1000000})
}

contract('Entropy', (accounts) => {

  var creator_guardian  = web3.eth.accounts[0];
  var stranger          = web3.eth.accounts[1];

  /**
   * Creation / Setup
   */
   describe("Creation / Setup", function(){
     it("makes creator a Citizen", function(done) {
       deployEntropyContract()
         .then((entropy) => {
           entropy.balanceOf(creator_guardian).then((balance) => {
             assert.equal(balance, '1', false, "Did \
             not give citizenship token");
             done();
           })
         })
     });

     it("keeps strangers as not yet Citizens", function(done) {
       deployEntropyContract()
         .then((entropy) => {
           entropy.balanceOf(stranger).then((balance) => {
             assert.equal(balance, '0', false, "Shouldn not have given \
              citizenship token!");
             done();
           })
         })
     });

     it("makes creator a Guardian", function(done) {
       deployEntropyContract()
         .then((entropy) => {
           entropy.isGuardian(creator_guardian).then((guardian) => {
             assert.equal(guardian, true, false, "Did \
             not set as guardian");
             done();
           })
         })
     });

     it("keeps strangers as not Guardian", function(done) {
       deployEntropyContract()
         .then((entropy) => {
           entropy.isGuardian(stranger).then((guardian) => {
             assert.equal(guardian, false, false, "Should \
             not have set stranger as guardian!");
             done();
           })
         })
     });

   })


  /**
   * Guardianship
   */
   describe("Guardianship", function(){

     var new_guardian = web3.eth.accounts[2];
     it("allows Guardians to create other Guardians", function(done) {
       deployEntropyContract()
         .then((entropy) => {
           entropy.setGuardian(new_guardian, true).then((tx) => {
             entropy.isGuardian(new_guardian).then((guardian) => {
               assert.equal(guardian, true, false, "Should \
               have been guardian!");
               done();
             })
           })
         })
     });

     it("stops non-Guardians from creating Guardians", function(done) {
       deployEntropyContract()
         .then((entropy) => {
           entropy.setGuardian.call(accounts[1], new_guardian, true).then((tx) => {
             entropy.isGuardian(new_guardian).then((guardian) => {
               assert.equal(guardian, false, false, "Should \
               NOT have been guardian!");
               done();
             })
           })
         })
     });
  })
})
