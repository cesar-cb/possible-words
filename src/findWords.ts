import words from './words';

export default (word: string, exclude: Array<string>, has: Array<string>) => {
  const possibleWords = [];

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
