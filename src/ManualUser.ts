import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";

export default function nextMove(playerCards: Card[]): Move {
  const cardsText = playerCards.map(c => c.toString()).join(",");
  const instructions = `computer2: 
    p = place chip, r = remove chip, d = dead card \r\n${cardsText}`;
  const val = prompt(instructions);
  if (val === null) {
    throw Error("Invalid input");
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
