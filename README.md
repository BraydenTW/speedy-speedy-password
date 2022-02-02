# speedy-speedy-password

Generate a password based off user inputs with *speed* ⚡

---

## Install

### NPM

```
npm i speedy-speedy-password
```

### Yarn

```
yarn add speedy-speedy-password
```

## Usage

Just import and use the code like so:

```js
const speedySpeedyPassword = require("speedy-speedy-password"); 

speedySpeedyPassword(6, 4, 4, 3) // jC!C0f0C5islH!7&w
```

### Parameters

Pass in the following parameters in order as an array.

The amount of:
- **lowercase letters**
- **uppercase letters**
- **numbers**
- **specials**

```js
speedySpeedyPassword(6, 4, 4, 3) // jC!C0f0C5islH!7&w
```