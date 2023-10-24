import { ethers } from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';
import { X1, X2 } from '../typechain-types';
import { deployContract, init, meta, signer } from './utils';

async function main() {
  await init();
  const x1 = await deployContract<X1>('X1');
  const x2 = await deployContract<X2>('X2');
  try {
    const tx = await x1.sendETH(x2.target, 123, { value: ethers.parseEther('1') });
    await tx.wait();
  } catch (error) {
    console.error('error');
  }
  meta(x2.target.toString());
  const b = await x1.x();
  console.log(b);
}

main();
