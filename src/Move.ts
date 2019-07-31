import MoveType from "./MoveType";
import Card from "./Card";
import Position from "./Position";

// place chip, replace dead card, remove chip,
export default class Move {
  type: MoveType;
  card: Card;
  position?: Position;
  constructor(type: MoveType, card: Card, position?: Position) {
    this.type = type;
    this.card = card;
    this.position = position;
  }
}
