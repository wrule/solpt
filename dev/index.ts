import { ethers } from 'hardhat';
import hardhat from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';
import { X1, X2 } from '../typechain-types';

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

async function deployContract<T>(name: string) {
  console.log();
  console.log('<DeployContract>');
  console.log(name, 'deployContract...');
  let contract = await ethers.deployContract(name);
  console.log(name, 'waitForDeployment...');
  contract = await contract.waitForDeployment();
  console.log(name, 'deployment successful!');
  console.log(name, 'contract address:', contract.target);
  return contract as T;
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
  const x1 = await deployContract<X1>('X1');
  const x2 = await deployContract<X2>('X2');
  const tx = await x1.sendETH(x2.target, { value: ethers.parseEther('1') });
  await tx.wait();
  meta(x2.target.toString());
}

main();
