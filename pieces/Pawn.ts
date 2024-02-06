import { Piece, PieceType, Color } from "..";

export class Pawn implements Piece {
    type: PieceType = PieceType.Pawn; 
    color: Color;

    constructor(color: Color) {
        this.color = color;
    }
    
    move(currentPosition: [number, number], targetPosition: [number, number], isFirstMove: boolean): boolean {
        const [currentX, currentY] = currentPosition;
        const [targetX, targetY] = targetPosition;

        const deltaX = targetX - currentX;
        const deltaY = targetY - currentY;

        // Le pion peut avancer d'une case vers l'avant
        if (deltaY === 1) {
            // Pour le premier mouvement, le pion peut avancer de 1 ou 2 cases
            if (isFirstMove && deltaX === 0 || deltaX === 0) {
                return true;
            }
            // Sinon, le pion ne peut avancer que d'une seule case
            return deltaX === 0;
        }

        return false; // Retourne faux si le mouvement n'est pas valide
    }
}

export default Pawn;
