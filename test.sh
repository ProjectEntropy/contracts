#!/bin/sh

killall node
nohup sh testchain.sh &
npm install
truffle test
