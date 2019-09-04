"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = __importDefault(require("./Move"));
var MoveType_1 = __importDefault(require("./MoveType"));
var Position_1 = __importDefault(require("./Position"));
function nextMove(boardCards, playerCards, yourChipColor) {
    for (var i = 0; i < playerCards.length; i++) {
        var card = playerCards[i];
        var position = findCardPosition(boardCards, card);
        if (position != null) {
            return new Move_1.default(MoveType_1.default.PLACE_CHIP, card, position);
        }
    }
    throw new Error("All player cards are dead cards");
}
exports.default = nextMove;
function findCardPosition(slots, playerCard) {
    for (var row = 0; row < slots.length; row++) {
        var rowCards = slots[row];
        for (var col = 0; col < rowCards.length; col++) {
            var slot = rowCards[col];
            if (slot.isEmptySlot() && slot.hasMatchingCard(playerCard)) {
                return new Position_1.default(row, col);
            }
        }
    }
    return null;
}
//# sourceMappingURL=Computer2.js.map