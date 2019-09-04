"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Card_1 = __importDefault(require("./Card"));
var Suit_1 = __importDefault(require("./Suit"));
var Rank_1 = __importDefault(require("./Rank"));
var Deck = /** @class */ (function () {
    function Deck() {
        this.cards = [];
        this.discardedCards = [];
        this.addOneDeck();
        this.addOneDeck();
    }
    Deck.prototype.addOneDeck = function () {
        this.addCardsForSuit(Suit_1.default.CLUB);
        this.addCardsForSuit(Suit_1.default.DIAMOND);
        this.addCardsForSuit(Suit_1.default.HEART);
        this.addCardsForSuit(Suit_1.default.SPADE);
    };
    Deck.prototype.addCardsForSuit = function (suit) {
        this.cards.push(new Card_1.default(Rank_1.default.ACE, suit));
        this.cards.push(new Card_1.default(Rank_1.default.TWO, suit));
        this.cards.push(new Card_1.default(Rank_1.default.THREE, suit));
        this.cards.push(new Card_1.default(Rank_1.default.FOUR, suit));
        this.cards.push(new Card_1.default(Rank_1.default.FIVE, suit));
        this.cards.push(new Card_1.default(Rank_1.default.SIX, suit));
        this.cards.push(new Card_1.default(Rank_1.default.SEVEN, suit));
        this.cards.push(new Card_1.default(Rank_1.default.EIGHT, suit));
        this.cards.push(new Card_1.default(Rank_1.default.NINE, suit));
        this.cards.push(new Card_1.default(Rank_1.default.TEN, suit));
        this.cards.push(new Card_1.default(Rank_1.default.JACK, suit));
        this.cards.push(new Card_1.default(Rank_1.default.QUEEN, suit));
        this.cards.push(new Card_1.default(Rank_1.default.KING, suit));
    };
    Deck.prototype.shuffle = function () {
        var currentIndex = this.cards.length;
        var temporaryValue;
        var randomIndex;
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
    };
    Deck.prototype.isEmpty = function () {
        return this.cards.length === 0;
    };
    Deck.prototype.dealCard = function () {
        if (this.isEmpty()) {
            console.log("No cards left in the deck, reshuffling from discard pile.");
            // Move cards from discard pile and shuffle again
            this.moveCardsFromDiscardPile();
            this.shuffle();
        }
        // Pick top card from the deck;
        var card = this.removeTopCard();
        this.discardedCards.push(card);
        return card;
    };
    Deck.prototype.removeTopCard = function () {
        return this.cards.splice(0, 1)[0];
    };
    Deck.prototype.moveCardsFromDiscardPile = function () {
        for (var i = 0; i < this.discardedCards.length; i++) {
            var card = this.discardedCards[i];
            this.discardedCards.splice(i, 1);
            this.cards.push(card);
        }
    };
    return Deck;
}());
exports.default = Deck;
//# sourceMappingURL=Deck.js.map