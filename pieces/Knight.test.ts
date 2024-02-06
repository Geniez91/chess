

import { Knight } from './Knight';
import { Color } from '../index';

describe('Knight', () => {
  it('should return true for valid vertical forward-right move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([0, 0], [2, 1])).toBe(true);
  });

  it('should return true for valid vertical forward-left move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([0, 0], [2, -1])).toBe(true);
  });

  it('should return true for valid vertical backward-right move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([2, 1], [0, 2])).toBe(true);
  });

  it('should return true for valid vertical backward-left move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([2, 1], [0, 0])).toBe(true);
  });

  it('should return true for valid horizontal forward-right move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([0, 0], [1, 2])).toBe(true);
  });

  it('should return true for valid horizontal forward-left move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([0, 0], [-1, 2])).toBe(true);
  });

  it('should return true for valid horizontal backward-right move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([1, 2], [0, 0])).toBe(true);
  });

  it('should return true for valid horizontal backward-left move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([1, 2], [-1, 0])).toBe(true);
  });

  it('should return false for invalid move', () => {
    const knight = new Knight(Color.White);
    expect(knight.move([0, 0], [1, 1])).toBe(false);
  });
});





