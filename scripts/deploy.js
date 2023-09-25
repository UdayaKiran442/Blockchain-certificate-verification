import pkg from "hardhat";
const { ethers } = pkg;

async function main() {
  const lock = await ethers.deployContract("CertificateVerification");

  await lock.waitForDeployment();
}
main().catch((error) => {
  console.error(error);
  // eslint-disable-next-line no-undef
  process.exitCode = 1;
});
