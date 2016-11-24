[![Stories in Ready](https://badge.waffle.io/ProjectEntropy/contracts.png?label=ready&title=Ready)](https://waffle.io/ProjectEntropy/contracts)
[![Build Status](https://travis-ci.org/ProjectEntropy/contracts.svg?branch=master)](https://travis-ci.org/ProjectEntropy/contracts)
Project Entropy contracts
===
#### Entropy is an Ethereum-powered floating experiment

We're establishing a crowd-owned and community steered fleet of sailing hackspaces around the world.

This repository is a collection of Solidity scripts, used to create the Smart Contracts running on Ethereum which form the core of Project Entropy: it's governence model, citizenship and logic of operations.


We use [Truffle](https://github.com/ConsenSys/truffle) as a contract development framework.
## Architecture


## Development

The recommended workflow for developing and contributing to the contracts is using the `truffle console` for compiling, deploying and playing with contracts. In order to do that, just:

```sh
$ npm install -g truffle ethereumjs-testrpc

$ testrpc // leave process running
$ truffle console
> compile
Compiling InsuranceFund.sol
...
> migrate --reset
...
> InsuranceFund.deployed()
Insurance Fund deployed eth-pudding object
```

You need to be running a Ethereum node with RPC enabled for Truffle to connect. In this example, we are just running it with [testrpc](https://github.com/ethereumjs/testrpc), which is a in-memory RPC enabled node written in JS, that is very fast for development and testing. This can be run also on a private blockchain running with [geth](https://github.com/ethereum/go-ethereum), the Ethereum testnet or the mainnet. See [Truffle network configuration](http://truffleframework.com/docs/advanced/networks) for more info.


## Testing

To run the tests, hit the helper script provided:

    $ ./test.sh

For running in the CI, a Docker image has been created for the sake of simplicity. It starts a testrpc node and runs the tests against it.

Ideally Pull Requests should have a test case for whatever is changing all tests are passing in the CI.



## License

Project Entropy is licensed under the [GNU AGPLv3 license](https://github.com/ProjectEntropy/contracts/blob/master/LICENSE.md)
