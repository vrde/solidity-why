# The problem

While testing my contract, I noticed that multiple contract calls that assign `block.timestamp` to a storage variable fails randomly.

The contract:

```solidity
contract Why {

    uint public ts;

    function randomFail() public {
        ts = block.timestamp;
    }

}
```

The test:

```node
const Why = await ethers.getContractFactory("Why");
const why = await Why.deploy();
await why.deployed();

for (let i = 0; i < 100; i++) {
  const tx = await why.randomFail();
  try {
    await tx.wait();
  } catch (e) {
    console.log("FAILED!!!");
    console.log(e);
  }
}
```

The test environment runs `geth` in development mode (see [ethnode](/vrde/ethnode)). While a tight loop like this is unrealistinc in production environments (mainnet/xdai/whatev) I'm quite puzzled on how this can fail to be honest.

## How to reproduce


```
npm install
npm run ethnode

# In a new shell
npm test
```

By running the tests you shuold see many failures.
