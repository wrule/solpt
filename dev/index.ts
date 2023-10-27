import { ethers } from 'hardhat';
import { deployContract, getSigner, init, meta, watchContract } from './utils';
import { X } from '../typechain-types';

async function main() {
  await meta();
  // const x = await deployContract<X>('X');
  // watchContract(x);
  // await x.sendMessage('ABCD');
  const data = ethers.toUtf8Bytes('ABCD');
  const signature = await getSigner().signMessage(data);
  console.log(signature);
  const b = ethers.verifyMessage(data, signature);
  console.log(b);
  // const a = ethers.keccak256(ethers.toUtf8Bytes(text));
  // console.log(a);
  // console.log(Buffer.from(a.replace('0x', ''), 'hex'));
  // const b = await getSigner().signMessage(Buffer.from(a.replace('0x', ''), 'hex'));
  // // console.log(a);
  // console.log(b);
}

async function dev() {
  await init();
  main();
}

dev();
