module.exports = function(deployer) {
  deployer.deploy(Owned);
  deployer.autolink();
  // Deploy used contracts
  deployer.deploy(StandardToken);
  // deployer.deploy(Entropy);
};
