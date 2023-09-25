import contractAddress from "./contractAddress";
import CertificateVerification from "./abi.json";
import web3 from "./web3";

const contractInstance = new web3.eth.Contract(
  CertificateVerification.abi,
  contractAddress
);

export default contractInstance;
