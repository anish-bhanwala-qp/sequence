import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";
import Chip from "./Chip";
import ChipColor from "./ChipColor";
import Slot from "./Slot";

export default function nextMove(
  boardCards: Slot[][],
  playerCards: Card[],
  yourChipColor: ChipColor
): Move {
  for (let i = 0; i < playerCards.length; i++) {
    const card = playerCards[i];
    const position = findCardPosition(boardCards, card);
    if (position != null) {
      return new Move(MoveType.PLACE_CHIP, card, position);
    }
  }
  throw new Error("All player cards are dead cards");
}

function findCardPosition(slots: Slot[][], playerCard: Card): Position | null {
  for (let row = 0; row < slots.length; row++) {
    const rowCards = slots[row];
    for (let col = 0; col < rowCards.length; col++) {
      const slot = rowCards[col];
      if (slot.isEmptySlot() && slot.hasMatchingCard(playerCard)) {
        return new Position(row, col);
      }
    }
  }

  return null;
}
