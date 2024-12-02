import { Game } from '../src/Game.js'
import { Player } from '../src/Player.js'
import { Dice } from '../src/Dice.js'

test('Game declares a winner based on the highest score', () => {
  const dice = new Dice()
  dice.roll = jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)

  const player1 = new Player('Alice')
  const player2 = new Player('Bob')
  const players = [player1, player2]
  const game = new Game(players, dice)

  const winner = game.play()
  expect(winner).toBe(player2)
})

test('Game declares a tie if two players have the same score', () => {
  const dice = new Dice()
  dice.roll = jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(1)

  const player1 = new Player('Alice')
  const player2 = new Player('Bob')
  const players = [player1, player2]
  const game = new Game(players, dice)

  const winner = game.play()
  expect(winner).toBeNull()
})

test('Game throws an error if no players are provided', () => {
  const dice = new Dice()
  expect(() => new Game([], dice)).toThrow('Players must be an array with at least one player.')
})

test('Game declares tie if multiple players have the highest score', () => {
  const dice = new Dice()
  dice.roll = jest.fn()
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(2)

  const player1 = new Player('Alice')
  const player2 = new Player('Bob')
  const player3 = new Player('Charlie')
  const players = [player1, player2, player3]
  const game = new Game(players, dice)

  const winner = game.play()
  expect(winner).toBeNull()
})

test('Game declares the only player as the winner', () => {
  const dice = new Dice()
  dice.roll = jest.fn()
    .mockReturnValueOnce(1)

  const player1 = new Player('Alice')
  const players = [player1]
  const game = new Game(players, dice)

  const winner = game.play()
  expect(winner).toBe(player1)
})

test('Game keeps the current winner when a player rolls less than the highest score', () => {
  const dice = new Dice();
  dice.roll = jest.fn()
    .mockReturnValueOnce(5) 
    .mockReturnValueOnce(3);

  const player1 = new Player('Alice');
  const player2 = new Player('Bob');
  const players = [player1, player2];
  const game = new Game(players, dice);

  const winner = game.play();
  expect(winner).toBe(player1);
});

test('Winner\'s score should increase by 1 after winning', () => {
  const dice = new Dice();
  dice.roll = jest.fn()
    .mockReturnValueOnce(5) 
    .mockReturnValueOnce(3);

  const player1 = new Player('Alice');
  const player2 = new Player('Bob');
  const players = [player1, player2];
  const game = new Game(players, dice);

  game.play();
  expect(player1.score).toBe(1);
  expect(player2.score).toBe(0);
})

test('Winner should be the player with the highest score after multiple rounds', () => {
  const dice = new Dice();
  dice.roll = jest.fn()
    .mockReturnValueOnce(5) // Round 1
    .mockReturnValueOnce(3)
    .mockReturnValueOnce(6) // Round 2
    .mockReturnValueOnce(4)
    .mockReturnValueOnce(3) // Round 3
    .mockReturnValueOnce(5);

  const player1 = new Player('Alice');
  const player2 = new Player('Bob');
  const players = [player1, player2];
  const game = new Game(players, dice);

  game.play();
  game.play();
  game.play();
  
  expect(player1.score).toBe(2);
  expect(player2.score).toBe(1);

})





