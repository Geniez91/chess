import { Rook } from './Rook';
import { Color } from '../index';

describe('Rook', () => {
    it('should return true for valid vertical move', () => {
        const rook = new Rook(Color.White);
        expect(rook.move([3, 3], [5, 3])).toBe(true);
    });

    it('should return true for valid horizontal move', () => {
        const rook = new Rook(Color.White);
        expect(rook.move([3, 3], [3, 5])).toBe(true);
    });

    it('should return true for valid move (non-diagonal)', () => {
        const rook = new Rook(Color.White);
        expect(rook.move([3, 3], [5, 3])).toBe(true);
    });

    it('should return false for invalid move (diagonal)', () => {
        const rook = new Rook(Color.White);
        expect(rook.move([3, 3], [5, 5])).toBe(false);
    });

    it('should return false for invalid move (L-shaped)', () => {
        const rook = new Rook(Color.White);
        expect(rook.move([3, 3], [5, 4])).toBe(false);
    });
});
