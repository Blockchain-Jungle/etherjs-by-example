const ethers = require('ethers');
const infura_url = "INSERT INFURA URL HERE"
/*
   -- Define Provider & Variables --
*/
// // Provider
// const providerRPC = {
//     development: {
//          host: "network",     // Localhost (default: none)
//          port: 0000,            // Standard Ethereum port (default: none)
//          network_id: 000,       // Any network (default: none)
//         }//
// };

// const provider = new ethers.providers.StaticJsonRpcProvider(
//    providerRPC.development.rpc,
//    {
//       chainId: providerRPC.development.chainId,
//       name: providerRPC.development.name,
//    }
// ); //Change to correct network

var customHttpProvider = new ethers.providers.JsonRpcProvider(infura_url);
customHttpProvider.getBlockNumber().then((result) => {
    console.log("Current block number: " + result);
});

// // Variables
const account_from = {
   privateKey: 'PRIVATEKEY', 
};
const addressTo = 'TO-ADDRESS';

// Create Wallet
let wallet = new ethers.Wallet(account_from.privateKey, customHttpProvider);

/*
   -- Create and Deploy Transaction --
*/
const send = async () => {
   console.log(
      `Attempting to send transaction from ${wallet.address} to ${addressTo}`
   );

   // Create Tx Object
   const tx = {
      to: addressTo,
      value: ethers.utils.parseEther('0.001'),
   };

   // Sign and Send Tx - Wait for Receipt
   const createReceipt = await wallet.sendTransaction(tx);
   await createReceipt.wait();
   console.log(`Transaction successful with hash: ${createReceipt.hash}`);
};

send();