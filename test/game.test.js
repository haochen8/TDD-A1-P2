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
  
  const game = new Game([player1, player2], dice)

  const winner = game.play()

  expect(winner).toBe(player2)
  
})