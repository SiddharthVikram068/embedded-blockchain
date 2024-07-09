async function main() {
    const StreetLight = await ethers.getContractFactory("StreetLightMonitoring");
    const streetLight = await StreetLight.deploy();

    console.log("Counter deployed to:", await streetLight.getAddress());
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });