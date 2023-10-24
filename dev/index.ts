import { ethers } from 'hardhat';
import hardhat from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';
import { X1 } from '../typechain-types';

let signer: HardhatEthersSigner;

async function logBalance(signer: HardhatEthersSigner) {
  const balance = await signer.provider.getBalance(signer.address);
  console.log(ethers.formatEther(balance) + 'ETH');
}

function short_address(address: string) {
  return address.slice(0, 5) + '...' + address.slice(address.length - 3);
}

async function meta(address?: string) {
  console.log();
  address = address ?? signer.address;
  console.log(`<Meta ${short_address(address)}>`);
  const balance = ethers.formatEther(await signer.provider.getBalance(address));
  console.log(balance + 'ETH', address);
}

async function deployContract(name: string) {
  console.log();
  console.log('<DeployContract>');
  console.log(name, 'deployContract...');
  let contract = await ethers.deployContract(name);
  console.log(name, 'waitForDeployment...');
  contract = await contract.waitForDeployment();
  console.log(name, 'deployment successful!');
  console.log(name, 'contract address:', contract.target);
  return contract;
}

async function sendETH(address: string, amount: number) {
  console.log();
  console.log('<SendETH>');
  const key = amount.toString() + 'ETH';
  console.log(key, short_address(signer.address), 'to', short_address(address));
  console.log(key, 'sendTransaction...');
  const tx = await signer.sendTransaction({
    to: address,
    value: ethers.parseEther(amount.toString()),
  });
  console.log(key, 'wait...');
  await tx.wait();
}

async function main() {
  signer = (await ethers.getSigners())[0];
  const x1 = await deployContract('X1');
  console.log(x1.target);
  await meta(x1.target.toString());
  await sendETH(x1.target.toString(), 1000.1);
  await meta(x1.target.toString());
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
