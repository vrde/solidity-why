const { expect } = require("chai");

describe("Why", function () {
  let why;
  beforeEach(async () => {
    const Why = await ethers.getContractFactory("Why");
    why = await Why.deploy();
    await why.deployed();
  });

  it("Should randomly fail on assigning block.timestamp to a variable", async function () {
    const failures = 0;
    for (let i = 0; i < 100; i++) {
      const tx = await why.randomFail();
      try {
        await tx.wait();
      } catch (e) {
        failures++;
        console.log("FAILED!!!");
        console.log(e);
      }
      expect(failures).to.not.equal(0);
    }
  });
  it("Should not fail on incrementing a variable", async function () {
    for (let i = 0; i < 100; i++) {
      const tx = await why.worksWell();
      await tx.wait();
    }
    expect((await why.inc()).toNumber()).to.equal(100);
  });
});
