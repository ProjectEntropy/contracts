pragma solidity ^0.4.4;

import "tokens/StandardToken.sol";

contract Entropy is StandardToken {
  // Citizens can be seen from inhereted Token function
  // mapping (address => uint256) balances;

  // Guardians
  mapping(address => bool) guardians;


  /**
   * Constructor - ran when Entropy first comes into existence
   */
  function Entropy()
  {
    // Add the creator as a Citizen and Guardian
    balances[msg.sender] = 1;
    guardians[msg.sender] = true;
  }
  
}
