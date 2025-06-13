const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

const MyContractModule = buildModule("MyContractModule", (m) => {
  const deployer = m.getAccount(0);

  const myContract = m.contract("MyContract", [deployer]);

  return {
    myContract,
  };
});

module.exports = MyContractModule;
