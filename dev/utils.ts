import { ethers } from 'hardhat';
import { HardhatEthersSigner } from '@nomicfoundation/hardhat-ethers/signers';

let _signer!: HardhatEthersSigner;
let _otherSigners!: HardhatEthersSigner[];

export const signer = _signer;
export const otherSigners = _otherSigners;

export
async function init() {
  [_signer, ..._otherSigners] = await ethers.getSigners();
}

export
function short_address(address: string) {
  return address.slice(0, 5) + '...' + address.slice(address.length - 3);
}

export
async function meta(address?: string) {
  console.log();
  address = address ?? signer.address;
  console.log(`<Meta ${short_address(address)}>`);
  const balance = ethers.formatEther(await signer.provider.getBalance(address));
  console.log(balance + 'ETH', address);
}

export
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

export
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
