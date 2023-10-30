import { ethers } from 'hardhat';
import { deployContract, getSigner, init, meta, watchContract } from './utils';
import { X } from '../typechain-types';

async function main() {
  await meta();
  const x = await deployContract<X>('X');
  const data = ethers.toUtf8Bytes('ABCD');
  const hash = ethers.keccak256(data);
  const buffer = Buffer.from(hash.replace('0x', ''), 'hex');
  const signature = await getSigner().signMessage(buffer);
  const address = await x.ecd(data, signature);
  console.log(address);
}

async function dev() {
  await init();
  main();
}

dev();
