import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";
import Chip from "./Chip";

export default class Computer2 {
  public nextMove(
    boardCards: (Card | null | Chip)[][],
    playerCards: Card[]
  ): Move {
    for (let i = 0; i < playerCards.length; i++) {
      const card = playerCards[i];
      const position = this.findCardPosition(boardCards, card);
      if (position != null) {
        return new Move(MoveType.PLACE_CHIP, card, position);
      }
    }
    throw new Error("All player cards are dead cards");
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
