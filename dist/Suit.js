"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DrawSuit_1 = __importDefault(require("./DrawSuit"));
var Suit = Object.freeze({
    SPADE: 1,
    CLUB: 2,
    DIAMOND: 3,
    HEART: 4,
    text: function (val) {
        Suit.validate(val);
        switch (val) {
            case Suit.SPADE:
                return "Spade";
            case Suit.CLUB:
                return "Club";
            case Suit.DIAMOND:
                return "Diamond";
            case Suit.HEART:
                return "Heart";
        }
    },
    getDrawFunction: function (val) {
        Suit.validate(val);
        switch (val) {
            case Suit.SPADE:
                return DrawSuit_1.default.drawSpade;
            case Suit.CLUB:
                return DrawSuit_1.default.drawClub;
            case Suit.DIAMOND:
                return DrawSuit_1.default.drawDiamond;
            case Suit.HEART:
                return DrawSuit_1.default.drawHeart;
            default:
                throw Error("Invalid suit value: " + val);
        }
    },
    validate: function (val) {
        if (typeof val !== "number" || val < 1 || val > 4) {
            throw new Error("Invalid suit value: " + val + ". Must be number between 1 and 4.");
        }
    }
});
exports.default = Suit;
//# sourceMappingURL=Suit.js.map