import Board from "./Board";
import ChipColor from "./ChipColor";
import Card from "./Card";
import Chip from "./Chip";

export default class GameOverCalculator {
  public static calculate(board: Board, chipColor: ChipColor): boolean {
    let sequenceCount: number = 0;
    for (let index = 0; index < 10; index++) {
      const rowSlots = board.slots[index];
      const rowResult: Result = GameOverCalculator.hasSequence(
        rowSlots,
        chipColor
      );
      if (rowResult.hasSequence()) {
        rowResult.markChipsInSequence();
        // Complete row is part of two sequence
        if (rowResult.sequenceCount === 10) {
          sequenceCount += 2;
        } else {
          sequenceCount++;
        }
      }

      const colSlots = board.slots.map(s => s[index]);
      const colResult: Result = GameOverCalculator.hasSequence(
        colSlots,
        chipColor
      );
      if (colResult.hasSequence()) {
        colResult.markChipsInSequence();
        // Complete row is part of two sequence
        if (colResult.sequenceCount === 10) {
          sequenceCount += 2;
        } else {
          sequenceCount++;
        }
      }
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
      const diagRes: Result = GameOverCalculator.hasSequence(
        diagMatrix,
        chipColor
      );

      if (diagRes.hasSequence()) {
        diagRes.markChipsInSequence();
        sequenceCount++;
      }
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

      const diagRes: Result = GameOverCalculator.hasSequence(
        diagMatrix,
        chipColor
      );

      if (diagRes.hasSequence()) {
        diagRes.markChipsInSequence();
        sequenceCount++;
      }
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

      const diagRes: Result = GameOverCalculator.hasSequence(
        diagMatrix,
        chipColor
      );

      if (diagRes.hasSequence()) {
        diagRes.markChipsInSequence();
        sequenceCount++;
      }
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

      const diagRes: Result = GameOverCalculator.hasSequence(
        diagMatrix,
        chipColor
      );

      if (diagRes.hasSequence()) {
        diagRes.markChipsInSequence();
        sequenceCount++;
      }
    }

    return sequenceCount > 1;

    // Calculate diagonally
  }

  private static hasSequence(
    row: (null | Chip | Card)[],
    chipColor: ChipColor
  ): Result {
    const result = new Result();
    for (let i = 0; i < row.length; i++) {
      const element = row[i];

      // either same color chip or corner
      if (
        element === null ||
        (element instanceof Chip && element.color === chipColor)
      ) {
        if (element != null) {
          result.addChip(element);
        } else {
          result.addCorner();
        }
      } else {
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
