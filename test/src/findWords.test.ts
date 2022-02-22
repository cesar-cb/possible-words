import findWords from 'src/findWords';

const language: 'pt-br' | 'en' = 'pt-br';

const params = {
  word: 'car?a',
  exclude: [],
  has: ['g'],
  language,
};

describe('findWords', () => {
  it('should return an array of words', () => {
    const words = findWords(params);
    expect(words).toEqual(['carga']);
  });
});
