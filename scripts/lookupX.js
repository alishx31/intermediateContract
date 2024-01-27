const hre = require("hardhat");
const ADDRESS = "0x2E6FeB511454961C6E5d71593ba0de8e491D934c";
async function main() {
  const contract = await hre.ethers.getContractAt("Contract",ADDRESS);

  console.log(
    `ETH and unlock timestamp deployed to ${await contract.x()}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
