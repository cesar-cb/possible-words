[![npm](https://img.shields.io/npm/v/possible-words)](https://www.npmjs.com/package/possible-words)

# Possible Words

This tool returns possible words based on your input, for games like:

- [termo](https://term.ooo)
- [wordle](https://www.nytimes.com/games/wordle/index.html)
- [letreco](https://www.gabtoschi.com/letreco/)

## Install

```
$ npm install -g possible-words
```

or

```
$ yarn global add possible-words
```

## Usage

```
$ possible-words <options>

Options:
      --help      Show help                                            [boolean]
      --version   Show version number                                  [boolean]
  -w, --word                                                            [string]
  -e, --exclude                                                         [string]
  -h, --has                                                             [string]
  -l, --language                     [choices: "pt-br", "en"] [default: "pt-br"]

Examples
  $ possible-words --word="paus?" --language="en"
    pause

  $ possible-words --word=c?rta
    carta
    carga
    ...

  $ possible-words --word="car?a" --exclude="gzym"
    carta
    ...

  $ possible-words --word="car?a" --has="g"
    carga
    ...
```
