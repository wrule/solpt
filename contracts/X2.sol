// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract X2 {
  event fallbackEvent(address indexed sender, uint value, bytes data);
  fallback() external payable {
    emit fallbackEvent(msg.sender, msg.value, msg.data);
  }

  event receiveEvent(address indexed sender, uint value);
  receive() external payable {
    uint i = 0;
    for (i = 0; i < 1000; ++i) {
      emit receiveEvent(msg.sender, msg.value);
    }
  }
}
