import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";
import Chip from "./Chip";

export default class Computer {
  public nextMove(
    boardCards: (Card | null | Chip)[][],
    playerCards: Card[]
  ): Move {
    const positions: Position[] = [];
    for (let i = 0; i < playerCards.length; i++) {
      const card = playerCards[i];
      const position = this.findCardPosition(boardCards, card);

      // We have dead card need to replace it
      if (position == null) {
        return new Move(MoveType.REPLACE_DEAD_CARD, card);      
      }

      positions.push(position);
    }

    const nearestPosition = this.findNearestPositionTo(
      new Position(0, 0),
      positions
    );

    const card = boardCards[nearestPosition.row][nearestPosition.col];
    if (!(card instanceof Card)) {
      throw Error(`no card at position: ${nearestPosition.toString()}`);
    }
    return new Move(MoveType.PLACE_CHIP, card, nearestPosition);
  }

  private findNearestPositionTo(
    referencePosition: Position,
    positions: Position[]
  ): Position {
    let nearestPosition: Position = positions[0];
    let shortestDistance = this.distance(referencePosition, positions[0]);
    positions.forEach(p => {
      const dist = this.distance(referencePosition, p);
      if (dist < shortestDistance) {
        nearestPosition = p;
        shortestDistance = dist;
      }
    });

    return nearestPosition;
  }

  private distance(point1: Position, point2: Position): number {
    const a = point2.col - point1.col;
    const b = point2.row - point1.row;

    return Math.sqrt(a * a + b * b);
  }

  private findCardPosition(
    boardCards: (Card | null | Chip)[][],
    playerCard: Card
  ): Position | null {
    for (let row = 0; row < boardCards.length; row++) {
      const rowCards = boardCards[row];
      for (let col = 0; col < rowCards.length; col++) {
        const card = rowCards[col];
        if (card instanceof Card && playerCard.matches(card)) {
          return new Position(row, col);
        }
      }
    }

    return null;
  }
}
