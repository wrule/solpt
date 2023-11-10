import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, init, meta } from './utils';
import * as A from '../typechain-types/index';

async function main() {
  await meta();
  type TA = ReturnType<typeof A.factories.A__factory.connect>;
}

async function dev() {
  await init();
  main();
}

dev();
