import Board from "./Board";
import ChipColor from "./ChipColor";
import Card from "./Card";
import Chip from "./Chip";

export default class GameOverCalculator {
  public static calculate(board: Board, chipColor: ChipColor): boolean {
    for (let row = 0; row < 10; row++) {
      if (GameOverCalculator.rowHasSequence(board, row, chipColor)) {
        return true;
      }
    }
    for (let col = 0; col < 10; col++) {
      if (GameOverCalculator.columnHasSequence(board, col, chipColor)) {
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

  private static rowHasSequence(
    board: Board,
    row: number,
    chipColor: ChipColor
  ): boolean {
    let sequenceCount = 0;
    for (let i = 0; i < 10; i++) {
      const element = board.slots[row][i];
      // either same color chip or corner
      if (
        element === null ||
        (element instanceof Chip && element.color === chipColor)
      ) {
        sequenceCount++;
      } else {
        sequenceCount = 0;
      }
      if (sequenceCount === 5) {
        return true;
      }
    }

    return false;
  }

  private static columnHasSequence(
    board: Board,
    column: number,
    chipColor: ChipColor
  ): boolean {
    let sequenceCount = 0;
    for (let i = 0; i < 10; i++) {
      const element = board.slots[i][column];
      if (
        element === null ||
        (element instanceof Chip && element.color === chipColor)
      ) {
        sequenceCount++;
      } else {
        sequenceCount = 0;
      }
      if (sequenceCount === 5) {
        return true;
      }
    }

    return false;
  }
}
