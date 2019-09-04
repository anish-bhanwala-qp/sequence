"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = __importDefault(require("./Move"));
var MoveType_1 = __importDefault(require("./MoveType"));
var Position_1 = __importDefault(require("./Position"));
function nextMove(slots, playerCards, yourChipColor) {
    var cardsText = playerCards.map(function (c) { return c.toString(); }).join(",");
    var instructions = "***p = place chip, r = remove chip, d = dead card*** \n  ***[p|r|d][card index][card position]*** \n  ***Example place first card at position 1:1-> p011***";
    var val = prompt(instructions);
    if (!val) {
        return auto(slots, playerCards);
    }
    var type = val.substr(0, 1);
    var index = Number(val.substr(1, 1));
    var row = Number(val.substr(2, 1));
    var col = Number(val.substr(3, 1));
    console.log("type: " + type + ", index: " + index + ", row: " + row + ", col: " + col);
    var card = playerCards[index];
    switch (type) {
        case "p":
            return new Move_1.default(MoveType_1.default.PLACE_CHIP, card, new Position_1.default(row, col));
        case "r":
            return new Move_1.default(MoveType_1.default.REMOVE_CHIP, card, new Position_1.default(row, col));
        case "d":
            return new Move_1.default(MoveType_1.default.REPLACE_DEAD_CARD, card);
        default:
            throw new Error("Invalid move");
    }
}
exports.default = nextMove;
function auto(slots, playerCards) {
    for (var i = 0; i < playerCards.length; i++) {
        var card = playerCards[i];
        var position = findCardPosition(slots, card);
        if (position != null) {
            return new Move_1.default(MoveType_1.default.PLACE_CHIP, card, position);
        }
    }
    throw new Error("All player cards are dead cards");
}
function findCardPosition(slots, playerCard) {
    for (var row = 0; row < slots.length; row++) {
        var slotsRow = slots[row];
        for (var col = 0; col < slotsRow.length; col++) {
            var slot = slotsRow[col];
            if (slot.isEmptySlot() && slot.hasMatchingCard(playerCard)) {
                return new Position_1.default(row, col);
            }
        }
    }
    return null;
}
//# sourceMappingURL=ManualUser.js.map