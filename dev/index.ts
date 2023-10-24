import { ethers } from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

async function logBalance(signer: HardhatEthersSigner) {
  const balance = await signer.provider.getBalance(signer.address);
  console.log(ethers.formatEther(balance) + 'ETH');
}

async function deployContract(name: string) {
  console.log(name, 'deployContract...');
  let contract = await ethers.deployContract(name);
  console.log(name, 'waitForDeployment...');
  contract = await contract.waitForDeployment();
  console.log(name, 'deployment successful!');
  console.log(name, 'contract address:', contract.target);
}

async function main() {
  await deployContract('X1');
  // const signer = (await ethers.getSigners())[0];
  // console.log(signer.address);
  // await logBalance(signer);
  // const tx = await signer.sendTransaction({
  //   to: ethers.Wallet.createRandom().address,
  //   value: ethers.parseEther('1'),
  // });
  // await tx.wait();
  // await logBalance(signer);
}

main();
