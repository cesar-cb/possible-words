import findWords from 'src/findWords';

type TParams = {
  language?: 'pt-br' | 'en';
};

const params = ({ language = 'pt-br' }: TParams = {}) => ({
  word: 'paus?',
  exclude: [],
  has: [],
  language,
});

describe('findWords', () => {
  it('should return an array of words [pt]', () => {
    const words = findWords(params());
    expect(words).toEqual(['pausa']);
  });

  it('should return an array of words [en]', () => {
    const words = findWords(params({ language: 'en' }));
    expect(words).toEqual(['pause']);
  });
});
