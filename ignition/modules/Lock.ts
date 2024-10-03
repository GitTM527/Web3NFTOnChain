import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ChainNFTModule = buildModule("ChainNFTModule", (m) => {


  const chainNFT = m.contract("ChainNFT");

  return { chainNFT };
});

export default ChainNFTModule;
