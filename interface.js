var contract = require("truffle-contract");
var entropy_json_artifact = require("./build/contracts/Entropy.json")

window.Entropy = contract(entropy_json_artifact);
