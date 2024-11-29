import { Player } from '../src/Player.js'

test('Player should have a name and a score', () => {
  const player = new Player('Alice')
  expect(player.name).toBe('Alice')
  expect(player.score).toBe(0)
})

