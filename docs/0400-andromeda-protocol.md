---
title: 'Andromeda Protocol'
excerpt: '-'
coverImage: ''
date: ''
section: 400
author:
  name: ''
ogImage:
  url: ''
---

The Andromeda Metaverse Commercial Protocol has an unparalleled openness that facilitates trading and interoperability with various metaverse games and ecologies.

Based on Ethereum ERC-20, ERC-721, ERC-1155 and Newton NewChain NRC-6, NRC-7, NRC-50 and other basic protocols, Andromeda Metaverse Commerce Ecosystem has built a large number of NFT digital asset trading protocols, called Andromeda Protocol Metaverse Commercial Protocol. The metaverse commercial protocols are a set of protocols, specifically containing several sub-protocols as described below.

Andromeda Metaverse is a decentralized, cross-chain network that supports NFT for casting, trading, and financing. All protocols are license-free open and censorship-resistant, facilitating integration and interoperability with various metaverse games, as well as transactions. All protocols can be set with fee switches to generate revenue when necessary to support the value of governance tokens.

## Pricing and Trading Protocols

### Abstract

The Pricing and Trading Protocol is an on-chain protocol that progressively discovers the value of NFTs and can provide the ability to trade NFTs between users, which consists of a combination of contracts. Users need authorization to allow the protocol to transfer NFTs with established contract logic before they can buy or sell NFTs. the protocol includes royalties, agreement fees, and transactions that support trading of any NFT that meets the NRC-7/ERC-721/ERC-1155 standard.

### Specification

The royalty is an interface provided by the protocol, and the protocol is able to pay creator royalties if and only if the specified interface is supported in the NFT; if it is not set, the royalty is passed to the protocol itself.

```
function royaltyFeeInfo(address token) external view returns (address recipient, uint8 permil);
```

The interface for setting royalties requires the implementation of this interface, which returns the following information:

- recepient: address type, the address of the recipient of the royalty
- permit: uint8 type, maximum value is 255, the percentage of royalty, base is 1000, then the maximum royalty is 25.5%

The agreement fee is the fee to be paid for using the protocol, which can be changed by the DAO, with an initial value of `5%`. The interface is as follows:

```
function protocolFeeInfo() external view returns (address recipient, uint8 permil);
```

The interface returns the following information:

- recipient: address type, protocol fee receiving address
- permit: uint8 type, maximum value is 255, cost percentage, base is 1000, then the maximum value is 25.5%

The trading protocol will have a variety of different trading strategies, and the trading strategies will need to have interfaces that implement the following:

```
interface IStrategy {
    function canExecute(
        uint256 deadline,
        bytes memory params,
        address bidder,
        uint256 bidPrice
    ) external view returns (bool);

    function canBid(
        uint256 deadline,
        bytes memory params,
        address bidder,
        uint256 bidPrice,
        uint256 bestBidPrice,
        uint256 bestBidBlock
    ) external view returns (bool);
}
```

Among them, canExecute determines whether the order can execute the trading function in this strategy; canBid determines whether the order can be called under this strategy.

Trading strategies are divided into the following types:

- Fixed Price Trading

  - Sellers place orders to sell at a fixed price
  - Buyer buys at that price

- British Auction

  - A British auction is an incremental auction
  - The NFT seller sets the minimum price, reserve price (default is the minimum price), and expiration time
  - Buyers will bid against the NFT, and the agreement guarantees that only incremental bids can be made and that the highest bidder cannot withdraw
  - When the auction closes, only when the highest bid is not less than the reserve price, the highest bidder can get the NFT

- Dutch auctions

  - Dutch auctions are reduced-price auctions
  - The user sets the highest and lowest price and sets the bidding time, and the price of the NFT decreases linearly from the highest price to the lowest price according to the time until someone buys or the bidding time ends (aborted)
  - The protocol ensures that only one user sells at the same moment, so there will be no auction increase after two users call for bids at the same time

- Perpetual Auction

  - The user sets the initial price and markup and then transfers the NFT to the control of the protocol
  - Once the perpetual auction has started, anyone can buy the NFT at the initially set markup
  - The perpetual auction stops when and only when the last bidder withdraws the NFT from the agreement after the sale

- Support for user bids
  - Buyer users can place a bid on any specified NFT
  - The owner of the NFT can agree to the price and sell it to the buyer at that price

