const hre = require("hardhat");

async function main() {
  // Deploy Mock Token first
  const Token = await hre.ethers.getContractFactory("MockToken");
  const token = await Token.deploy();
  await token.waitForDeployment();
  const tokenAddr = await token.getAddress();

  // Deploy Vault
  const Vault = await hre.ethers.getContractFactory("Vault");
  const vault = await Vault.deploy(tokenAddr);
  await vault.waitForDeployment();

  console.log(`Token deployed to: ${tokenAddr}`);
  console.log(`Vault deployed to: ${await vault.getAddress()}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
