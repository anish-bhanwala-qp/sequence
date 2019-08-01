import Rank from "./Rank";
import Suit from "./Suit";

export default class Card {
  readonly rank: number;
  readonly suit: number;
  readonly twoEyedJack: boolean;
  readonly oneEyedJack: boolean;
  constructor(rank: number, suit: number) {
    if (suit < 1 || suit > 4) {
      throw new Error(`Invalid suit value: ${suit}`);
    }
    if (rank < 1 || rank > 13) {
      throw new Error(`Invalid rank value: ${rank}`);
    }
    this.rank = rank;
    this.suit = suit;
    this.twoEyedJack = this.isTwoEyedJack();
    this.oneEyedJack = this.isOneEyedJack();
  }

  public isTwoEyedJack(): boolean {
    return (
      (this.suit === Suit.DIAMOND && this.rank === Rank.JACK) ||
      (this.suit === Suit.CLUB && this.rank === Rank.JACK)
    );
  }

  public isOneEyedJack(): boolean {
    return (
      (this.suit === Suit.SPADE && this.rank === Rank.JACK) ||
      (this.suit === Suit.HEART && this.rank === Rank.JACK)
    );
  }

  public matches(card: Card | null): boolean {
    if (card == null) return false;
    return card.suit === this.suit && card.rank === this.rank;
  }

  public toString(): string {
    return `Rank: ${this.rankDisplay()}, Suit: ${Suit.text(this.suit)}`;
  }

  public clone(): Card {
    return new Card(this.rank, this.suit);
  }

  public rankDisplay() {
    return Rank.text(this.rank);
  }

  public suitDisplay() {
    switch (this.suit) {
      case Suit.SPADE:
        return "\u{2660}";
      case Suit.HEART:
        return "\u{2665}";
      case Suit.DIAMOND:
        return "\u{2666}";
      case Suit.CLUB:
        return "\u{2663}";
      default:
        throw new Error(`Invalid suit: ${Suit.text(this.suit)}`);
    }
  }

  public suitColor() {
    switch (this.suit) {
      case Suit.SPADE:
      case Suit.CLUB:
        return "#000";
      case Suit.HEART:
      case Suit.DIAMOND:
        return "red";
      default:
        throw new Error(`Invalid suit: ${Suit.text(this.suit)}`);
    }
  }

  public getDisplayHtml() {
    return (
      this.rankDisplay() +
      ` <span style="color: ${this.suitColor()}">` +
      this.suitDisplay() +
      "</span>"
    );
  }
}
