#!/usr/bin/env node
import meow from 'meow';
import chalk from 'chalk';
import findWord from './findWords';

const cli = meow(
  `
	Usage
	  $ find-words <input>

	Options
	  --word, -w  Word to find
	  --exlude, -w  Letters to exlude
	  --has, -h  Letters to include

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
  `,
  {
    importMeta: import.meta,
    flags: {
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
    },
  }
);

const word = cli.flags.word;
const exclude = (cli.flags.exclude ?? '').split('');
const has = (cli.flags.has ?? '').split('');

const init = () => {
  if (!word)
    return console.error(chalk.red('missing --word flag, eg: --word=c-rta'));

  if (word.length !== 5)
    return console.error(chalk.red('word must be 5 characters'));

  const words = findWord(word, exclude, has);

  for (const word of words) console.log(chalk.green(word));
};

init();
