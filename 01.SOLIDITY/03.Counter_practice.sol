// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract is like a class(OPP)
contract Counter {
    uint count; //this state variable is stored in blockChain

    constructor() public {
        //will be called when contract is deployed or created
        count = 0;
    }

    //public tells the visibility of this function // returns() tells return type of fun

    function getCount() public view returns (uint) {
        //getter
        // function can be reused and recalled
        return count;
    }

    function incrementCount() public {
        //setter

        count++; //when every we change this variable we redeploy the contract to blockchain and pay gas fee
    }
}
