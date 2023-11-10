import { ethers } from 'hardhat';
import { X } from '../typechain-types';
import { deployContract, init, meta } from './utils';
import * as Types from '../typechain-types';

async function main() {
  await meta();
  type Factories = typeof Types.factories;
  type Contracts = ReturnType<Factories[keyof Factories]["connect"]>;
}

async function dev() {
  await init();
  main();
}

dev();
