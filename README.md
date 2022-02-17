# Possible Words

This tool returns possible words based on your input, for games like:

- [termo](https://term.ooo)
- [wordle](https://www.nytimes.com/games/wordle/index.html)
- [letreco](https://www.gabtoschi.com/letreco/)

## Install

```
$ yarn global add possible-words
```

or

```
$ npm install -g possible-words
```

## Usage

```
$ possible-words <options>

Options
  --word, -w  Word to find
  --exclude, -e  Letters to exclude (optional)
  --has, -h  Letters to include (optional)

Examples
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
