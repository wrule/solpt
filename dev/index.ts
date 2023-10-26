import { X4 } from '../typechain-types';
import { deployContract, init, meta } from './utils';

async function main() {
  await meta();
  const x4 = await deployContract<X4>('X4');
  x4.on(x4.getEvent('sendMessageEvent'), (message) => {
    console.log(message);
  });
  await x4.sendMessage('你好啊');
  const text = await x4.list(0);
  console.log(text);
}

async function dev() {
  await init();
  main();
}

dev();
