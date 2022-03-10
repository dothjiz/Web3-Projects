//https://rinkeby.infura.io/v3/a82ab12c9e0841edbba72dc48ac13a15
//a82ab12c9e0841edbba72dc48ac13a15 ID
//eacd6072b45c49d998d311dba2d76e80 secret

const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const {interface, bytecode} = require('./compile');
const provider = new HDWalletProvider(
    'habit awake coral reopen sentence sustain silk rotate skate kick make trap',
    'https://rinkeby.infura.io/v3/a82ab12c9e0841edbba72dc48ac13a15'
)
const web3 = new Web3(provider);
const INITIAL_MESSAGE = 'Hi there!'

const deploy = async ()=>{
    const account = await web3.eth.getAccounts();

    const contract = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_MESSAGE]})
        .send({from: account[0], gas: 1000000})

    console.log(contract.options.address);
    console.log(account);

    provider.engine.stop();
}

deploy();