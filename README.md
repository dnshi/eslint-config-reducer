# eslint-config-reducer

[![npm version](https://badge.fury.io/js/eslint-config-reducer.svg)](https://www.npmjs.com/package/eslint-config-reducer)
[![npm](https://img.shields.io/npm/dt/eslint-config-reducer.svg)](https://www.npmjs.com/package/eslint-config-reducer)

ESLint config with **Prettier** for Vanilla Javascript and ReactJS

## Install

```sh
$ npm i -D eslint eslint-config-reducer prettier
```

## Use

To use `eslint-config-reducer`, add it to your `.eslintrc` file

**For Node/JavaScript project**

```js
{
  "extends": "reducer",
  "rules": {}
}
```

**For ReactJS project**

```js
{
  "extends": "reducer/react",
  "rules": {}
}
```

**For ReactJS + TypeScript project**

```js
{
  "extends": "reducer/typescript",
  "rules": {}
}
```
