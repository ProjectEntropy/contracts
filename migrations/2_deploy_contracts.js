module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.autolink();
  // Deploy used contracts
  // deployer.deploy(ActionDatabase);
  // deployer.deploy(Entropy);
};
