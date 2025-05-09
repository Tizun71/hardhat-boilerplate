const { ethers } = require("hardhat");

async function main() {
  [owner] = await ethers.getSigners();
  const MyContract = await ethers.deployContract("MyContract", [
    "Initial Name",
    42,
  ]);
  console.log("Contract deployed to:", MyContract.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
