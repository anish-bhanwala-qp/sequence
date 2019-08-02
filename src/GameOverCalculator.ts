import Board from "./Board";
import ChipColor from "./ChipColor";
import Card from "./Card";
import Chip from "./Chip";
import Slot from "./Slot";

export default class GameOverCalculator {
  public static calculate(board: Board, chipColor: ChipColor): boolean {
    let sequenceCount: number = 0;
    for (let index = 0; index < 10; index++) {
      const rowSlots = board.slots[index];
      sequenceCount = this.calculateSequenceCount(
        rowSlots,
        chipColor,
        sequenceCount
      );

      const colSlots = board.slots.map(s => s[index]);
      sequenceCount = this.calculateSequenceCount(
        colSlots,
        chipColor,
        sequenceCount
      );
    }

    let row = 0;
    let column = 0;

    for (let i = 0; i < 10; i++) {
      let diagMatrix = [];
      row = 0;
      column = i;
      for (let j = 0; j < 10; j++) {
        if (row <= 9 && column <= 9) {
          diagMatrix.push(board.slots[row][column]);
          row++;
          column++;
        }
      }
      sequenceCount = this.calculateSequenceCount(
        diagMatrix,
        chipColor,
        sequenceCount
      );
    }

    for (let i = 1; i < 10; i++) {
      let diagMatrix = [];
      row = i;
      column = 0;
      for (let j = 0; j < 10; j++) {
        if (row <= 9 && column <= 9) {
          diagMatrix.push(board.slots[row][column]);
          row++;
          column++;
        }
      }

      sequenceCount = this.calculateSequenceCount(
        diagMatrix,
        chipColor,
        sequenceCount
      );
    }

    for (let i = 9; i > 0; i--) {
      let diagMatrix = [];
      column = i;
      row = 0;
      for (let j = 9; j > 0; j--) {
        if (row <= 9 && column >= 0) {
          diagMatrix.push(board.slots[row][column]);
          row++;
          column--;
        }
      }

      sequenceCount = this.calculateSequenceCount(
        diagMatrix,
        chipColor,
        sequenceCount
      );
    }

    for (let i = 1; i < 10; i++) {
      let diagMatrix = [];
      column = 9;
      row = i;
      for (let j = 1; j < 9; j++) {
        if (row <= 9 && column >= 0) {
          diagMatrix.push(board.slots[row][column]);
          // console.log("Diagonal --> ", row,column);
          row++;
          column--;
        }
      }
      sequenceCount = this.calculateSequenceCount(
        diagMatrix,
        chipColor,
        sequenceCount
      );
    }

    return sequenceCount > 1;

    // Calculate diagonally
  }

  private static calculateSequenceCount(
    slots: Slot[],
    chipColor: ChipColor,
    sequenceCount: number
  ) {
    const rowResult: Result = GameOverCalculator.hasSequence(slots, chipColor);
    if (rowResult.hasSequence()) {
      rowResult.markChipsInSequence();
      // Complete row is part of two sequence
      if (rowResult.sequenceCount === 10) {
        sequenceCount += 2;
      } else {
        sequenceCount++;
      }
    }
    return sequenceCount;
  }

  private static hasSequence(row: Slot[], chipColor: ChipColor): Result {
    const result = new Result();
    for (let i = 0; i < row.length; i++) {
      const slot = row[i];

      // either same color chip or corner
      if (
        slot.isCorner ||
        (slot.chip != null && slot.chip.color === chipColor)
      ) {
        if (slot.chip != null) {
          result.addChip(slot.chip);
        } else {
          result.addCorner();
        }
      } else {
        if (result.hasSequence()) {
          return result;
        }
        result.resetSequence();
      }
    }

    return result;
  }
}

class Result {
  sequenceChips: Chip[] = [];
  gameOver: boolean = false;
  sequenceCount: number = 0;
  cornerCount: number = 0;

  resetSequence() {
    this.sequenceChips = [];
    this.sequenceCount = 0;
    this.cornerCount = 0;
  }

  addCorner() {
    this.cornerCount++;
    this.sequenceCount++;
  }

  addChip(chip: Chip) {
    this.sequenceChips.push(chip);
    this.sequenceCount++;
  }

  markChipsInSequence() {
    if (this.sequenceCount !== 10) {
      for (let i = 0; i < 5 - this.cornerCount; i++) {
        this.sequenceChips[i].markInSequence();
      }
    } else {
      this.sequenceChips.forEach(c => c.markInSequence());
    }
  }

  hasSequence(): boolean {
    return this.sequenceCount > 4;
  }
}
