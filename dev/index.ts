import { ethers } from 'hardhat';
import hardhat from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

let signer: HardhatEthersSigner;

async function logBalance(signer: HardhatEthersSigner) {
  const balance = await signer.provider.getBalance(signer.address);
  console.log(ethers.formatEther(balance) + 'ETH');
}

function short_address(address: string) {
  return address.slice(0, 5) + '...' + address.slice(address.length - 3);
}

async function meta() {
  const balance = ethers.formatEther(await signer.provider.getBalance(signer.address));
  console.log(short_address(signer.address), balance + 'ETH');
}

async function deployContract(name: string) {
  console.log('<DeployContract>');
  console.log(name, 'deployContract...');
  let contract = await ethers.deployContract(name);
  console.log(name, 'waitForDeployment...');
  contract = await contract.waitForDeployment();
  console.log(name, 'deployment successful!');
  console.log(name, 'contract address:', contract.target);
  return contract;
}

async function main() {
  signer = (await ethers.getSigners())[0];
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
