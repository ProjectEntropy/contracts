// var ConvertLib = artifacts.require("./ConvertLib.sol");
var Entropy = artifacts.require("./Entropy.sol");

module.exports = function(deployer) {
  deployer.deploy(Entropy);
};
