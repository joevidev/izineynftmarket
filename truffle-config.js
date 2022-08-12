require("babel-register");
require("babel-polyfill");
const dotenv = require("dotenv");
dotenv.config();
const HDWalletProvider = require("@truffle/hdwallet-provider");
const mnemonic = process.env.MNEMONIC;
const endpoint = process.env.GOERLI_NODE;

module.exports = {
  networks: {
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, endpoint),
      network_id: 5,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true,
    },
  },

  contracts_directory: "./src/contracts/",
  contracts_build_directory: "./src/abis",

  compilers: {
    solc: {
      version: "0.8.10",
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },

  plugins: ["truffle-plugin-verify"],
  api_keys: {
    etherscan: process.env.API_KEY,
  },
};
