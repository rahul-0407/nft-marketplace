const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("NFTMarketplaceModule", (m) => {
  const nftMarketplace = m.contract("NFTMarketplace");

  return { nftMarketplace };
});
