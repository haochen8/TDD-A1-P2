/**
 * @file Defines the Player class.
 * @module Player
 * @author Hao Chen
 * @version 1.0.0
 */

export class Player {
  
    /**
    * Create a player.
    * @param {string} name - The name of the player.
    */
    constructor(name) {
      this.name = name
      this.score = 0
    }
}