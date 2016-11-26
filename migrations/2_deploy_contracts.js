module.exports = function(deployer) {
  // Deploy libraries
  deployer.deploy(Owned);
  deployer.autolink();

  // Deploy main contracts
  deployer.deploy(StandardToken);
  deployer.deploy(Entropy);
};
