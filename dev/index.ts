import { ethers } from 'hardhat';
import { deployContract, getSigner, init, meta, watchContract } from './utils';
import { X } from '../typechain-types';

async function main() {
  await meta();
  const x = await deployContract<X>('X');
  const data = 'ABCD';
  const a = ethers.keccak256(ethers.toUtf8Bytes(data));
  console.log(a);
  const b = ethers.solidityPackedKeccak256(['string', 'bytes32'], ['\x19Ethereum Signed Message:\n32', a]);
  console.log(b);
  const buffer = Buffer.from(a.replace('0x', ''), 'hex');
  const c = await getSigner().signMessage(buffer);
  console.log(c);
  const d = await x.ecd(a, c);
  console.log(d);
}

async function dev() {
  await init();
  main();
}

dev();
