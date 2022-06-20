const main = async () => {
	const waveContractFactory = await hre.ethers.waveContractFactory(
		"WavePortal"
	);
	const waveContract = await waveContractFactory.deploy();
	await waveContract.deployed();
	console.log("Contract deployed to: ", waveContract.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
