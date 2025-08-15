import { DeployFunction } from "hardhat-deploy/types";
import { HardhatRuntimeEnvironment } from "hardhat/types";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy, getOrNull } = hre.deployments;

  const existingDeployment = await getOrNull("EncryptedVoting");
  const isNewDeployment = !existingDeployment;

  const deployed = await deploy("EncryptedVoting", {
    from: deployer,
    log: true,
  });

  console.log(`🗳️ FHE Encrypted Voting contract deployed at: ${deployed.address}`);
};

export default func;
func.id = "deploy_encryptedVoting";
func.tags = ["EncryptedVoting"];

