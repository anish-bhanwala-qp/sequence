import Card from "./Card";
import Suit from "./Suit";
import Rank from "./Rank";

export default class Deck {
  cards: Card[];
  constructor() {
    this.cards = [];
    for (const key in Suit) {
      if (isNaN(Number(key)) && Suit.hasOwnProperty(key)) {
        const suit = (<any>Suit)[Suit[key]];
        for (const rankKey in Rank) {
          if (isNaN(Number(rankKey)) && Rank.hasOwnProperty(rankKey)) {
            const rank = (<any>Rank)[Rank[rankKey]];
            this.cards.push(new Card(rank, suit));
          }
        }
      }
    }
  }

  public shuffle() {
    let currentIndex = this.cards.length;
    let temporaryValue: Card;
    let randomIndex: number;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = this.cards[currentIndex];
      this.cards[currentIndex] = this.cards[randomIndex];
      this.cards[randomIndex] = temporaryValue;
    }
  }

  public isEmpty(): boolean {
    return this.cards.length === 0;
  }

  public dealCard(): Card {
    if (this.isEmpty()) {
      throw new Error("No cards left in the deck");
    }

    // Pick top card from the deck;
    const card = this.removeTopCard();
    return card;
  }

  private removeTopCard(): Card {
    return this.cards.splice(0, 1)[0];
  }
}
