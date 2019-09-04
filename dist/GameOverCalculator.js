"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameOverCalculator = /** @class */ (function () {
    function GameOverCalculator() {
    }
    GameOverCalculator.calculate = function (board, chipColor) {
        var sequenceCount = 0;
        var _loop_1 = function (index) {
            var rowSlots = board.slots[index];
            sequenceCount = this_1.calculateSequenceCount(rowSlots, chipColor, sequenceCount);
            var colSlots = board.slots.map(function (s) { return s[index]; });
            sequenceCount = this_1.calculateSequenceCount(colSlots, chipColor, sequenceCount);
        };
        var this_1 = this;
        for (var index = 0; index < 10; index++) {
            _loop_1(index);
        }
        var row = 0;
        var column = 0;
        for (var i = 0; i < 10; i++) {
            var diagMatrix = [];
            row = 0;
            column = i;
            for (var j = 0; j < 10; j++) {
                if (row <= 9 && column <= 9) {
                    diagMatrix.push(board.slots[row][column]);
                    row++;
                    column++;
                }
            }
            sequenceCount = this.calculateSequenceCount(diagMatrix, chipColor, sequenceCount);
        }
        for (var i = 1; i < 10; i++) {
            var diagMatrix = [];
            row = i;
            column = 0;
            for (var j = 0; j < 10; j++) {
                if (row <= 9 && column <= 9) {
                    diagMatrix.push(board.slots[row][column]);
                    row++;
                    column++;
                }
            }
            sequenceCount = this.calculateSequenceCount(diagMatrix, chipColor, sequenceCount);
        }
        for (var i = 9; i > 0; i--) {
            var diagMatrix = [];
            column = i;
            row = 0;
            for (var j = 9; j > 0; j--) {
                if (row <= 9 && column >= 0) {
                    diagMatrix.push(board.slots[row][column]);
                    row++;
                    column--;
                }
            }
            sequenceCount = this.calculateSequenceCount(diagMatrix, chipColor, sequenceCount);
        }
        for (var i = 1; i < 10; i++) {
            var diagMatrix = [];
            column = 9;
            row = i;
            for (var j = 1; j < 9; j++) {
                if (row <= 9 && column >= 0) {
                    diagMatrix.push(board.slots[row][column]);
                    // console.log("Diagonal --> ", row,column);
                    row++;
                    column--;
                }
            }
            sequenceCount = this.calculateSequenceCount(diagMatrix, chipColor, sequenceCount);
        }
        return sequenceCount > 1;
        // Calculate diagonally
    };
    GameOverCalculator.calculateSequenceCount = function (slots, chipColor, sequenceCount) {
        var rowResult = GameOverCalculator.hasSequence(slots, chipColor);
        if (rowResult.hasSequence()) {
            rowResult.markChipsInSequence();
            // Complete row is part of two sequence
            if (rowResult.sequenceCount === 10) {
                sequenceCount += 2;
            }
            else {
                sequenceCount++;
            }
        }
        return sequenceCount;
    };
    GameOverCalculator.hasSequence = function (row, chipColor) {
        var result = new Result();
        for (var i = 0; i < row.length; i++) {
            var slot = row[i];
            // either same color chip or corner
            if (slot.isCorner ||
                (slot.chip != null && slot.chip.color === chipColor)) {
                if (slot.chip != null) {
                    result.addChip(slot.chip);
                }
                else {
                    result.addCorner();
                }
            }
            else {
                if (result.hasSequence()) {
                    return result;
                }
                result.resetSequence();
            }
        }
        return result;
    };
    return GameOverCalculator;
}());
exports.default = GameOverCalculator;
var Result = /** @class */ (function () {
    function Result() {
        this.sequenceChips = [];
        this.gameOver = false;
        this.sequenceCount = 0;
        this.cornerCount = 0;
    }
    Result.prototype.resetSequence = function () {
        this.sequenceChips = [];
        this.sequenceCount = 0;
        this.cornerCount = 0;
    };
    Result.prototype.addCorner = function () {
        this.cornerCount++;
        this.sequenceCount++;
    };
    Result.prototype.addChip = function (chip) {
        this.sequenceChips.push(chip);
        this.sequenceCount++;
    };
    Result.prototype.markChipsInSequence = function () {
        if (this.sequenceCount !== 10) {
            for (var i = 0; i < 5 - this.cornerCount; i++) {
                this.sequenceChips[i].markInSequence();
            }
        }
        else {
            this.sequenceChips.forEach(function (c) { return c.markInSequence(); });
        }
    };
    Result.prototype.hasSequence = function () {
        return this.sequenceCount > 4;
    };
    return Result;
}());
//# sourceMappingURL=GameOverCalculator.js.map