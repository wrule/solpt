import { send } from 'process';
import { X3 } from '../typechain-types';
import { deployContract, getContract, init, meta, sendETH } from './utils';

async function main() {
  await meta();
  const x3 = await getContract<X3>('X3', '0x2a810409872AfC346F9B5b26571Fd6eC42EA4849');
  
  await sendETH(x3.target.toString(), 1.12);
  
  // x3.sendMessage('哈哈镜');
  // let i = 1;
  // setInterval(() => {
  //   x3.sendMessage('我是一个大傻逼' + (i++).toString());
  // }, 1000);

  // const x3 = await deployContract<X3>('X3');
  // x3.on(x3.getEvent('sendMessageEvent'), (message: string) => {
  //   console.log('sendMessageEvent', message);
  // });
  // x3.on(x3.getEvent('receiveEvent'), (sender: string, value: bigint) => {
  //   console.log('receiveEvent', sender, value);
  // });
  // x3.on(x3.getEvent('fallbackEvent'), (sender: string, value: bigint, data: string) => {
  //   console.log('fallbackEvent', sender, value, data);
  // });
}

async function dev() {
  await init();
  main();
}

dev();
