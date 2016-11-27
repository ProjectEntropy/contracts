pragma solidity ^0.4.4;

// import "tokens/StandardToken.sol";

contract Entropy  {
  // Citizens can be seen from inhereted Token function
  mapping (address => uint256) balances;

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


  // Citizenship checker
  function balanceOf(address _citizen) constant returns (uint256 balance) {
    return balances[_citizen];
  }

  // Guardianship checker
  function isGuardian(address _citizen) constant returns (bool guardian) {
    return guardians[_citizen];
  }

}