Some of the parameters of this protocol can be governed, i.e., the protocol owenr for DAO contracts. The parameters that can be governed and their descriptions are as follows.

- Changing the protocol fee
- Adding or removing trading strategies

## Proxy Protocol

### Abstract

The proxy protocol enables anyone to turn their own NFT goods into open inventory, so that others can represent the NFT goods in a permissionless manner, with the flexibility to specify the agent's price, and a share between the agent and the owner after a successful sale in accordance with the distribution agreed in the smart contract.

### Specification

- Create Open Inventory

```
function createOpenStock(assetAddress, nftId, amount, floorPrice, revenueSplit, ceilingPrice, validThru);
```

The owner of the NFT commodity creates an open inventory. Pass in the contract address, number, and quantity for this NFT (for NRC-50/ERC-1155 multi-version NFT).

At the same time, you can also specify a minimum target price (floor price) to limit the bottom price of agent sales; specify the profit-sharing ratio; and specify a maximum target price (ceiling price), when the agent sells above that price, the excess goes entirely to the agent and no further profit-sharing will be made.

Finally, specify the expiration date (block height). Expires automatically.

Once the inventory is created, it is publicly visible on the blockchain. The owner cannot retrieve this NFT during the validity period.

- Withdrawal of inventory

```
function withdrawOpenStock(assetAddress, nftId, amount);
```

At expiration, the owner can withdraw the inventory and retrieve the NFT.

- Proxy inventory

```
function mintShadowNFT(assetAddress, nftId, amount);
```

The proxy inventory process is really a process of casting a "shadow NFT" or a group of "shadow NFTs" based on an open inventory.

These shadow NFTs can be minted at will and placed on any platform the agent is accustomed to for pending sales.

Shadow NFTs replicate the metadata of the stock NFTs and thus have the same appearance. The only difference is that after purchasing a shadow NFT, the buyer needs to pick up the "original" NFT from the inventory contract.

Shadow NFT has a separate purchase method, through which orders can be placed in accordance with the inventory creator's requirements to constrain the minimum price, profit sharing ratio and maximum price, and instantly complete the profit sharing.

Shadow NFT contract will instantly record and index the current inventory balance at the time of order placement, if the inventory is insufficient, the order will fail. This avoids the problem of overselling when multiple agents are present.

- Redeem

```
function redeem(shadownNFT);
```

After purchasing a shadow NFT from an agent, the user can retrieve the "original" NFT from the inventory contract and destroy the corresponding shadow NFT.

## Blind Box Protocol

### Abstract

Blind box trading, also known as random distribution protocols, is a way to avoid trading knock-offs, increase liquidity, and a way to play around with how to discover valuable NFTs. The Andromeda Blind Box protocol allows for the sale of NFTs against a batch of NFTs, and the user will not know the contents of the specific NFTs purchased until after the batch is sold.

The blockchain can ensure the fairness of the blind box. NFTs will be sorted after they are made, and users will get the user number `user_index` after they buy NFTs, and get the random number start_index on the chain after the sale is over, so the actual number of NFTs that users get is: `index = (start_index + user_index) % total`

### Specification

Blind box purchase process：

- NFT Production and Packaging

  - Number the NFT and get its sha256 hash
  - Calculate the total hash value: hash = Keccak-256(hash0 + hash1 + .... + hash10k)
  - The contract is deployed while the total hash is developed

- User purchase
  - User purchase to get `user_index`, but at this time the corresponding NFT index is unknown
  - User purchase can be sold in the secondary market at any time, but the specific content of the goods sold at this time is unknown

```
function buy(uint256 number);
```

- Publish content
  - Publish the content and generate `start_index` at the same time

```
function publish() {
    start_index = random();
}
```

## Synthetic Commodity Protocol

### Abstract

The Synthetic Commodity Protocol is a combination of multiple NFTs to create a new NFT, which allows the NFT holder to program, recreate, and add some useful functionality to the NFT digital asset it holds. It can be used in the field of digital artwork signature, commercial contract signing, etc. The NFT holder licenses its NFT to a specific contract and locks it, inviting other NFT holders to recreate the NFT, casting a NFT digital asset with new characteristics.

Each industry has different synthetic needs, and we will give corresponding standard protocol solutions for different industry application scenarios.

For example, in the field of contract signing, according to the contract signing standard contract developed by Andromeda, business company A sends the signed NFT, business company B sends its signed business contract NFT together to the smart contract, the contract receives the original document, automatically generates a new contract that cannot be colluded, and records the document hash in the chain.

