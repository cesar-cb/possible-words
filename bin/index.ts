#!/usr/bin/env node

import yargs from 'yargs';
import chalk from 'chalk';
import { hideBin } from 'yargs/helpers';
import findWord from '../src/findWords';

const argv = yargs(hideBin(process.argv))
  .usage(
    `
Usage
  $ find-words <options>

Examples
  $ find-words --word=c-rta
   carta
   carga
   ...

  $ find-words --word="c-rta" --exclude="gzym"
    carta
    ...

  $ find-words --word="c-rta" --has="g"
    carga
    ...
`
  )
  .options({
    word: {
      type: 'string',
      alias: 'w',
    },
    exclude: {
      type: 'string',
      alias: 'e',
    },
    has: {
      type: 'string',
      alias: 'h',
    },
    language: {
      choices: ['pt-br', 'en'],
      default: 'pt-br',
      alias: 'l',
    },
  })
  .parseSync();

const word = argv.word;
const exclude = (argv.exclude ?? '').split('');
const has = (argv.has ?? '').split('');
const language = argv.language as 'pt-br' | 'en';

const init = () => {
  if (!word)
    return console.error(chalk.red('missing --word flag, eg: --word=c-rta'));

  if (word.length !== 5)
    return console.error(chalk.red('word must be 5 characters'));

  const words = findWord({ word, exclude, has, language });

  for (const word of words) console.log(chalk.green(word));
};

init();
