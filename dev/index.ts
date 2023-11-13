import { ethers } from 'hardhat';
import { A, X } from '../typechain-types';
import { context, deployAllContract, getAllContract, init, meta } from './utils';

async function main() {
  await meta();
  // await deployAllContract();
  context(({ A, X }) => {

  });
}

async function dev() {
  await init();
  main();
}

dev();
