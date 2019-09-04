"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var GAME_CONFIG_1 = __importDefault(require("./GAME_CONFIG"));
var Player = /** @class */ (function () {
    function Player(name, maxCardsAllowed, isComputer, chipColor) {
        this.name = name;
        this.cards = [];
        this.maxCardsAllowed = maxCardsAllowed;
        this.isComputer = isComputer;
        this.chipColor = chipColor;
        this.sequenceCount = 0;
    }
    Player.prototype.addCard = function (card) {
        if (this.cards.length === this.maxCardsAllowed) {
            throw Error("A player cannot have more than " + this.maxCardsAllowed + " cards");
        }
        this.cards.push(card);
    };
    Player.prototype.discardCard = function (cardToDiscard) {
        for (var i = 0; i < this.cards.length; i++) {
            var card = this.cards[i];
            if (card.matches(cardToDiscard)) {
                this.cards.splice(i, 1);
                return;
            }
        }
        throw new Error("Player does not have this card: " + cardToDiscard.toString());
    };
    Player.prototype.cloneCards = function () {
        var cards = [];
        this.cards.forEach(function (c) { return cards.push(c.clone()); });
        return cards;
    };
    Player.prototype.sequenceCompleted = function () {
        this.sequenceCount++;
    };
    Player.prototype.getSequenceCount = function () {
        return this.sequenceCount;
    };
    Player.prototype.display = function (div) {
        var index = 0;
        div.innerHTML =
            "<span style=\"color: " + this.chipColor + "\">" + this.name + "</span>" +
                ": " +
                this.cards
                    .map(function (c) {
                    var jackEyeUnicode = c.isOneEyedJack()
                        ? "\uD83D\uDC41"
                        : c.isTwoEyedJack()
                            ? "\uD83D\uDC40"
                            : "";
                    return (c.getDisplayHtml() +
                        jackEyeUnicode +
                        ("<span style=\"font-size:" + GAME_CONFIG_1.default.PLAYER_CARDS_INDEX_FONT_SIZE + ";\">(" + index++ + ")</span>"));
                })
                    .join(", ");
    };
    return Player;
}());
exports.default = Player;
//# sourceMappingURL=Player.js.map