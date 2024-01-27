const hre = require("hardhat");
const ADDRESS = "0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502";
async function main() {
    const LocalContract = await hre.ethers.getContractFactory("IntermediateContract");
    const localContract = await LocalContract.deploy(ADDRESS);
    // await localContract.deployed();

    // Call the function during the constructor
    localContract.attempt();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
