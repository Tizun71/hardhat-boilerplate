// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.28;

contract MyContract {
    string public name;
    uint256 public number;

    constructor(string memory _name, uint256 _number) {
        name = _name;
        number = _number;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function setNumber(uint256 _number) public {
        number = _number;
    }
}