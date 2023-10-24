// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract X1 {
  uint public x;
  uint public y;

  constructor() {
    x = 0;
    y = 0;
  }

  function airdropETH() external payable {
    payable(msg.sender).transfer(msg.value + 0.1 ether);
  }

  fallback() external payable { }

  receive() external payable { }
}
