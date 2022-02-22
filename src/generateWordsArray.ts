import fs from 'fs';
import readline from 'readline';

async function processLineByLine() {
  const fileStream = fs.createReadStream('br-utf8.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const filteredWords = [];

  for await (const line of rl) {
    if (line.length === 5)
      filteredWords.push(
        line
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      );
  }

  console.log({ filteredWords });

  fs.appendFile(
    'filtered-words.txt',
    JSON.stringify([...new Set(filteredWords)]),
    function (err) {
      if (err) {
        console.log('err append', err);
      }
    }
  );
}

processLineByLine();
