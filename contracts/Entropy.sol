pragma solidity ^0.4.4;

import "tokens/EntropyToken.sol";

contract Entropy is EntropyToken {

  /**
   * A Citizen 🏃 is anyone who holds one or more Entropy Tokens 🍪
   * Any address with a balance > 0 is considered a Citizen
   */

  /**
   * Trusted Citizens 👬 hold equal voting rights to all
   * trusted individuals in the Entropy Community
   */
  mapping(address => bool) trusted_citizen;

  /**
   * Guardians 💂 are the elected protectors of the project
   * They are also able to mark Citizens as trusted, allowing for a human-based
   * proof of individuality system.
   */
  mapping(address => bool) guardians;

  /**
   * Actions
   * All Actions :bulb: can be voted :hand: on by the entire community for 5 days.
   *
   * For an Action :bulb: to be accepted, it must have *more than 50% approval*
   * and at least as many votes :hand: as there are Guardian 💂 members
   *
   * After this period accepted Actions :bulb: will be added to the Action
   * Stream :clipboard: until they are marked as complete by one of the Guardians :guardsman:
   *
   * Declined Actions :bulb: will be dismissed to the Archive :recycle:
   *
   * The Action Stream :clipboard: represents what the community is currently
   * aiming to achieve.
   *
   * Any funds associated with Actions :bulb: in the Action Stream :clipboard:
   * become available in the Slush Pool :moneybag: for the Guardians :guardsman:
   * to use towards making those Actions :bulb: happen.
   */
  struct Action {
    uint amount;
    string description;
    uint votingDeadline;
    bool done;
    bool actionPassed;
    uint numberOfVotes;
    bytes32 proposalHash;
    Vote[] votes;
    mapping (address => bool) voted;
  }

  struct Vote {
    bool inSupport;
    address citizen;
  }


  /**
   * Constructor
   * ran once when the Entropy contract first comes into existence
   */
  function Entropy() {
    // Setup token attributes
    name      = "Entropy";
    decimals  = 0;
    symbol    = "ENT";        //identifier
    safety_limit = 300 ether;

    // Set the creator as Trusted, a Citizen and a Guardian
    totalSupply = 1;
    balances[msg.sender] = 1;

    trusted_citizen[msg.sender] = true;
    NewTrust(msg.sender, msg.sender);

    guardians[msg.sender] = true;
    NewGuardian(msg.sender, msg.sender);
  }

  /**
   * Fallback function
   * This runs whenever ether is sent to Entropy without any other information
   */
  function() {
    buyTokens();
  }

  // Token Selling related

  /**
   * Alters the safety limit for the maximum value of tokens bought
   */
  function changeSafeyLimit(uint _new_limit) onlyGuardians returns (bool success) {
    // Limit can only be increased
    if(_new_limit < safety_limit) throw;

    // Set new safety limit
    safety_limit = _new_limit;
    SafetyLimitChange(msg.sender, _new_limit);
  }

  /**
   * Guardians 💂
   */

  // Set someone as a Guardian
  function setGuardian(address _person, bool _is_guardian)
  onlyGuardians // 💂
  returns (bool success) {
    guardians[_person] = _is_guardian;

    NewGuardian(_person, msg.sender);
    return true;
  }

  // Guardianship of an address
  function isGuardian(address _citizen) public constant returns (bool guardian) {
    return guardians[_citizen];
  }

  // Protect a function so only guardians 💂 can run it
  modifier onlyGuardians {
    if (isGuardian(msg.sender) == false) throw;
    _;
  }

  /**
   * Citizens 🏃
   */

  // Set someone as a Trusted Citizen
  function setTrust(address _person, bool _is_trusted)
  onlyGuardians // 💂
  returns (bool success) {
    trusted_citizen[_person] = _is_trusted;

    if(_is_trusted)
    {
      NewTrust(_person, msg.sender);
    }
    else
    {
      TrustLost(_person, msg.sender);
    }

    return true;
  }

  function isTrusted(address _citizen) public constant returns (bool trusted) {
    return trusted_citizen[_citizen];
  }

  // Protect a function so only trusted citizens can run it
  modifier onlyTrusted {
    if (isTrusted(msg.sender) == false) throw;
    _;
  }

  // Citizenship of an address
  function isCitizen(address _citizen) public constant returns (bool citizen) {
    return balanceOf(_citizen) > 0;
  }

  modifier onlyCitizens {
    if (isCitizen(msg.sender) == false) throw;
    _;
  }


  /**
   * Events
   *
   * Important changes to the state of Entropy
   */

  // A new guardian has been elected
  event NewGuardian(address indexed _guardian, address indexed _creator);

  // A new person has been trusted
  event NewTrust(address indexed _citizen, address indexed _guardian);
  // A person is no longer trusted
  event TrustLost(address indexed _citizen, address indexed _guardian);

  // Safety Limit has been increased
  event SafetyLimitChange(address indexed _guardian, uint indexed limit);
}
