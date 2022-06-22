const main = async () => {
	const [owner, randomPerson] = await hre.ethers.getSigners();
	const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
	const waveContract = await waveContractFactory.deploy();
	await waveContract.deployed();

	console.log("Contract deployed to: ", waveContract.address);
	console.log("Contract deployed by: ", owner.address);

	// let waveCount;
	// waveCount = await waveContract.getTotalWaves();

	let waveTxn1 = await waveContract.wave("This is wave#1");
	await waveTxn1.wait();

	let waveTxn2 = await waveContract
		.connect(randomPerson)
		.wave("This is wave#2");

	await waveTxn2.wait();

	let allWaves = await waveContract.getAllWaves();
	console.log(allWaves);
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

runMain();
