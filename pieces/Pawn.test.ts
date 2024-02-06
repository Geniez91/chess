import {  Color, PieceType } from '../index';
import Pawn from '../pieces/Pawn'

describe('Pawn', () => {
  it('should return true for valid forward move (1 step)', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [1, 3], false)).toBe(true);
  });

  it('should return false for invalid forward move (2 steps) on non-first move', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [3, 2], false)).toBe(false);
  });

  it('should return false for invalid forward move (1 step) on non-first move', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [2, 2], false)).toBe(false);
  });

  it('should return false for invalid forward move (1 step) with obstruction', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [2, 2], true)).toBe(false);
  });

  it('should return false for invalid forward move (2 steps) with obstruction', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [3, 2], true)).toBe(false);
  });

  it('should return false for invalid diagonal move (1 step)', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [2, 3], true)).toBe(false);
  });

  it('should return false for invalid backward move (1 step)', () => {
    const pawn = new Pawn(Color.White);
    expect(pawn.move([1, 2], [0, 2], true)).toBe(false);
  });

  it('should return false for invalid forward move (1 step) for Black pawn', () => {
    const pawn = new Pawn(Color.Black);
    expect(pawn.move([1, 2], [2, 2], true)).toBe(false);
  });
});
