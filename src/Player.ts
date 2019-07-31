import Card from "./Card";
import ChipColor from "./ChipColor";

export default class Player {
  readonly name: string;
  readonly cards: Card[];
  readonly maxCardsAllowed: number;
  readonly isComputer: boolean;
  readonly chipColor: ChipColor;
  constructor(
    name: string,
    maxCardsAllowed: number,
    isComputer: boolean,
    chipColor: ChipColor
  ) {
    this.name = name;
    this.cards = [];
    this.maxCardsAllowed = maxCardsAllowed;
    this.isComputer = isComputer;
    this.chipColor = chipColor;
  }

  public addCard(card: Card): void {
    if (this.cards.length === this.maxCardsAllowed) {
      throw Error(
        `A player cannot have more than ${this.maxCardsAllowed} cards`
      );
    }
    this.cards.push(card);
  }
}
