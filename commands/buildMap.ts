import fs from 'fs';
import * as Types from '../typechain-types';

function contractNames() {
  return Object.keys(Types.factories)
    .map((name) => /^(.+)__factory$/.exec(name)?.[1])
    .filter((name) => name);
}

function main() {
  fs.writeFileSync('typechain-types/map.ts', `
import * as Types from '.';

export default {
${contractNames().map((name) => `  '${name}': Types.${name}__factory,`).join('\n')}
};
`.trim() + '\n');
}

main();
