//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Lottery {
    address public manager;
    address[] public play;
    mapping(address => ufixed256) public players;

    constructor() {
        require(msg.sender, 'Error: sender address not available');
        console.log("deploying lottery");
        manager = msg.sender;
    }

    function enter() public payable {
        players[msg.sender] = msg.value;
    }

    function random() internal view return(uint256) {
        return keccak256(x)
    }

    function pickWinner() public{
        uint256 index = random() % 
    }
}
