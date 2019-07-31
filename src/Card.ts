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
    return `rank: ${this.rank}, suit: ${this.suit}`;
  }
}
