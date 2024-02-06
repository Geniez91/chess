import { Queen } from './Queen';
import { Color } from '../index';

describe('Queen', () => {
    it('should return true for valid horizontal move', () => {
        const queen = new Queen(Color.White);
        expect(queen.move([0, 0], [0, 7])).toBe(true);
    });

    it('should return true for valid vertical move', () => {
        const queen = new Queen(Color.White);
        expect(queen.move([0, 0], [7, 0])).toBe(true);
    });

    it('should return true for valid diagonal move', () => {
        const queen = new Queen(Color.White);
        expect(queen.move([0, 0], [7, 7])).toBe(true);
    });

    it('should return true for valid move in any direction', () => {
        const queen = new Queen(Color.White);
        expect(queen.move([3, 3], [7, 7])).toBe(true);
    });

    it('should return false for invalid move', () => {
        const queen = new Queen(Color.White);
        expect(queen.move([0, 0], [2, 3])).toBe(false);
    });
});
