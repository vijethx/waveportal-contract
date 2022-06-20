// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
  uint totalWaves;

  constructor(){
    console.log("Yo yo, I'm a contract and I'm smart");
  }

  function wave() public{
    totalWaves += 1;
    console.log("%s has waved!", msg.sender);
  }

  function getTotalWaves() public view returns (uint){
    console.log("We have %d total waves", totalWaves);
    return totalWaves;
  }
}