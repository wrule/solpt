// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

contract X {

  function ecd(bytes32 hash, bytes memory signature) external pure returns (address) {
    return ECDSA.recover(hash, signature);
  }

  event sendMessageEvent(address message);
  function sendMessage(string memory message) public {
    // emit sendMessageEvent(keccak256("ABCD"));
    emit sendMessageEvent(ECDSA.recover(
      hex"380760bcae8fa72cda68cca2399a5714d8acecbe3e75054bbc02884fc9837f3b",
      hex"79213aacec369db9de6f458813cb55b9f267432ad0f629d713376df35a38407f75a37625a30ee5c4346ef1e445abc39fdeee716add3d56fe5d0b620a22ecaf181c"
    ));
  }

  event fallbackEvent(address sender, uint value, bytes data);
  fallback() external payable {
    emit fallbackEvent(msg.sender, msg.value, msg.data);
  }

  event receiveEvent(address sender, uint value);
  receive() external payable {
    emit receiveEvent(msg.sender, msg.value);
  }
}
