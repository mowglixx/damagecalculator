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

```
cd ~/damage-calculator-nextjs
yarn
yarn dev
```

## Scripts
```js
// from package.json
scipts: { // yarn run ...
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
# (currently working kinda)
```
### run the production server
```sh
yarn build
yarn start
# (coming soon)
```
### Docker Compose
#### Attached
```sh
yarn run dockerAttached
# Needs Dockerfile currently
```
#### Detached / Headless
```sh
yarn run docker
# Needs Dockerfile currently
```

## A note on Yarn
*Yarn is optional and you can run all the commands by replacing*
```
yarn run [script]
```
*with*
```
npm run [script]
```