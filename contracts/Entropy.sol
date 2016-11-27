pragma solidity ^0.4.4;

// import "tokens/StandardToken.sol";

contract Entropy  {
  /**
   * A Citizen 🏃 is anyone who holds one or more Entropy Tokens 🍪
   * Any address with a balance > 0 is considered a Citizen
   */
  mapping(address => uint256) balances;

  /**
   * Trusted Citizens :two_women_holding_hands: hold equal voting rights to all
   * trusted individuals in the Entropy Community
   */
  mapping(address => bool) trusted;

  // Guardians
  mapping(address => bool) guardians;


  /**
   * Constructor
   * ran once when the Entropy contract first comes into existence
   */
  function Entropy() {
    // Add the creator as a Citizen and Guardian
    balances[msg.sender] = 1;
    guardians[msg.sender] = true;
  }

  /**
   * Fallback function
   * This runs whenever ether is sent to Entropy without any other information
   */
   function() {
     balances[msg.sender] += msg.value;
   }

  /**
   * Guardians 💂
   */

  // Set someone as a Guardian
  function setAsGuardian(address _person)
  onlyGuardians // Only other guardians can do this
  returns (bool success) {
    guardians[_person] = true;

    NewGuardian(_person, msg.sender);
    return true;
  }

  // Guardianship of an address
  function isGuardian(address _citizen) public constant returns (bool guardian) {
    return guardians[_citizen];
  }

  modifier onlyGuardians() {
    if(isGuardian(msg.sender))
    {
      // Continue running
      _;
    }
    else {
      // Freak out :fire:
      throw;
    }
  }

  // Citizenship (as balance > 0) of an address
  function balanceOf(address _citizen) constant returns (uint256 balance) {
    return balances[_citizen];
  }


  /**
   * Events
   */

  // Move citizenship tokens from senders address to _to
  function transfer(address _to, uint256 _value) returns (bool success) {
      if (balances[msg.sender] >= _value && _value > 0) {
          balances[msg.sender] -= _value;
          balances[_to] += _value;
          Transfer(msg.sender, _to, _value);
          return true;
      } else { return false; }
  }



  // Events
  event NewGuardian(address indexed _guardian, address indexed _creator);


  // Entropy Token transer
  event Transfer(address indexed _from, address indexed _to, uint256 _value);
}
