# Simple DeFi Vault

This repository contains a high-quality implementation of a decentralized finance (DeFi) vault. It follows the logic of inflation-resistant share accounting, similar to the ERC-4626 standard but simplified for educational purposes.

### Core Mechanics
* **Deposit:** Users lock tokens in the vault and receive minted shares.
* **Withdraw:** Users burn shares to retrieve their proportional amount of the underlying tokens.
* **Share Calculation:** Uses the formula: $shares = \frac{amount \times totalShares}{totalAssets}$.
* **Flat Structure:** All logic, deployment, and testing files are located in the root for ease of use.

### Setup
1. Run `npm install`
2. Compile contracts: `npx hardhat compile`
3. Deploy: `npx hardhat run deploy.js`
