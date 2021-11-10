const Staking = artifacts.require("Staking");

module.exports = function (deployer) {
  deployer.deploy(Staking, "0xac3a6b486bd5799c93c08cf37c4ca8ff05634d59", "1636523200", "1636633200");
};
