import { Piece, PieceType, Color } from "..";

export class Knight implements Piece {
    type: PieceType = PieceType.Knight; // Spécifiez le type de pièce
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }
    
    move(currentPosition: [number, number], targetPosition: [number, number]): boolean {
        const [currentX, currentY] = currentPosition;
        const [targetX, targetY] = targetPosition;

        const deltaX = Math.abs(targetX - currentX);
        const deltaY = Math.abs(targetY - currentY);

        // Le cavalier se déplace en forme de L (deux cases dans une direction et une case perpendiculaire)
        return (deltaX === 2 && deltaY === 1) || (deltaX === 1 && deltaY === 2);
    }
}

export default Knight;
