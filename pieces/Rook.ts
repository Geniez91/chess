import { Color, Piece, PieceType } from "..";

export class Rook implements Piece {
    type: PieceType = PieceType.Rook; 
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    move(currentPosition: [number, number], targetPosition: [number, number]): boolean {
        const [currentX, currentY] = currentPosition;
        const [targetX, targetY] = targetPosition;

        // La tour peut se déplacer horizontalement ou verticalement sur un nombre quelconque de cases
        return currentX === targetX || currentY === targetY;
    }
}

export default Rook;
