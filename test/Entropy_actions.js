const helpers = require('./helpers');

contract('Entropy - Actions', (accounts) => {
  /**
   * Actions
   *
   */

   describe("Creating actions", () =>{
     it("stops untrusted Citizens from creating actions", (done) => {
       helpers.deployEntropyContract()
       .then((entropy) => {
         return helpers.expectedExceptionPromise(() => {
           return entropy.newAction(1e18, "Rigging refit", { from: accounts[1]});
         }, 3000000)
         .then(()=>{
           entropy.actions_count().then((actions_count) => {
             assert.equal(actions_count, 0);
             done();
           })
         })
       })
     });

    it("lets trusted Citizens create actions", (done) => {
      helpers.deployEntropyContract()
      .then((entropy) => {
        entropy.newAction(1e18, "Rigging refit").then((tx) => {
          entropy.actions_count().then((actions_count) => {
            assert.equal(actions_count, 1);
          })
          .then(()=>{ done() })
        })
      })
    })
   })

   describe("Voting", () =>{
     it("lets trusted citizens vote", (done) => {
       helpers.deployEntropyContract()
       .then((entropy) => {
         entropy.newAction(1e18, "Rigging refit")
         .then((tx) => {
           // Vote in favour!
           entropy.vote(0, true).then((tx) => {
           done();
           //  TODO: Check it has a vote!
           //  entropy.actions[0].numberOfVotes().then((count) => {
           //    assert.equal(count, 1);
           //    done();
           //  })
          })
         })
       })
     });
   })
})
