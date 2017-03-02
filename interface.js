var contract = require("truffle-contract");
var entropy_json_artifact = require("./build/contracts/Entropy.json")

var Entropy = contract(entropy_json_artifact);
