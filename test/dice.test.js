import { Dice } from '../src/Dice.js'

test('Dice roll should return a number between 1 and 6', () => {
  const dice = new Dice()
  const result = dice.roll()
  expect(result).toBeGreaterThanOrEqual(1)
  expect(result).toBeLessThanOrEqual(6)
})
