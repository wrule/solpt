import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, init, meta } from './utils';
import * as A from '../typechain-types/index';

async function main() {
  await meta();
  type TA = ReturnType<typeof A.factories.A__factory.connect>;
  type B = typeof A.factories;
  type C = B["A__factory"]["connect"];
  type D = ReturnType<C>;
}

async function dev() {
  await init();
  main();
}

dev();
