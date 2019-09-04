"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Move_1 = __importDefault(require("./Move"));
var MoveType_1 = __importDefault(require("./MoveType"));
var Position_1 = __importDefault(require("./Position"));
function nextMove(slots, playerCards, yourChipColor) {
    var positions = [];
    for (var i = 0; i < playerCards.length; i++) {
        var card = playerCards[i];
        var position = findCardPosition(slots, card);
        // We have dead card need to replace it
        if (position == null) {
            return new Move_1.default(MoveType_1.default.REPLACE_DEAD_CARD, card);
        }
        positions.push(position);
    }
    var nearestPosition = findNearestPositionTo(new Position_1.default(5, 5), positions);
    var slot = slots[nearestPosition.row][nearestPosition.col];
    if (!slot.isEmptySlot() || slot.card == null) {
        throw Error("Slot is not empty at position: " + nearestPosition.toString());
    }
    return new Move_1.default(MoveType_1.default.PLACE_CHIP, slot.card, nearestPosition);
}
exports.default = nextMove;
function findNearestPositionTo(referencePosition, positions) {
    var nearestPosition = positions[0];
    var shortestDistance = distance(referencePosition, positions[0]);
    positions.forEach(function (p) {
        var dist = distance(referencePosition, p);
        if (dist < shortestDistance) {
            nearestPosition = p;
            shortestDistance = dist;
        }
    });
    return nearestPosition;
}
function distance(point1, point2) {
    var a = point2.col - point1.col;
    var b = point2.row - point1.row;
    return Math.sqrt(a * a + b * b);
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
//# sourceMappingURL=Computer.js.map