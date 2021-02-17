// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

contract Why {

    uint public ts;
    uint public inc;

    function randomFail() public {
        ts = block.timestamp;
    }

    function worksWell() public {
        inc++;
    }

}
