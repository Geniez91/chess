import { Piece, PieceType, Color } from "..";

export class King implements Piece {
    type: PieceType = PieceType.King; 
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }
    
    move(currentPosition: [number, number], targetPosition: [number, number]): boolean {
        const [currentX, currentY] = currentPosition;
        const [targetX, targetY] = targetPosition;

        const deltaX = Math.abs(targetX - currentX);
        const deltaY = Math.abs(targetY - currentY);

        return deltaX <= 1 && deltaY <= 1;
    }
}

export default King;