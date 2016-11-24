Project Entropy contracts
===
[![Stories in Ready](https://badge.waffle.io/ProjectEntropy/contracts.png?label=ready&title=Ready)](https://waffle.io/ProjectEntropy/contracts)
[![Build Status](https://travis-ci.org/ProjectEntropy/contracts.svg?branch=master)](https://travis-ci.org/ProjectEntropy/contracts)

#### Entropy is an Ethereum-powered floating experiment

We're establishing a crowd-owned and community steered fleet of sailing hackspaces around the world.

This repository is a collection of Solidity scripts, used to create the Smart Contracts running on Ethereum which form the core of Project Entropy: it's governence model, citizenship and logic of operations.


We use [Truffle](https://github.com/ConsenSys/truffle) as a contract development framework.

[![Throughput Graph](https://graphs.waffle.io/ProjectEntropy/contracts/throughput.svg)](https://waffle.io/ProjectEntropy/contracts/metrics/throughput)

## Architecture

Entropy is built with an experimental but simple DAO structure designed to balance a real world project with the benefits of crowd wisdom and blockchain transparency.

### Community
**Citizens** hold the following rights:

- A single vote on every created **Action**
- Creating **Actions**  
- **Guardian** nomination

Anyone can become a **Citizen** by obtaining one or more **Entropy Tokens**.

**Citizens** hold equal voting rights to everyone in the Entropy Community, they are able to suggest any **Action** for discussion and vote. These **Actions** can be anything at all, from destinations to sail to, events, changes to the mission itself and changes to the **Guardians**.


A **Citizen** is anyone who holds one or more **Entropy Tokens**. Anyone with an Ethereum address can hold **Entropy Tokens**.


### Guardians
Any **Citizen** can be elected to be a **Guardian** by an accepted **Action**.


**Guardians** take on the responsibility to fulfil and document everything within the **Action Stream** as organised by and voted on by the wider community.


**Guardians** have, in addition to the rights of all **Citizens** , access to any shared funds moved to the **Slush Pool** by the community voting as a whole.


### Actions and Funds
Any **Citizen** can propose a new **Action**.

All **Actions** can be voted on by the entire community for 5 days.

For an **Action** to be accepted, it must have *more than 50% approval* and at least as many votes as there are **Guardian** members (although voting is open to all **Citizens**).

After this period accepted **Actions** will be added to the **Action Stream** until they are marked as complete by one of the **Guardians**.

Declined **Actions** will be dismissed to the **Archive**.

The **Action Stream** represents what the community is currently aiming to achieve.

Any funds associated with **Actions** in the **Action Stream** become available in the **Slush Pool** for the **Guardians** to use towards making those **Actions** happen.


## Development

The recommended workflow for developing and contributing to the contracts is using the `truffle console` for compiling, deploying and playing with contracts. In order to do that, just:

```sh
$ npm install -g truffle ethereumjs-testrpc

$ testrpc // leave process running
$ truffle console
> compile
Compiling Entropy.sol
...
> migrate --reset
...
> Entropy.deployed()
Entropy deployed eth-pudding object
```

You need to be running a Ethereum node with RPC enabled for Truffle to connect. In this example, we are just running it with [testrpc](https://github.com/ethereumjs/testrpc), which is a in-memory RPC enabled node written in JS, that is very fast for development and testing. This can be run also on a private blockchain running with [geth](https://github.com/ethereum/go-ethereum), the Ethereum testnet or the mainnet. See [Truffle network configuration](http://truffleframework.com/docs/advanced/networks) for more info.


## Testing

To run the tests, spin up an ethereum node and run:

    $ truffle test

For running in the CI, a Docker image has been created for the sake of simplicity. It starts a testrpc node and runs the tests against it.



## License

Project Entropy is licensed under the [GNU AGPLv3 license](https://github.com/ProjectEntropy/contracts/blob/master/LICENSE.md)
