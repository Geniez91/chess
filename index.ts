
import King from './pieces/King';
import Queen from './pieces/Queen';
import Bishop from './pieces/Bishop';
import Knight from './pieces/Knight';
import Rook from './pieces/Rook';
import Pawn from './pieces/Pawn';

export class Square {
    piece?: Piece;

    constructor(piece?: Piece) {
        this.piece = piece;
    }
}

export class Color {
    static readonly White: string = 'White';
    static readonly Black: string = 'Black';
}

export class PieceType {
    static readonly King = 'King';
    static readonly Queen = 'Queen';
    static readonly Bishop = 'Bishop';
    static readonly Knight = 'Knight';
    static readonly Rook = 'Rook';
    static readonly Pawn = 'Pawn';
}

export class Piece {
    type: PieceType;
    color: Color;

    constructor(type: PieceType, color: Color) {
        this.type = type;
        this.color = color;
    }
}

export class ChessBoard {
    squares: Square[][];

    constructor() {
        this.squares = this.createEmptyBoard();
    }

    private createEmptyBoard(): Square[][] {
        const board: Square[][] = [];
        for (let i = 0; i < 8; i++) {
            board[i] = [];
            for (let j = 0; j < 8; j++) {
                board[i][j] = {};
            }
        }
        return board;
    }

    placePiece(piece: Piece, x: number, y: number): void {
        this.squares[x][y].piece = piece;
    }

    movePiece(fromX: number, fromY: number, toX: number, toY: number): void {
        const piece = this.squares[fromX][fromY].piece;
        if (piece) {
            this.squares[fromX][fromY].piece = undefined;
            this.squares[toX][toY].piece = piece;
        }
    }

    getPieceAt(x: number, y: number): Piece | undefined {
        return this.squares[x][y].piece;
    }

    initializeBoard(): void {
        // Placer les pièces sur le plateau de jeu
        this.placePiece(new Rook(Color.White), 0, 0);
        this.placePiece(new Knight(Color.White), 0, 1);
        this.placePiece(new Bishop(Color.White), 0, 2);
        this.placePiece(new Queen(Color.White), 0, 3);
        this.placePiece(new King(Color.White), 0, 4);
        this.placePiece(new Bishop(Color.White), 0, 5);
        this.placePiece(new Knight(Color.White), 0, 6);
        this.placePiece(new Rook(Color.White), 0, 7);
        for (let i = 0; i < 8; i++) {
            this.placePiece(new Pawn(Color.White), 1, i);
            this.placePiece(new Pawn(Color.Black), 6, i);
        }
        this.placePiece(new Rook(Color.Black), 7, 0);
        this.placePiece(new Knight(Color.Black), 7, 1);
        this.placePiece(new Bishop(Color.Black), 7, 2);
        this.placePiece(new Queen(Color.Black), 7, 3);
        this.placePiece(new King(Color.Black), 7, 4);
        this.placePiece(new Bishop(Color.Black), 7, 5);
        this.placePiece(new Knight(Color.Black), 7, 6);
        this.placePiece(new Rook(Color.Black), 7, 7);
    }
}
