const hre = require("hardhat");

async function main() {
  const NFTMarketplace = await hre.ethers.getContractFactory("NFTMarketplace");
  const nftMarketplace = await NFTMarketplace.deploy();

  await nftMarketplace.waitForDeployment();

  const address = await nftMarketplace.getAddress();

  console.log("Deployed to:", address);

  // Wait for block confirmations (important on Amoy)
  console.log("Waiting for confirmations...");
  await nftMarketplace.deploymentTransaction().wait(6);

  console.log("Verifying contract...");

  await hre.run("verify:verify", {
    address: address,
    constructorArguments: [],
  });

  console.log("Verified successfully!");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});