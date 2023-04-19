# Basic steps for Smart Contract Development

### [HardHat](https://hardhat.org/tutorial) is a development environment Ethereum contracts and dApps

<br>

Prerequisites are Basic knowledge of :

- JavaScript (TS)
- Operating a terminal and [GIT](https://youtube.com/playlist?list=PL_s5d7ncPMZaFc6FBXIkabLUiljGkYOYL)
- How [Smart contracts](https://ethereum.org/learn/#smart-contracts) work
- Metamask wallet

<hr>

## Setup

<br>

[VS Code extension](https://marketplace.visualstudio.com/items?itemName=NomicFoundation.hardhat-solidity)

<br>

In a fresh folder run these commands

```
npm init -y && npm i -D hardhat
```

To initilize HardHat project

```
npx hardhat
```

Select

- `create a Typescript project`
- Press enter for `Hardhat project root`
- Yes for `.gitignore`
- YES for `(@nomicfoundation/hardhat-toolbox) installation`

<br>

<!-- ```
npm i -D @nomicfoundation/hardhat-toolbox
``` -->
<hr>

## Now Let's create create a simple smart contract.

<br>

### Theory of the contract we are going to build

- It will implements a token that can be transferred.
- There will be a fixed total supply of tokens that can't be changed.
- The entire supply will be assigned to the address that deploys the contract.
- Anyone can receive tokens.
- Anyone with at least one token can transfer tokens.
- The token will be non-divisible. You can transfer 1, 2, 3 or 37 tokens but not 2.5.
- For simplicity the token we're going to build does not implement the ERC-20 standard.

### Practical of the contract

[/contracts/Lock.sol](./contracts/Lock.sol)

 <br>
 <br>
 <br>
 <br>

To compile code

```
npx hardhat compile
```
