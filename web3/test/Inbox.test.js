const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const {interface, bytecode} = require('../compile');

web3 = new Web3(ganache.provider());

let accounts;
let inbox;

beforeEach(async ()=>{
    accounts = await web3.eth.getAccounts();
    
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({data: bytecode, arguments: [INITIAL_MESSAGE]})
        .send({from: accounts[0], gas: 1000000})
})

describe('Contract:', ()=>{
    it('deploy contract', ()=>{
        assert.ok(inbox.options.address);
    })

    it('has default message', async ()=>{
        const message = await inbox.methods.message().call();
        assert.equal(message, INITIAL_MESSAGE);
    })

    it('can modify message', async ()=>{
        await inbox.methods.setMessage('Bye!').send({from: accounts[0]});
        const message = await inbox.methods.message().call();
        assert.equal(message, 'Bye!');
    })
})