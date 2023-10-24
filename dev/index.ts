import { init, meta } from './utils';

async function main() {
  meta();
}

async function dev() {
  await init();
  main();
}

dev();
