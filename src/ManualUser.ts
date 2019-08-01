import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";
import Chip from "./Chip";
import ChipColor from "./ChipColor";

export default function nextMove(
  boardCards: (Card | null | Chip)[][],
  playerCards: Card[],
  yourChipColor: ChipColor
): Move {
  const cardsText = playerCards.map(c => c.toString()).join(",");
  const instructions = `computer2: 
    p = place chip, r = remove chip, d = dead card \r\n${cardsText}`;
  const val = prompt(instructions);
  if (!val) {
    return auto(boardCards, playerCards);
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

function auto(boardCards: (Card | null | Chip)[][], playerCards: Card[]) {
  for (let i = 0; i < playerCards.length; i++) {
    const card = playerCards[i];
    const position = findCardPosition(boardCards, card);
    if (position != null) {
      return new Move(MoveType.PLACE_CHIP, card, position);
    }
  }
  throw new Error("All player cards are dead cards");
}

function findCardPosition(
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
