import Rank from "./Rank";
import Suit from "./Suit";

export default class Card {
  rank: Rank;
  suit: Suit;
  constructor(rank: Rank, suit: Suit) {
    this.rank = rank;
    this.suit = suit;
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
    return `Rank: ${Rank[this.rank]}, Suit: ${Suit[this.suit]}`;
  }

  public clone(): Card {
    return new Card(this.rank, this.suit);
  }

  public rankDisplay() {
    if (this.rank === Rank.ACE) {
      return "A";
    } else if (this.rank === Rank.JACK) {
      return "J";
    } else if (this.rank === Rank.QUEEN) {
      return "Q";
    } else if (this.rank === Rank.KING) {
      return "K";
    } else {
      return this.rank;
    }
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
        throw new Error(`Invalid suit: ${Suit[this.suit]}`);
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
        throw new Error(`Invalid suit: ${Suit[this.suit]}`);
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
