import { Piece, PieceType, Color } from "..";

export class Queen implements Piece {
    type: PieceType = PieceType.Queen; 
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }

    move(currentPosition: [number, number], targetPosition: [number, number]): boolean {
        const [currentX, currentY] = currentPosition;
        const [targetX, targetY] = targetPosition;

        const deltaX = Math.abs(targetX - currentX);
        const deltaY = Math.abs(targetY - currentY);

        // La reine peut se déplacer horizontalement, verticalement ou en diagonale sur un nombre quelconque de cases
        if (deltaX === deltaY || currentX === targetX || currentY === targetY) {
            return true;
        }

        return false; // Retourne faux si le mouvement n'est pas valide
    }
}

export default Queen;
