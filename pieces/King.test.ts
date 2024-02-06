import { King } from './King';
import { Color } from '../index';

describe('King', () => {
    it('should return true for valid move one step up', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [2, 3])).toBe(true);
    });

    it('should return true for valid move one step down', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [4, 3])).toBe(true);
    });

    it('should return true for valid move one step left', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [3, 2])).toBe(true);
    });

    it('should return true for valid move one step right', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [3, 4])).toBe(true);
    });

    it('should return true for valid move one step diagonal up-left', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [2, 2])).toBe(true);
    });

    it('should return true for valid move one step diagonal up-right', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [2, 4])).toBe(true);
    });

    it('should return true for valid move one step diagonal down-left', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [4, 2])).toBe(true);
    });

    it('should return true for valid move one step diagonal down-right', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [4, 4])).toBe(true);
    });

    it('should return false for invalid move (two steps up)', () => {
        const king = new King(Color.White);
        expect(king.move([3, 3], [1, 3])).toBe(false);
    });

});
