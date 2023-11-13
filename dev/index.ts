import { ethers } from 'hardhat';
import { A, X } from '../typechain-types';
import { deployAllContract, deployContract, getAllContract, getContract, init, meta } from './utils';
import * as Types from '../typechain-types';

async function main() {
  await meta();
  const a = require('./artifacts/address1.json');
  // const contracts = await deployAllContract();
  // // console.log(contracts.A);
}

async function dev() {
  await init();
  main();
}

dev();
