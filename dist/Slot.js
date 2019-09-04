"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Slot = /** @class */ (function () {
    function Slot(isCorner, card, chip) {
        if (isCorner && (card != null || chip != null)) {
            throw Error("Chip/card cannot be placed in corner");
        }
        this.isCorner = isCorner;
        this.card = card;
        this.chip = chip;
    }
    Slot.prototype.placeChip = function (newChip) {
        if (newChip == null) {
            throw Error("Chip cannot be null or undefined");
        }
        if (this.chip != null) {
            throw Error("Chip already placed in this slot");
        }
        this.chip = newChip;
    };
    Slot.prototype.removeChip = function () {
        if (this.chip == null) {
            throw Error("There is no chip in this slot");
        }
        this.chip = undefined;
    };
    Slot.prototype.isEmptySlot = function () {
        return !this.isCorner && this.chip == null;
    };
    Slot.prototype.hasMatchingCard = function (card) {
        return card.matches(this.card || null);
    };
    Slot.prototype.clone = function () {
        return new Slot(this.isCorner, this.card != null ? this.card.clone() : undefined, this.chip != null ? this.chip.clone() : undefined);
    };
    return Slot;
}());
exports.default = Slot;
//# sourceMappingURL=Slot.js.map