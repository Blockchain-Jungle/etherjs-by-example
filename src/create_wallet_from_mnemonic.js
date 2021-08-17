const ethers = require('ethers')

async function CreateWalletFromMnemonic() {
    let mnemonic = "radar blur cabbage chef fix engine embark joy scheme fiction master release";
    let mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
    console.log(mnemonicWallet.address)
}
CreateWalletFromMnemonic();