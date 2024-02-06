import { Bishop } from './Bishop';
import { Color } from '../index';

describe('Bishop', () => {
    it('should return true for valid move diagonal up-left', () => {
        const bishop = new Bishop(Color.White);
        expect(bishop.move([3, 3], [2, 2])).toBe(true);
    });

    it('should return true for valid move diagonal up-right', () => {
        const bishop = new Bishop(Color.White);
        expect(bishop.move([3, 3], [2, 4])).toBe(true);
    });

    it('should return true for valid move diagonal down-left', () => {
        const bishop = new Bishop(Color.White);
        expect(bishop.move([3, 3], [4, 2])).toBe(true);
    });

    it('should return true for valid move diagonal down-right', () => {
        const bishop = new Bishop(Color.White);
        expect(bishop.move([3, 3], [4, 4])).toBe(true);
    });

    it('should return false for invalid move (vertical)', () => {
        const bishop = new Bishop(Color.White);
        expect(bishop.move([3, 3], [5, 3])).toBe(false);
    });

    it('should return false for invalid move (horizontal)', () => {
        const bishop = new Bishop(Color.White);
        expect(bishop.move([3, 3], [3, 5])).toBe(false);
    });
});
