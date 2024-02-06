// tests/ChessBoard.test.ts

import { ChessBoard, PieceType, Color } from ".";
import Knight from "./pieces/Knight";


describe('ChessBoard', () => {
    let chessBoard: ChessBoard;

    beforeEach(() => {
        chessBoard = new ChessBoard();
        chessBoard.initializeBoard();
    });

    test('placePiece should correctly place a piece on the board', () => {
        const piece = { type: PieceType.King, color: Color.White };
        chessBoard.placePiece(piece, 2, 3);
        expect(chessBoard.getPieceAt(2, 3)).toEqual(piece);
    });

    test('movePiece should correctly move a piece on the board', () => {
        const piece = chessBoard.getPieceAt(0, 0);
        chessBoard.movePiece(0, 0, 4, 4);
        expect(chessBoard.getPieceAt(4, 4)).toEqual(piece);
        expect(chessBoard.getPieceAt(0, 0)).toBeUndefined();
    });

    test('Knight should move in L-shape', () => {
        const knight = new Knight(Color.White); 
        // Test movement in L-shape
        expect(knight.move([0, 0], [2, 1])).toBeTruthy(); // Valid move
        expect(knight.move([0, 0], [1, 2])).toBeTruthy(); // Valid move
        expect(knight.move([0, 0], [4, 4])).toBeFalsy(); // Invalid move
        expect(knight.move([0, 0], [3, 3])).toBeFalsy(); // Invalid move
    });

});
