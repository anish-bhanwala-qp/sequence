"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Chip = /** @class */ (function () {
    function Chip(color, inSequence) {
        if (inSequence === void 0) { inSequence = false; }
        this.color = color;
        this.inSequence = inSequence;
    }
    Chip.prototype.markInSequence = function () {
        this.inSequence = true;
    };
    Chip.prototype.clone = function () {
        return new Chip(this.color, this.inSequence);
    };
    Chip.prototype.isInSequence = function () {
        return this.inSequence;
    };
    return Chip;
}());
exports.default = Chip;
//# sourceMappingURL=Chip.js.map