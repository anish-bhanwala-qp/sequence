import SlotType from "./SlotType";
import Card from "./Card";
import Chip from "./Chip";

export default class Slot {
  readonly isCorner: boolean;
  card?: Card;
  chip?: Chip;
  constructor(isCorner: boolean, card?: Card, chip?: Chip) {
    if (isCorner && (card != null || chip != null)) {
      throw Error(`Chip/card cannot be placed in corner`);
    }
    this.isCorner = isCorner;
    this.card = card;
    this.chip = chip;
  }

  public placeChip(newChip: Chip) {
    if (newChip == null) {
      throw Error(`Chip cannot be null or undefined`);
    }
    if (this.chip != null) {
      throw Error("Chip already placed in this slot");
    }

    this.chip = newChip;
  }

  public removeChip() {
    if (this.chip == null) {
      throw Error(`There is no chip in this slot`);
    }

    this.chip = undefined;
  }

  public isEmptySlot(): boolean {
    return !this.isCorner && this.chip == null;
  }

  public hasMatchingCard(card: Card): boolean {
    return card.matches(this.card || null);
  }

  public clone() {
    return new Slot(
      this.isCorner,
      this.card != null ? this.card.clone() : undefined,
      this.chip != null ? this.chip.clone() : undefined
    );
  }
}
