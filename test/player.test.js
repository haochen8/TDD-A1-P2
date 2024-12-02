import { Player } from '../src/Player.js'

test('Player should have a name and a score', () => {
  const player = new Player('Alice')
  expect(player.name).toBe('Alice')
  expect(player.score).toBe(0)
})

test('Player score should increase by 1 when incrementScore is called', () => {
  const player = new Player('Alice')
  player.incrementScore()
  expect(player.score).toBe(1)
})
