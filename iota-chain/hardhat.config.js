require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  
  networks: {
    'iotaevm-testnet': {
        url: 'https://json-rpc.evm.testnet.iotaledger.net',
        chainId: 1075,
        accounts: ["46e05cd0a0d6ad8a125f8d77b6797562286dc18d11da59d0abc8608acb399ffa"],
    },
    'shimmerevm-testnet': {
      url: 'https://json-rpc.evm.testnet.shimmer.network',
      chainId: 1073,
      accounts: ["46e05cd0a0d6ad8a125f8d77b6797562286dc18d11da59d0abc8608acb399ffa"],
    },
  }
};
