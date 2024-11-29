/**
 * @file Defines the Dice class.
 * @module Dice
 * @author Hao Chen
 * @version 1.0.0
 */

/**
 * Represents a dice.
 */
export class Dice {

  /**
   * Roll the dice.
   * @returns {number} A number between 1 and 6.
   */
  roll() {
    return Math.floor(Math.random() * 6) + 1
  }

}