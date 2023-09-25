const connectToMetamask = async () => {
  try {
    if (window.ethereum) {
      await window.ethereum.request({
        method: "eth_requestAccounts",
      });
    } else {
      alert("Please install metamask");
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    alert(error.message);
  }
};
export default connectToMetamask;
