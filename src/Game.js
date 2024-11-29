/**
 * @file Defines the Game class.
 * @module Game
 * @author Hao Chen
 * @version 1.0.0
 */

import { Player } from './Player.js'
import { Dice } from './Dice.js'

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
      this.players = players
      this.dice = dice

      if (!Array.isArray(players) || players.length === 0) {
        throw new Error('Players must be an array with at least one player.')
      }
    }

    /**
     * Play the game.
     * @returns {Player} The winner.
     */
    play() {
      let highestScore = 0
      let winner = null

      this.players.forEach(player => {
        const roll = this.dice.roll()
        if (roll > highestScore) {
          highestScore = roll
          winner = player
        }
      })
      return winner
    }
}