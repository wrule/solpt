import { ethers } from 'hardhat';
import { A, X } from '../typechain-types';
import { deployAllContract, getAllContract, init, meta } from './utils';
import * as Types from '../typechain-types';

async function main() {
  await meta();
  // await deployAllContract();
  const contracts = await getAllContract();
  console.log(contracts.A);
}

async function dev() {
  await init();
  main();
}

dev();
