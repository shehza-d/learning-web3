const { Contract, Wallet } = require("ethers");
const { getZeroDevSigner } = require("@zerodevapp/sdk");

const projectId =
  process.env.PROJECT_ID || "70a6503f-8a3e-4629-b064-101adb3e7949";
const wallet = new Wallet(
  process.env.PRIVATE_KEY ||
    "0x083d62fb89a852cd945cdafa48ba208fd148a104e1e4b5a9095753d0b3b60230"
);
// jdf
const contractAddress = "0x34bE7f35132E97915633BC1fc020364EA5134863";
const contractABI = [
  "function mint(address _to) public",
  "function balanceOf(address owner) external view returns (uint256 balance)",
];

const main = async () => {
  const signer = await getZeroDevSigner({
    projectId,
    owner: wallet,
  });

  const address = await signer.getAddress();
  console.log("My address:", address);

  const nftContract = new Contract(contractAddress, contractABI, signer);

  const receipt = await nftContract.mint(address);
  await receipt.wait();
  console.log(`NFT balance: ${await nftContract.balanceOf(address)}`);
};

main().then(() => process.exit(0));
