import { ethers } from 'hardhat';
import { A, X } from '../typechain-types';
import { deployContract, getAllContract, getContract, init, meta } from './utils';
import * as Types from '../typechain-types';

async function main() {
  await meta();
  await deployContract('A');
  await deployContract('X');
  const { A, X } = await getAllContract();
}

async function dev() {
  await init();
  main();
}

dev();
