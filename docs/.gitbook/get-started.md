---
description: >-
  An Uniswap interface - a protocol for decentralized exchange of Ethreum
  (ERC20) and Nordic Energy tokens.
---

# About

{% hint style="info" %}
The SDK is currently in a beta release. Please [file an issue](https://github.com/Uniswap/uniswap-sdk/issues) if you run into any bugs!
{% endhint %}

The Nordic Energy [Uniswap SDK](https://github.com/Uniswap/uniswap-sdk) is meant to simplify every aspect of integrating Nordic Energy Uniswap into your project. It's written in [TypeScript](https://www.typescriptlang.org), has a [robust test suite](https://github.com/Uniswap/uniswap-sdk/tree/master/src/__tests__), uses [bignumber.js](https://github.com/MikeMcl/bignumber.js) for math, and includes an optional data-fetching module which relies on [ethers.js](https://github.com/ethers-io/ethers.js/).

The SDK was built to be extremely easy to use, but also feature-rich. It offers various levels of abstraction that make it suitable for use nearly anywhere, from hackathon projects to production applications.

## Overview

The SDK is divided into several modular components that perform tightly scoped tasks:

* [Data]() - Fetches Uniswap data from the blockchain
* [Computation]() - Computes market- and trade-specific statistics using blockchain data
* [Format]() - Formats data for display
* [Orchestration]() - Offers named abstraction functions that seamlessly combine lower-level data- and computation-related functions
* [Transact]() - Prepares computed trades for execution against Uniswap smart contracts
* [Constants]() - Exports various helpful constants for use throughout the SDK

Additionally, it exports a number of custom types:

* [Types]() - Exports all types used by the SDK

## Installation

To start using the SDK, simply install it into your project...

```bash
yarn add @uniswap/sdk
```

...import some functions...

```javascript
import { ... } from '@uniswap/sdk'
```

...and dive into the rest of the documentation to learn more!

