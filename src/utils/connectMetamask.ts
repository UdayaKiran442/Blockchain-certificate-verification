const connectToMetamask = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else {
      console.log("Connect to metamask");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
  }
};
export default connectToMetamask;
