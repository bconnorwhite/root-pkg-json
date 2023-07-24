<div align="center">
  <h1>root-pkg-json</h1>
  <a href="https://npmjs.com/package/root-pkg-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/root-pkg-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/root-pkg-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/root-pkg-json.svg">
  </a>
  <a href="https://coveralls.io/github/bconnorwhite/root-pkg-json?branch=master">
    <img alt="Coverage Status" src="https://coveralls.io/repos/github/bconnorwhite/root-pkg-json/badge.svg?branch=master">
  </a>
  <a href="https://github.com/bconnorwhite/root-pkg-json">
    <img alt="GitHub Stars" src="https://img.shields.io/github/stars/bconnorwhite/root-pkg-json?label=Stars%20Appreciated%21&style=social">
  </a>
</div>

<br />

> Find the highest package.json, starting from from the current working directory.

## Installation

```sh
npm install root-pkg-json
```

```sh
yarn add root-pkg-json
```

```sh
pnpm add root-pkg-json
```

```sh
bun add root-pkg-json
```

## Usage
```ts
import { rootPkgJSON } from "lerna-npm-proxy";

// Returns an absolute path to the root package.json
const pkgJSON = await rootPkgJSON(); // string | undefined
```

### Options
```ts
type Options {
  /**
   * The directory to start searching from.
   * 
   * @default process.cwd()
   */
  readonly cwd?: URL | string;
};
```

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/root-pkg-json.svg"></h2>

- [locate-path](https://www.npmjs.com/package/locate-path): Get the first path that exists on disk of multiple paths

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/root-pkg-json.svg"></h2>

[MIT](https://opensource.org/licenses/MIT)
