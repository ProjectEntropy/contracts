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

[![Architecture Diagram](https://s3-ap-southeast-2.amazonaws.com/bitboatassets/bitboat/assets/entropyDappDesc-7bbe05db5bc36c1a80ee3c13e24aaf22350c948b788b7cf8e29fb97c6bb3cce7.png?X-Amz-Date=20161124T210606Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=9a7ce268a93cbb5afe46b1b6b82e6f026e095b249dfa454171205ee39607ac22&X-Amz-Credential=ASIAIS2OVHQA6275XHVQ/20161124/ap-southeast-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEMb//////////wEaDK7tRxxuqMSh9xXh1SL6AcXciOUgyOPB15/QnY19D9hWgNi7fVOsICzzBXYAxCEt5pVgMHTU5bhqtfwufhksc7SuOcF2Tc6bL3Prw%2BvCB8tD8BvlQfv3X7dkO41HB9NceaZlCZTXloLrCvL3sD56CWshq2GAQ1ie9VU3nux86G40SDLakQtBqVDlDr%2BdTj8%2ByCH9GCVV2IFPqfJdlcuq2oGTDhaANE9xyFnnpi%2Bm55D8DFb%2BQi0QTfiMGj1x8ydTsPM2L54ij2iAjpPqysqpzii%2B3SYIz7Y3ht%2BDByV3LEpSKY0bNBOEOzHyJqxgfVxuFl3PEwqyxTJmioUwLBUlhS/RIOteO%2B/1iFUo%2BavdwQU%3D)](https://s3-ap-southeast-2.amazonaws.com/bitboatassets/bitboat/assets/entropyDappDesc-7bbe05db5bc36c1a80ee3c13e24aaf22350c948b788b7cf8e29fb97c6bb3cce7.png?X-Amz-Date=20161124T210606Z&X-Amz-Expires=300&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Signature=9a7ce268a93cbb5afe46b1b6b82e6f026e095b249dfa454171205ee39607ac22&X-Amz-Credential=ASIAIS2OVHQA6275XHVQ/20161124/ap-southeast-2/s3/aws4_request&X-Amz-SignedHeaders=Host&x-amz-security-token=FQoDYXdzEMb//////////wEaDK7tRxxuqMSh9xXh1SL6AcXciOUgyOPB15/QnY19D9hWgNi7fVOsICzzBXYAxCEt5pVgMHTU5bhqtfwufhksc7SuOcF2Tc6bL3Prw%2BvCB8tD8BvlQfv3X7dkO41HB9NceaZlCZTXloLrCvL3sD56CWshq2GAQ1ie9VU3nux86G40SDLakQtBqVDlDr%2BdTj8%2ByCH9GCVV2IFPqfJdlcuq2oGTDhaANE9xyFnnpi%2Bm55D8DFb%2BQi0QTfiMGj1x8ydTsPM2L54ij2iAjpPqysqpzii%2B3SYIz7Y3ht%2BDByV3LEpSKY0bNBOEOzHyJqxgfVxuFl3PEwqyxTJmioUwLBUlhS/RIOteO%2B/1iFUo%2BavdwQU%3D)


Entropy is built with an experimental but simple DAO structure designed to balance a real world project with the benefits of crowd wisdom and blockchain transparency.

### Community :house_with_garden:
Citizens :two_men_holding_hands: hold the following rights:

- A single Vote :hand: on every created Action :bulb:
- Creating Actions :bulb:
- Guardian :guardsman: nomination

Anyone can become a Citizen :running: by obtaining and holding one or more Entropy Tokens :cookie:

The individuality of citizens is confirmed by the guardians, once it is confirmed
they become Trusted Citizens :two_women_holding_hands:

Trusted Citizens :two_women_holding_hands: hold equal voting rights to all trusted individuals in the Entropy Community, they are able to suggest any Action :bulb: for discussion and vote. These Actions :bulb: can be anything at all, from destinations to sail to, events, changes to the mission itself and changes to the Guardians :guardsman:


### Guardians :guardsman:

Guardians :guardsman: take on the responsibility to fulfil and document everything within the Action Stream :clipboard: as organised by and voted on by the wider community.

They have, in addition to the rights of all Citizens :running:, access to any shared funds moved to the Slush Pool :moneybag: by the community voting as a whole.

Guardians are also able to mark Citizens as trusted, allowing for a human-based
proof of individuality system.

Any Citizen :running: can be elected to be a Guardian :guardsman: by an accepted Action :bulb:

Guardians are accountable to the wider community and can, if needs be, be unelected by a successful Action against them.


### Actions and Funds :bulb: :moneybag:
Any Citizen :running: can propose a new Action :bulb:

All Actions :bulb: can be voted :hand: on by the entire community for 5 days.

For an Action :bulb: to be accepted, it must have *more than 50% approval* and at least as many votes :hand: as there are Guardian :guardsman: members (although voting is open to all Citizens :family:).

After this period accepted Actions :bulb: will be added to the Action Stream :clipboard: until they are marked as complete by one of the Guardians :guardsman:

Declined Actions :bulb: will be dismissed to the Archive :recycle:

The Action Stream :clipboard: represents what the community is currently aiming to achieve.

Any funds associated with Actions :bulb: in the Action Stream :clipboard: become available in the Slush Pool :moneybag: for the Guardians :guardsman: to use towards making those Actions :bulb: happen.

:rainbow: :sailboat: :fireworks:

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
> var entropy = Entropy.deployed()
Instance of an eth-pudding object to interactive with the live Entropy instance
```

You need to be running a Ethereum node with RPC enabled for Truffle to connect. In this example, we are just running it with [testrpc](https://github.com/ethereumjs/testrpc), which is a in-memory RPC enabled node written in JS, that is very fast for development and testing. This can be run also on a private blockchain running with [geth](https://github.com/ethereum/go-ethereum), the Ethereum testnet or the mainnet. See [Truffle network configuration](http://truffleframework.com/docs/advanced/networks) for more info.

To run the EntropyTestnet and connect to it with something expecting geth, run:

    $ parity --chain ./entropy_testnet_chainspec.json --geth


## Gotchas

    Uncaught BigNumber Error: new BigNumber() not a base 16 number:

This can mean a string you were trying to access is null.

## Testing

To run the tests, spin up an ethereum node and run:

    $ truffle test

For running in the CI, a Docker image has been created for the sake of simplicity. It starts a testrpc node and runs the tests against it.



## License

Project Entropy is licensed under the [GNU AGPLv3 license](https://github.com/ProjectEntropy/contracts/blob/master/LICENSE.md)
