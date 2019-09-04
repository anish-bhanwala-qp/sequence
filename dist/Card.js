"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Rank_1 = __importDefault(require("./Rank"));
var Suit_1 = __importDefault(require("./Suit"));
var Card = /** @class */ (function () {
    function Card(rank, suit) {
        if (suit < 1 || suit > 4) {
            throw new Error("Invalid suit value: " + suit);
        }
        if (rank < 1 || rank > 13) {
            throw new Error("Invalid rank value: " + rank);
        }
        this.rank = rank;
        this.suit = suit;
        this.twoEyedJack = this.isTwoEyedJack();
        this.oneEyedJack = this.isOneEyedJack();
    }
    Card.prototype.isTwoEyedJack = function () {
        return ((this.suit === Suit_1.default.DIAMOND && this.rank === Rank_1.default.JACK) ||
            (this.suit === Suit_1.default.CLUB && this.rank === Rank_1.default.JACK));
    };
    Card.prototype.isOneEyedJack = function () {
        return ((this.suit === Suit_1.default.SPADE && this.rank === Rank_1.default.JACK) ||
            (this.suit === Suit_1.default.HEART && this.rank === Rank_1.default.JACK));
    };
    Card.prototype.matches = function (card) {
        if (card == null)
            return false;
        return card.suit === this.suit && card.rank === this.rank;
    };
    Card.prototype.toString = function () {
        return "Rank: " + this.rankDisplay() + ", Suit: " + Suit_1.default.text(this.suit);
    };
    Card.prototype.clone = function () {
        return new Card(this.rank, this.suit);
    };
    Card.prototype.rankDisplay = function () {
        return Rank_1.default.text(this.rank);
    };
    Card.prototype.suitDisplay = function () {
        switch (this.suit) {
            case Suit_1.default.SPADE:
                return "\u2660";
            case Suit_1.default.HEART:
                return "\u2665";
            case Suit_1.default.DIAMOND:
                return "\u2666";
            case Suit_1.default.CLUB:
                return "\u2663";
            default:
                throw new Error("Invalid suit: " + Suit_1.default.text(this.suit));
        }
    };
    Card.prototype.suitColor = function () {
        switch (this.suit) {
            case Suit_1.default.SPADE:
            case Suit_1.default.CLUB:
                return "#000";
            case Suit_1.default.HEART:
            case Suit_1.default.DIAMOND:
                return "red";
            default:
                throw new Error("Invalid suit: " + Suit_1.default.text(this.suit));
        }
    };
    Card.prototype.getDisplayHtml = function () {
        return (this.rankDisplay() +
            (" <span style=\"color: " + this.suitColor() + "\">") +
            this.suitDisplay() +
            "</span>");
    };
    return Card;
}());
exports.default = Card;
//# sourceMappingURL=Card.js.map