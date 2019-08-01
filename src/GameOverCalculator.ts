import Board from "./Board";
import ChipColor from "./ChipColor";
import Card from "./Card";
import Chip from "./Chip";
import {timingSafeEqual} from "crypto";

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
        }


        let r = 0;
        let c = 0;


        for (let i = 0; i < 10; i++) {
            let diagMatrix = [];
            r = 0;
            c = i;
            for (let j = 0; j < 10; j++) {
                if (r <= 9 && c <= 9) {
                    diagMatrix.push(board.slots[r][c]);
                    r++;
                    c++;
                }
            }
            const diagRes: Result = GameOverCalculator.hasSequence(
                board,
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
            r = i;
            c = 0;
            for (let j = 0; j < 10; j++) {
                if (r <= 9 && c <= 9) {
                    diagMatrix.push(board.slots[r][c]);
                    r++;
                    c++;
                }
            }

            const diagRes: Result = GameOverCalculator.hasSequence(
                board,
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
            c = i;
            r = 0;
            for (let j = 9; j > 0; j--) {
                if (r <= 9 && c >= 0) {
                    diagMatrix.push(board.slots[r][c]);
                    r++;
                    c--;
                }
            }

            const diagRes: Result = GameOverCalculator.hasSequence(
                board,
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
            c = 9;
            r = i;
            for (let j = 1; j < 9; j++) {
                if (r <= 9 && c >= 0) {
                    diagMatrix.push(board.slots[r][c]);
                    console.log("Diagnonal --> ", r,c);
                    r++;
                    c--;
                }
            }

            const diagRes: Result = GameOverCalculator.hasSequence(
                board,
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
