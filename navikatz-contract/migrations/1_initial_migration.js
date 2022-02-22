const CeloKatzWarrior = artifacts.require("CeloKatzWarrior");

module.exports = function (deployer) {
  deployer.deploy(CeloKatzWarrior, "https://gateway.pinata.cloud/ipfs/QmeXYjdJCwvCdtjCTuuVwAzTehZ43YnqJ7WrzYyu13XSyf");
};
