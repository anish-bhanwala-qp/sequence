import Card from "./Card";
import Suit from "./Suit";
import Rank from "./Rank";

export default class Deck {
  readonly cards: Card[];
  private readonly discardedCards: Card[];
  constructor() {
    this.cards = [];
    this.discardedCards = [];
    this.addOneDeck();
    this.addOneDeck();
  }

  private addOneDeck() {
    this.addCardsForSuit(Suit.CLUB);
    this.addCardsForSuit(Suit.DIAMOND);
    this.addCardsForSuit(Suit.HEART);
    this.addCardsForSuit(Suit.SPADE);
  }

  private addCardsForSuit(suit: number) {
    this.cards.push(new Card(Rank.ACE, suit));
    this.cards.push(new Card(Rank.TWO, suit));
    this.cards.push(new Card(Rank.THREE, suit));
    this.cards.push(new Card(Rank.FOUR, suit));
    this.cards.push(new Card(Rank.FIVE, suit));
    this.cards.push(new Card(Rank.SIX, suit));
    this.cards.push(new Card(Rank.SEVEN, suit));
    this.cards.push(new Card(Rank.EIGHT, suit));
    this.cards.push(new Card(Rank.NINE, suit));
    this.cards.push(new Card(Rank.TEN, suit));
    this.cards.push(new Card(Rank.JACK, suit));
    this.cards.push(new Card(Rank.QUEEN, suit));
    this.cards.push(new Card(Rank.KING, suit));
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
      console.log("No cards left in the deck, reshuffling from discard pile.");
      // Move cards from discard pile and shuffle again
      this.moveCardsFromDiscardPile();
      this.shuffle();
    }

    // Pick top card from the deck;
    const card = this.removeTopCard();
    this.discardedCards.push(card);
    return card;
  }

  private removeTopCard(): Card {
    return this.cards.splice(0, 1)[0];
  }

  private moveCardsFromDiscardPile() {
    for (var i = 0; i < this.discardedCards.length; i++) {
      var card = this.discardedCards[i];
      this.discardedCards.splice(i, 1);
      this.cards.push(card);
    }
  }
}
