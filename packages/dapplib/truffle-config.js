require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give narrow frown ski strong razor office purity hunt knee metal gesture'; 
let testAccounts = [
"0x7a3a08539c0987cb8e4352dce6f6c747320dd36f7804d21cd07a06ba2ea72423",
"0x102e1ad4c53a1384307bde43a91713f49ccb79aa4f3a214baa137798310eb837",
"0xb829e9cb70b5a79c1b2a9c8d989a9989bdcfd85b6d395ab0fd1d4c2e97ed7d7a",
"0xdf3c222d024a368fb1d69bb9d9820e06de430a1e3be65fac3e730e23b25573b7",
"0x2e0df97f0253a8e7e1ab291c52e8a082d95af5eb684ebd42fab3e3504f8ac44f",
"0x91c8fcb6d9fa78a8c887326780194bfc50978c0b2a2a53f81d47f2eb3b6e47ea",
"0x237898493bbde77002cc8c4300f796f98e2ea4a5745058371fb5f72bec2b1c50",
"0x471e9e30b35738fa72daf26a4066e13c8cff61d6d39e0b2a687461dffa806918",
"0x434ed8a0eb915f450034ac71fbda345fc6e8fa66743fa39f78a52f40551e67b8",
"0xd87a30ba26531c472c93cfde52d7cbb97ef51463c56531d3c8b1d4e0be895bbe"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


