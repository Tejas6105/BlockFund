const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("CrowdFunding"); // <-- no .sol needed
  const contract = await Contract.deploy();

  await contract.deployed(); // <-- Ethers v5 equivalent

  console.log(`Contract deployed to: ${contract.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
