// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract X4 {
  string[] public list;

  event sendMessageEvent(string message, bytes data);
  function sendMessage(string calldata message) public {
    list.push(message);
    // bytes memory data = abi.encodePacked(msg.sig);
    // bytes memory data = abi.encodePacked(this.sendMessage.selector);
    // bytes memory data = abi.encodePacked(bytes4(keccak256("sendMessage(string)")));
    bytes memory data = abi.encodePacked(bytes4("ABCD"), bytes4("1234"));
    emit sendMessageEvent(message, data);
  }
}
