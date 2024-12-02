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
  constructor(players, dice) {
    this.players = players;
    this.dice = dice;

    if (!Array.isArray(players) || players.length === 0) {
      throw new Error('Players must be an array with at least one player.')
    }
  }

  /**
   * Play the game.
   * @returns {Player} The winner.
   */
  play() {
    const result = this.players.reduce((winner, player) => {
      const roll = this.dice.roll();
      console.log(`${player.name} rolled ${roll}`);

      if (roll > (winner?.roll || 0)) {
        return { player, roll, tie: false };
      } else if (winner && roll === winner.roll) {
        console.log('Tie condition executed');
        return { ...winner, tie: true };
      }
      return winner;
    }, null);
    if (result?.tie) {
      console.log("It's a tie!");
      return null;
    }
    result.player.incrementScore();
    console.log('Returning player:', result?.player);
    return result.player;
  }
}
