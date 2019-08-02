import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";
import Chip from "./Chip";
import ChipColor from "./ChipColor";
import Slot from "./Slot";

export default function nextMove(
  slots: Slot[][],
  playerCards: Card[],
  yourChipColor: ChipColor
): Move {
  const cardsText = playerCards.map(c => c.toString()).join(",");
  const instructions = `computer2: 
    p = place chip, r = remove chip, d = dead card \r\n${cardsText}`;
  const val = prompt(instructions);
  if (!val) {
    return auto(slots, playerCards);
  }
  const type = val.substr(0, 1);
  const index = Number(val.substr(1, 1));
  const row = Number(val.substr(2, 1));
  const col = Number(val.substr(3, 1));

  console.log(`type: ${type}, index: ${index}, row: ${row}, col: ${col}`);

  const card = playerCards[index];

  switch (type) {
    case "p":
      return new Move(MoveType.PLACE_CHIP, card, new Position(row, col));
    case "r":
      return new Move(MoveType.REMOVE_CHIP, card, new Position(row, col));
    case "d":
      return new Move(MoveType.REPLACE_DEAD_CARD, card);
    default:
      throw new Error("Invalid move");
  }
}

function auto(slots: Slot[][], playerCards: Card[]) {
  for (let i = 0; i < playerCards.length; i++) {
    const card = playerCards[i];
    const position = findCardPosition(slots, card);
    if (position != null) {
      return new Move(MoveType.PLACE_CHIP, card, position);
    }
  }
  throw new Error("All player cards are dead cards");
}

function findCardPosition(slots: Slot[][], playerCard: Card): Position | null {
  for (let row = 0; row < slots.length; row++) {
    const slotsRow = slots[row];
    for (let col = 0; col < slotsRow.length; col++) {
      const slot = slotsRow[col];
      if (slot.isEmptySlot() && slot.hasMatchingCard(playerCard)) {
        return new Position(row, col);
      }
    }
  }

  return null;
}
