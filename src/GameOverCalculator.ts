import Board from "./Board";
import ChipColor from "./ChipColor";
import Card from "./Card";
import Chip from "./Chip";
import { timingSafeEqual } from "crypto";

export default class GameOverCalculator {
  public static calculate(board: Board, chipColor: ChipColor): boolean {
    let sequenceCount: number = 0;
    for (let index = 0; index < 10; index++) {
      const rowSlots = board.slots[index];
      const rowResult: Result = GameOverCalculator.hasSequence(
        board,
        rowSlots,
        chipColor
      );
      if (rowResult.hasSequence()) {
        rowResult.markChipsInSequence();
        sequenceCount++;
      }

      const colSlots = board.slots.map(s => s[index]);
      const colResult: Result = GameOverCalculator.hasSequence(
        board,
        colSlots,
        chipColor
      );
      if (colResult.hasSequence()) {
        colResult.markChipsInSequence();
        sequenceCount++;
      }

      if (sequenceCount > 1) {
        return true;
      }
    }

    return false;
    // Calculate diagonally
    /* for (let row = 0; row < board.slots.length; row = row + 1) {
      const slotsRow = board.slots[row];
      for (let col = 0; col < slotsRow.length; col = col + 1) {
        const space = slotsRow[col];
        if (space instanceof Card && move.card.matches(space)) {
          throw Error(`Card is not dead: ${move.card.toString()}`);
        }
      }
    } */
  }

  private static hasSequence(
    board: Board,
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
      if (result.hasSequence()) {
        break;
      }
    }

    return result;
  }
}

class Result {
  sequenceChips: Chip[] = [];
  gameOver: boolean = false;
  sequenceCount: number = 0;

  resetSequence() {
    this.sequenceChips = [];
    this.sequenceCount = 0;
  }

  addCorner() {
    this.sequenceCount++;
  }

  addChip(chip: Chip) {
    this.sequenceChips.push(chip);
    this.sequenceCount++;
  }

  markChipsInSequence() {
    this.sequenceChips.forEach(c => c.markInSequence());
  }

  hasSequence(): boolean {
    return this.sequenceCount > 4;
  }
}
