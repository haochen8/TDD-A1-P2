/**
 * @file Defines the Game class.
 * @module Game
 * @author Hao Chen
 * @version 1.0.0
 */

import { Player } from "./Player.js";
import { Dice } from "./Dice.js";

/**
 * Represents a game.
 */
export class Game {
  /**
   * Create a game.
   * @param {Player[]} players - The players.
   * @param {Dice} dice - The dice.
   */
  constructor(players, dice, rolls) {
    this.players = players;
    this.dice = dice;
    this.rolls = rolls;

    if (!Array.isArray(players) || players.length === 0) {
      throw new Error('Players must be an array with at least one player.')
    }
  }

  /**
   * Play the game.
   * @returns {Player} The winner.
   */
  play() {
    let highestRoll = 0;
    let winners = [];

    this.players.forEach(player => {
      let totalRoll = 0;
      for (let i = 0; i < this.rolls; i++) {
        const roll = this.dice.roll();
        totalRoll += roll;
        console.log(`${player.name} rolled a ${roll}`);
      }
      console.log(`${player.name} total roll is ${totalRoll}`);

      if (totalRoll > highestRoll) {
        highestRoll = totalRoll;
        winners = [player];
      } else if (totalRoll === highestRoll) {
        winners.push(player);
      }
    });

    if (winners.length > 1) {
      console.log("It's a tie!");
      return null;
    }

    const winner = winners[0];
    winner.incrementScore();
    console.log('Returning player:', winner);
    return winner;
  }
}
