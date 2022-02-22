import { ptBrWords, enWords } from './words';

type TParams = {
  word: string;
  exclude: Array<string>;
  has: Array<string>;
  language: 'pt-br' | 'en';
};

export default ({ word, exclude, has, language }: TParams) => {
  const possibleWords = [];
  const words = language === 'en' ? enWords : ptBrWords;

  for (let i = 0; i < words.length; i++) {
    const currentWord = words[i];

    for (let j = 0; j < 5; j++) {
      const currentLetter = word[j];

      if (
        has.length > 0 &&
        has.some((letter) => !currentWord.includes(letter))
      ) {
        break;
      }

      if (
        (currentWord[j] === currentLetter || currentLetter === '?') &&
        !exclude.includes(currentWord[j])
      ) {
        if (j === 4) {
          possibleWords.push(currentWord);
        }
      } else {
        break;
      }
    }
  }

  return possibleWords;
};
