// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract X3 {
  event sendMessageEvent(string message);
  function sendMessage(string calldata message) public {
    emit sendMessageEvent(message);
  }

  // event receiveEvent(address sender, uint value);
  // receive() external payable {
  //   emit receiveEvent(msg.sender, msg.value);
  // }

  event fallbackEvent(address sender, uint value, bytes data);
  fallback() external payable {
    emit fallbackEvent(msg.sender, msg.value, msg.data);
  }
}
