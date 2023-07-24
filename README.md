<!--BEGIN HEADER-->
<div id="top" align="center">
  <h1>root-pkg-json</h1>
  <a href="https://npmjs.com/package/root-pkg-json">
    <img alt="NPM" src="https://img.shields.io/npm/v/root-pkg-json.svg">
  </a>
  <a href="https://github.com/bconnorwhite/root-pkg-json">
    <img alt="TypeScript" src="https://img.shields.io/github/languages/top/bconnorwhite/root-pkg-json.svg">
  </a>
</div>

<br />

<blockquote align="center">Find the highest package.json, starting from from the current working directory.</blockquote>

<br />

_If I should maintain this repo, please ⭐️_
<a href="https://github.com/bconnorwhite/root-pkg-json">
  <img align="right" alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/root-pkg-json?label=%E2%AD%90%EF%B8%8F&style=social">
</a>

_DM me on [Twitter](https://twitter.com/bconnorwhite) if you have questions or suggestions._
<a href="https://twitter.com/bconnorwhite">
  <img align="right" alt="Twitter" src="https://img.shields.io/twitter/url?label=%40bconnorwhite&style=social&url=https%3A%2F%2Ftwitter.com%2Fbconnorwhite">
</a>

---
<!--END HEADER-->

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

<!--BEGIN FOOTER-->

<br />

<h2 id="dependencies">Dependencies<a href="https://www.npmjs.com/package/root-pkg-json?activeTab=dependencies"><img align="right" alt="dependencies" src="https://img.shields.io/librariesio/release/npm/root-pkg-json.svg"></a></h2>

- [locate-path](https://www.npmjs.com/package/locate-path): Get the first path that exists on disk of multiple paths

<br />

<h3>Dev Dependencies</h3>

- [autorepo](https://www.npmjs.com/package/autorepo): Autorepo abstracts away your dev dependencies, providing a single command to run all of your scripts.

<br />

<h2 id="license">License <a href="https://opensource.org/licenses/MIT"><img align="right" alt="license" src="https://img.shields.io/npm/l/root-pkg-json.svg"></a></h2>

[MIT](https://opensource.org/licenses/MIT)
<!--END FOOTER-->
