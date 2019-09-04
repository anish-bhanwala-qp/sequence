"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Position = /** @class */ (function () {
    function Position(row, col) {
        if (row < 0 || row > 9) {
            throw Error("Invalid row number: " + row);
        }
        if (col < 0 || col > 9) {
            throw Error("Invalid column number: " + col);
        }
        this.row = row;
        this.col = col;
    }
    Position.prototype.toString = function () {
        return "row: " + this.row + ", col: " + this.col;
    };
    return Position;
}());
exports.default = Position;
//# sourceMappingURL=Position.js.map