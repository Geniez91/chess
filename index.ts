export enum PieceType {
  King,
  Queen,
  Bishop,
  Knight,
  Rook,
  Pawn
}

export enum Color {
  White,
  Black
}

export interface Piece {
  type: PieceType;
  color: Color;
}

export interface Square {
  piece?: Piece;
}

export class ChessBoard {
  squares: Square[][];

  constructor() {
      this.squares = [];
      for (let i = 0; i < 8; i++) {
          this.squares[i] = [];
          for (let j = 0; j < 8; j++) {
              this.squares[i][j] = {};
          }
      }
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
}





