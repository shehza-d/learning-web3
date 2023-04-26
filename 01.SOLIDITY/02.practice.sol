// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MyContract {
    string value;

    function get() public view returns (string) {
        return value;
    }
}