For example, in the game field, the virtual life game, users can set virtual persona through NFT equipment, and in special scenarios two in-game players can synthesize a common pet with a specific NFT, which genetically belongs to these two players only.

### Specification

Raw NFT: NFT that needs to be consumed or needs to be synthesized

Synthetic NFT: New NFT synthesized based on one or more raw NFTs

Synthetic NFT needs to have the transfer permission of the specified token of the raw material NFT. Synthetic NFT needs to transfer the raw material NFT to the contract of synthetic NFT and record it when it is synthesized (minted).

The mint interface for synthetic NFT is as follows:

```
function mint(address[] tokens, uint256[] ids, uint256[] amounts) returns (uint256 id);
```

The tokens, ids and amounts arrays must be the same length and correspond to each other. A new synthetic ID will be returned.

## Liquidity Protocol

### Abstract

The NFT liquidity protocol is a protocol for converting low liquidity non-homogeneous tokens (NFT) into high liquidity homogeneous tokens (FT) through pooling.

Users transfer NFT to NFT pools, which mint homogeneous tokens called Pool Token (NRC6) according to 1:10,000 and return them to the user. each Pool Token is a different NRC-6 token. the Pool Token can be combined with other DeFi protocols such as newswap or repaid to get back the NFT in the pool.

### Specification

- Pool Creation

```
function createVault(name, symbol, assetAddress) returns (vaultId);
```

Anyone can create a new pool based on a specified NFT contract or by specifying the ID of some columns within the contract.

The following fields are required to create the pool：

- NFT's contract address
- The name of the pool, which is also the name of the created NRC-6 token
- The symbol of the pool, which is also the symbol of the created NRC-6 token

The NFT contract address cannot be changed, and by default all IDs can be added to the pool.

- Quality Assurance

```
function setIsEligible(vaultId, nftIds[], true/false);
function setRange(vaultId, start, end);
```

The pool administrator can mark eligible NFT IDs by qualifying the list, range, or taking the inverse.
It is also possible to leave the NFT ID unqualified and include any ID under the specified NFT contract by default.

- Pool Release

```
function finalizeVault(vaultId);
```

Once the pool administrator has finalized and "released" the pool, no further changes can be made to any of the parameters and the pool will be available for external manipulation.

-Minting Pool Token

```
function mint(vaultId, ntfIds[]);
```

Once the pool is published, anyone can deposit qualified NFTs into the pool, and each NFT receives 10,000 Pool Token of the corresponding pool.

- Redeem NFT

```
function redeem(vaultId, numNFTs);
```

Anyone who holds Pool Token in the pool can redeem one NFT for every 10,000 Pool Token. Redemption is done in a blind-box manner and NFT cannot be specified.

## General Points Issuance Agreement

### Abstract

Trading nodes can simply and quickly issue digital assets on the Andromeda Client side and maintain their own fan base through points operation. The reasonable release and application of points will drive the growth of the fan base and can maximize the interests of all parties.

The issuance and management of digital assets within a trading node is operated by the node itself, and the issuance of points is one of the important means for trading nodes to obtain incremental users. Trading nodes can exchange points with various marketing tools such as airdrop, locked mining, shopping incentives, NewSwap pricing swap, etc. in exchange for new increments of users and transactions.

For example, a trading node issues a certain size of points, which can be sent to the ecology through the airdrop strategy protocol provided by Andromeda, and users who receive the points are then converted into private domain traffic for the node.

For example, a trading node can use the liquidity mining protocol to create a pool of points to custom lock NewChian's NRC-6 tokens to mine for points, and the points generated by these active mines will eventually be re-flowed back to the trading node for consumption.

### Specification

The following parameters are basically required for integral distribution.

- Name: Name
- Symbol: Symbol, usually three characters
- totalSupply: total number of issues

```
function createToken(string name, string symbol, uint256 totalSupply) returns (address);
```

The release profile of the integrals can be customized, generally in the following ways：

- One-time release
- Linear release

## Distributed Credit Protocol

### Abstract

Instant Credit Protocol is an on-chain real-time credit enhancement protocol that enables physical point-to-point transactions by pledging digital assets to a smart contract at the beginning of the transaction for credit enhancement, and can also be used for reliable promissory notes for convertible NFTs. The pledge of credit-enhancing assets is released immediately after the transaction to free up liquidity and thus maximize the efficiency of the use of collateralized assets.

