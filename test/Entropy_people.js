const helpers = require('./helpers');

contract('Entropy - People', (accounts) => {

  var creator_guardian  = accounts[0];
  var stranger          = accounts[1];

  /**
   * Creation / Setup
   */
   describe("Creation", function(){
     it("makes creator a Citizen", function(done) {
       helpers.deployEntropyContract()
         .then((entropy) => {
           entropy.balanceOf(creator_guardian).then((balance) => {
             assert.equal(balance, '1', false, "Did \
             not give citizenship token");
             done();
           })
         })
     });

     it("makes creator a Guardian", function(done) {
       helpers.deployEntropyContract()
         .then((entropy) => {
           entropy.isGuardian(creator_guardian).then((guardian) => {
             assert.equal(guardian, true, false, "Did \
             not set as guardian");
             done();
           })
         })
     });
   })


  /**
   * Guardianship
   */
   describe("Guardianship", function(){
     it("keeps strangers as not Guardian", function(done) {
       helpers.deployEntropyContract()
         .then((entropy) => {
           entropy.isGuardian(stranger).then((guardian) => {
             assert.equal(guardian, false, false, "Should \
             not have set stranger as guardian!");
             done();
           })
         })
     });

     var new_guardian = web3.eth.accounts[2];
     it("allows Guardians to create other Guardians", function(done) {
       helpers.deployEntropyContract()
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
       helpers.deployEntropyContract()
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


  /**
   * Trusted Citizens
   */
   describe("Trusted Citizens", function(){
     it("keeps strangers as not Trusted Citizens", function(done) {
       helpers.deployEntropyContract()
         .then((entropy) => {
           entropy.isTrusted(stranger).then((trusted) => {
             assert.equal(trusted, false, false, "Should \
             not have trusted stranger yet!");
             done();
           })
         })
     });

     var new_trusted_citizen = web3.eth.accounts[2];
     it("allows Guardians to trust Citizens", function(done) {
       helpers.deployEntropyContract()
         .then((entropy) => {
           entropy.setTrust(new_trusted_citizen, true).then((tx) => {
             entropy.isTrusted(new_trusted_citizen).then((trusted) => {
               assert.equal(trusted, true, false, "Should \
               have been trusted!");
               done();
             })
           })
         })
     });

     it("stops non-Guardians from trusting Citizens", function(done) {
       helpers.deployEntropyContract()
         .then((entropy) => {
           entropy.setTrust.call(accounts[1], new_trusted_citizen, true).then((tx) => {
             entropy.isTrusted(new_trusted_citizen).then((trusted) => {
               assert.equal(trusted, false, false, "Should \
               NOT have been trusted!");
               done();
             })
           })
         })
     });
  })

  /**
   * Citizenship
   * TODO: Fix why this is breaking
   */
  describe("Citizenship", function(){
    it("keeps strangers as not yet Citizens", function(done) {
      helpers.deployEntropyContract()
       .then((entropy) => {
         entropy.balanceOf(stranger).then((balance) => {
           assert.equal(balance, '0', false, "Shouldn not have given \
            citizenship token!");
           done();
         })
       })
    });

    // it("knows people with at least one token are citizens", function(done) {
    //   helpers.deployEntropyContract()
    //   .then((entropy) => {
    //     // Send 5 ether to entropy
    //     // for some reason this freaks out as soon as value is added
    //     entropy.buyTokens("", { value: 1 }).then(() => {
    //       done(); // :fire:
    //     })
    //   })
    // })
  })
})
