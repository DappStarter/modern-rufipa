require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hope kite bone tooth tissue rice stereo snake idea another army gaze'; 
let testAccounts = [
"0xce953f089ceb76bd4878bd75dd0c4f51180d427b2a149d66fb5219a1928fa990",
"0x77853ed653bad55dcbff46584c67ac9d543cb3bbffad9425b2fdeb1c1edc5562",
"0x59167b93b3e8e1010e6a96ca4934dfe63e3428ba23451d241508190b8ac654d1",
"0x2fca56512cb094d18f2a8d688aca128fb0f1adedda78b5811613e9c696084bba",
"0x9e7d4ecd639c45b43deaa5fd353780966a46d500ddd7c37d6bb6bada0e96728f",
"0x16f36cf14d72631d80d75ca77ff33522f964603b4f8f8438230cb8ae1ebf7dd4",
"0x800ba029128bd94820520554f6325b73edb709fe98db4d6a9ccf4c7343a68e27",
"0x819c3e585f6db4bcfe3b9bfc7ca1c05da7d5586bfda7672daa6a904f5eecf7ee",
"0x1b884f9b6c4a4d1f4f53356f4ee364c236bef6d58b1458fac164b2b03cc50290",
"0xb1fda214bed9d6ad7c14c651f414b62ff202a681e14e1ea3abe8bb717a8f0e65"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
