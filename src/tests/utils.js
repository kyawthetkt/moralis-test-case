
export const WINDOW_ETHEREUM = {
    isMetaMask: true,
    request: async (request) => {
      // console.log(request.method); to see the different requests made by ethers
      if (["eth_accounts", "eth_requestAccounts"].includes(request.method)) {
        return [];
      } else if (["personal_sign"].includes(request.method)) {
        return;
      }
  
      throw Error(`Unknown request: ${request.method}`);
    },
    on: async () => {},
};