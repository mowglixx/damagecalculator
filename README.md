  <a aria-label="License" href="https://github.com/vercel/next.js/blob/canary/license.md">
    <img alt="" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000">
  </a>
  
# Damage Calculator

A simple finance tracker for people who "aint got no time fo' dat" :ok_hand: written in `TypeScript` with `Next.js`

---

[Github](https://github.com/mowglixx/damage-calculator-nextjs)

## How to run

### Quick Start

Install yarn
[Help Installing Yarn](https://classic.yarnpkg.com/en/docs/install#alternatives-stable)

```bash
npm i -g yarn
yarn && yarn dev
```

## Scripts

```js
// from package.json
scipts: { // yarn/npm run ...
    dev: "next dev",
    // non working scripts below here
    build: "next build",
    start: "next start",
    docker: "docker-compose up -d ./docker-compose.yml",
    dockerAttach: "docker-compose up ./docker-compose.yml"
    }
```

### run the dev environment

```sh
yarn dev
```

### run the production server

```sh
yarn build
yarn start
## (coming soon, not even close to ready) ##
```

### Docker

```sh
# Needs Dockerfile to be configured
yarn run docker

## or run attached if you use a detachable terminal like tmux/screen
yarn run dockerAttached
```

## A note on Yarn

_Yarn is optional and you can run all the commands by replacing_

```
yarn run [script]
```

_with_

```
npm run [script]
```
