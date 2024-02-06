import { Piece, PieceType, Color } from "../index";

export class Bishop implements Piece {
    type: PieceType = PieceType.Bishop; 
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }
    
    move(currentPosition: [number, number], targetPosition: [number, number]): boolean {
        const [currentX, currentY] = currentPosition;
        const [targetX, targetY] = targetPosition;

        const deltaX = Math.abs(targetX - currentX);
        const deltaY = Math.abs(targetY - currentY);

   // Le fou se déplace en diagonale sur un nombre quelconque de cases
        if (deltaX === deltaY) {
            return true;
        }

        return false; // Retourne faux si le mouvement n'est pas valide 
    }
}

export default Bishop;
