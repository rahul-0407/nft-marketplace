require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {},
    polygon_amoy: {
      url: "https://polygon-amoy.g.alchemy.com/v2/gvSAhY8S8dFMTxxMZBZCG",
      accounts: [`0x${process.env.NEXT_PRIVATE_KEY}`],
    },
  },
};