### Specification

- Create Transaction

```
function placeOrder() inState(State.Inactive) condition(staking == 2 * price);
```

Anyone, acting in the role of a purchaser or redeemer, can create a transaction by invoking a smart contract. Typically, this action occurs when a purchaser clicks on the user interface to place an order for an item, or when an exchange party redeems an exchangeable NFT.

When creating a transaction, the creator needs to pledge an equivalent secured asset (NRC-6 token) of twice the selling price to the smart contract to augment the credit for that transaction he or she initiated. In the case of an NFT exchange, the NFT is pledged, and since one times the value has already been paid when purchasing the NFT, it is only necessary to pay an additional one times the value at this point to reach a double pledge.

The purchaser or redeemer needs to pledge the encumbered assets to increase credit and thereby achieve a commitment to bind off-chain performance. Moreover, the purchaser or redeemer needs to pledge a collateral asset of equal value to the counterparty, i.e., the seller or acceptor, i.e., twice the equivalent of the selling price. This is because if the buyer or redeemer only pledges the equivalent secured assets of double the selling price, its credit enhancement is only half of that of the seller or acceptor, and if the buyer or redeemer defaults and does not perform the final confirmation of completion after receiving the items, the loss of the buyer or redeemer is also half of that of the seller or acceptor, and thus cannot effectively ensure the good faith performance of the buyer or redeemer.

If the credit enhancement requirement is reduced by half, i.e., both the purchaser or redeemer and the seller or acceptor are required to pledge only the equivalent encumbered assets of double the selling price, then for pay-as-you-go scenarios, if the purchaser or redeemer does not make a final confirmation of completion upon receipt of the item, the purchaser or redeemer has no loss, while the seller or redeemer suffers a double loss of the item and the pledged assets, and thus cannot effectively ensure good faith performance by the purchaser or redeemer.

- Abort Transaction

```
function abortOrder() onlyBuyer inState(State.Created);
```

The originator of the transaction may abandon the transaction and release the pledged encumbered assets before the seller or obligor intervenes in the transaction.

- Accept Transaction

```
function acceptPurchase() onlySeller inState(State.Created) condition(staking == 2 * price);
```

The seller or acceptor can intervene in the transaction by clicking Accept. Acceptance of the transaction requires pledging to the smart contract the counterparty's equivalent collateral asset (NRC-6 tokens), i.e., twice the sale price.

The seller or acceptor needs to pledge the encumbered assets to enhance credit and thereby achieve a commitment to bind the off-chain performance. Moreover, the seller or acceptor needs to pledge the equivalent of the counterparty from the buyer or redeemer, the equivalent of twice the selling price of the encumbered assets. This is because if the seller or acceptor only pledges the equivalent secured assets of double the selling price, its credit enhancement is only half of that of the buyer or exchange party, and if the seller or acceptor defaults, the loss of the seller or acceptor is also half of that of the buyer or exchange party, thus it cannot effectively ensure the good faith performance of the seller or acceptor.

After the seller or acceptor intervenes in the transaction, the transaction is locked. The seller or acceptor can start handling off-chain logistics related matters and wait for the acceptance and confirmation from the buyer or redeemer.

When a dispute arises between the parties, it can be resolved by their own negotiation or through an arbitration agreement. Since both parties have a double value pledge, there is ample incentive for both parties to push the issue to resolution.

- Confirm completion

```
function confirmReceived() onlyBuyer inState(State.Locked);
```

After the buyer or redeemer receives and inspects the goods, they click to confirm receipt and end the transaction. The smart contract sends the locked-in payment (if any) to the seller or acceptor party and returns the remaining encumbered assets of both parties to the seller or acceptor party and the buyer or exchange party respectively.

Such an agreement is designed so that the seller or acceptor does not need to prepare the collateral assets to cover the entire inventory in advance or to credit the entire inventory before the transaction actually occurs, thus greatly reducing the financial pressure and burden on the seller or acceptor.

At the same time, the secured collateral and decollateralization of the credit enhancement assets occur continuously on the chain in real time according to the status of the transaction, thus maximizing the funding efficiency of the credit enhancement assets of the seller or acceptor.

Typically, the seller or acceptor is better positioned to meet the requirements of the agreement by simply preparing sufficient collateral assets based on actual concurrent transaction volume statistics and increasing reserves in advance of the seasonal peak season.
