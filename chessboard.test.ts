import { ChessBoard, PieceType, Color } from './index';

describe('ChessBoard', () => {
  let board = new ChessBoard();
    it('placing a piece on the board', () => {
        const piece = { type: PieceType.King, color: Color.White };
        board.placePiece(piece, 0, 0);
        expect(board.getPieceAt(0, 0)).toEqual(piece);
    });

    it('moving a piece on the board', () => {
        const piece = { type: PieceType.King, color: Color.White };
        board.placePiece(piece, 0, 0);
        board.movePiece(0, 0, 1, 1);
        expect(board.getPieceAt(1, 1)).toEqual(piece);
        expect(board.getPieceAt(0, 0)).toBeUndefined();
    });

});