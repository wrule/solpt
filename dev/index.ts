import { ethers } from 'hardhat';
import { A, X } from '../typechain-types';
import { deployContract, init, meta } from './utils';
import * as Types from '../typechain-types';

async function main() {
  await meta();
  type Factories = typeof Types.factories;
  type Contracts = ReturnType<Factories[keyof Factories]["connect"]>;
  type A = keyof Factories;
  const data = {
    name: 'jimao',
    age: 16,
    women: true,
  };
  type Data = typeof data;
  
  function test<T extends keyof Data>(name: T): Data[T] {
    return null as any;
  }

  const b = test('women');
}

async function dev() {
  await init();
  main();
}

dev();
