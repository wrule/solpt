import { ethers } from 'hardhat';
import { A, X } from '../typechain-types';
import { deployContract, getContract, init, meta } from './utils';
import * as Types from '../typechain-types';

async function main() {
  await meta();
  await deployContract('A');
  const a = await getContract('A');
}

async function dev() {
  await init();
  main();
}

dev();
