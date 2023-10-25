import { send } from 'process';
import { X3 } from '../typechain-types';
import { deployContract, getContract, init, meta } from './utils';

async function main() {
  await meta();
  // const x3 = await getContract<X3>('X3', '0x5FbDB2315678afecb367f032d93F642f64180aa3');
  // await x3.sendMessage('你好，世界');

  const x3 = await deployContract<X3>('X3');
  x3.on(x3.getEvent('sendMessageEvent'), (message: string) => {
    console.log('sendMessageEvent', message);
  });
  x3.on(x3.getEvent('receiveEvent'), (sender: string, value: bigint) => {
    console.log('receiveEvent', sender, value);
  });
  x3.on(x3.getEvent('fallbackEvent'), (sender: string, value: bigint, data: string) => {
    console.log('fallbackEvent', sender, value, data);
  });
}

async function dev() {
  await init();
  main();
}

dev();
