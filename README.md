[![Gitpod Ready-to-Code](https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod)](https://gitpod.io/#https://github.com/nordicenergy/uniswap-exchange) 

# Nordic Energy - Uniswap Exchange Frontend

####  Nordic Energy´s Uniswap a protocol for automated token exchange on Ethereum (ERC-20) and Nordic Energy Tokens.

Redesigned with simplicity in mind, the Uniswap protocol provides an interface for seamless exchange of Nordic Energy and Ethereum tokens. By eliminating unnecessary forms of rent extraction and middlemen it allows faster, more efficient exchange. Where it makes tradeoffs, decentralization, censorship resistance, and security are prioritized. Uniswap is forked Uniswap open source and functions as a public good. There is no central token or platform fee. No special treatment is given to early investors, adopters, or developers. Token listing is open and free. All smart contract functions are public and all upgrades are opt-in.

This site will serve as a project overview for Uniswap - explaining how it works, how to use it, and how to build on top of it. These docs are actively being worked on and more information will be added on an ongoing basis.

An open source interface for Uniswap - a protocol for decentralized exchange of Ethereum and Nordic Energy tokens of Ecosystem.

Website: https://uniswap.nordicenergy.co
Docs: https://uniswap.nordicenergy.co/docs
Email: contact@Uniswap.nordicenergy.co
Whitepaper: Link

## Features:

	•	A simple smart contract interface for swapping Nordic Energy and other ERC20 tokens
	•	A formalized model for pooling liquidity reserves
	•	An open source frontend interface for traders and liquidity providers
	•	A commitment to free and decentralized asset exchange
```

## Run Uniswap Locally

1. Download and unzip the `build.zip` file from the latest release in the [Releases tab](https://github.com/nordicenergy/Uniswap/).

2. Serve the `build/` folder locally, and access the application via a browser.

For more information on running a local server see [https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/set_up_a_local_testing_server). This simple approach has one downside: refreshing the page will give a `404` because of how React handles client-side routing. To fix this issue, consider running `serve -s` courtesy of the [serve](https://github.com/zeit/serve) package.

## Develop Uniswap Locally

### Install Dependencies

```bash
yarn
```

### Configure Environment

Rename `.env.local.example` to `.env.local` and fill in the appropriate variables.

### Run

```bash
yarn start
```

To run on a testnet, make a copy of `.env.local.example` named `.env.local`, change `REACT_APP_NETWORK_ID` to `"{yourNetworkId}"`, and change `REACT_APP_NETWORK_URL` to e.g. `"https://{yourNetwork}.infura.io/v3/{yourKey}"`.

If deploying with Github Pages, be aware that there's some [tricky client-side routing behavior with `create-react-app`](https://create-react-app.dev/docs/deployment#notes-on-client-side-routing).

## Contributions

**Please open all pull requests against the `beta` branch.** CI checks will run against all PRs. To ensure that your changes will pass, run `yarn check:all` before pushing. If this command fails, you can try to automatically fix problems with `yarn fix:all`, or do it manually.
