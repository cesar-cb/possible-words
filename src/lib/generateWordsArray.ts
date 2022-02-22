import fs from 'fs';
import path from 'path';
import readline from 'readline';

async function processLineByLine(file: string, arrayName: string) {
  const fileStream = fs.createReadStream(file);

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const filteredWords = [];

  for await (const line of rl) {
    if (line.length === 5 && !line.includes("'"))
      filteredWords.push(
        line
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
      );
  }

  const uniqueWords = [...new Set(filteredWords)];

  fs.appendFile(
    './src/words.ts',
    `export const ${arrayName} = ${JSON.stringify(uniqueWords)};\n`,
    function (err) {
      if (err) {
        console.log('err append', err);
      }
    }
  );
}

(async () => {
  const dictionaryPath = (fileName: string) =>
    path.join(__dirname, '../../', 'dictionary', fileName);

  fs.unlinkSync('./src/words.ts');

  await Promise.all([
    processLineByLine(dictionaryPath('pt-br.txt'), 'ptBrWords'),
    processLineByLine(dictionaryPath('en.txt'), 'enWords'),
  ]);
})();
