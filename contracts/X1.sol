// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract X1 {
  uint public x;

  constructor() {
    x = 0;
  }

  function setX(uint num) public {
    x = num;
  }

  error airdropETHError();
  function airdropETH(uint num) external payable {
    setX(num);
    if (address(this).balance < 0.1 ether) revert airdropETHError();
    payable(msg.sender).transfer(msg.value + 0.1 ether);
  }

  fallback() external payable { }

  event receiveEvent();
  receive() external payable {
    setX(101);
    // uint i = 0;
    // for (i = 0; i < 30000; ++i) {
    //   emit receiveEvent();
    // }
  }

  function sendETH(address addr, uint num) external payable {
    setX(num);
    payable(addr).transfer(msg.value);
  }
}
