import web3 from "./web3";

const getAccounts = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Accounts:", accounts);
    return accounts;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.log(error.message);
  }
};

export default getAccounts;
