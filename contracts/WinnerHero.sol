// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract IntermediateContract {
    WinnerHero public winnerHero;
    
    constructor(address _winnerHeroAddress) {
        winnerHero = WinnerHero(_winnerHeroAddress);
    }

    function attempt() external {
        winnerHero.attempt();
    }
}

contract WinnerHero {
    event Winner(address);

    function attempt() external {
        require(msg.sender != tx.origin, "msg.sender is equal to tx.origin");
        emit Winner(msg.sender);
    }
}