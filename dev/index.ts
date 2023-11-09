import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, init, meta } from './utils';

async function main() {
  await meta();
  type a = ReturnType<typeof ethers.getContractAt>;
  type b = Parameters<typeof ethers.getContractAt>;
}

async function dev() {
  await init();
  main();
}

dev();
