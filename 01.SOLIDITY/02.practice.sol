// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string value;

    // get called when contract is deployed
    constructor() public {
        value = "this is default value";
    }

    function get() public view returns (string memory) {
        return value;
    }

    function set(string memory _value) public {
        return _value;
    }
}
