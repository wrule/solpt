// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract X4 {
  string[] public list;

  event sendMessageEvent(string message, bytes data, bytes4 sig);
  function sendMessage(string calldata message) public {
    list.push(message);
    emit sendMessageEvent(message, msg.data, msg.sig);
  }
}
