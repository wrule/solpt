import { ethers } from 'hardhat';
import { deployContract, getSigner, init, meta, watchContract } from './utils';
import { X } from '../typechain-types';

async function main() {
  const x = await deployContract<X>('X');
  // const wallet = new ethers.Wallet('0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b');
  // console.log(wallet.address);
  const a = ethers.solidityPackedKeccak256(['address', 'uint256'], ['0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', 0]);
  console.log(a);
  const b = ethers.solidityPackedKeccak256(['string', 'bytes32'], ['\x19Ethereum Signed Message:\n32', a]);
  console.log(b);
  const buffer = Buffer.from(a.replace('0x', ''), 'hex');
  const c = await getSigner().signMessage(buffer);
  console.log(c);

  const d = await x.ecd(b, c);
  console.log(d);
  // await meta();

  // const a = ethers.solidityPackedKeccak256(['address', 'uint256'], ['0x5B38Da6a701c568545dCfcB03FcB875f56beddC4', 0]);
  // console.log(a);
  // const b = ethers.solidityPackedKeccak256(['string', 'bytes32'], ['\x19Ethereum Signed Message:\n32', a]);
  // console.log(b);
  // const x = await deployContract<X>('X');
  // watchContract(x);
  // const data = 'ABCD';
  // ethers.solidityPackedKeccak256(data);

  // const signature = await getSigner().signMessage(data);
  // const a = await x.ecd(data, signature);
  // console.log(a);
  // console.log(hash);
  // console.log(signature);
  // const b = ethers.verifyMessage(hash, signature);
  // console.log(b);
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
