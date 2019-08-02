import Card from "./Card";
import Move from "./Move";
import MoveType from "./MoveType";
import Position from "./Position";
import Chip from "./Chip";
import ChipColor from "./ChipColor";
import Slot from "./Slot";

export default function nextMove(
  slots: Slot[][],
  playerCards: Card[],
  yourChipColor: ChipColor
): Move {
  const positions: Position[] = [];
  for (let i = 0; i < playerCards.length; i++) {
    const card = playerCards[i];
    const position = findCardPosition(slots, card);

    // We have dead card need to replace it
    if (position == null) {
      return new Move(MoveType.REPLACE_DEAD_CARD, card);
    }

    positions.push(position);
  }

  const nearestPosition = findNearestPositionTo(new Position(5, 5), positions);

  const slot = slots[nearestPosition.row][nearestPosition.col];
  if (!slot.isEmptySlot() || slot.card == null) {
    throw Error(`Slot is not empty at position: ${nearestPosition.toString()}`);
  }
  return new Move(MoveType.PLACE_CHIP, slot.card, nearestPosition);
}

function findNearestPositionTo(
  referencePosition: Position,
  positions: Position[]
): Position {
  let nearestPosition: Position = positions[0];
  let shortestDistance = distance(referencePosition, positions[0]);
  positions.forEach(p => {
    const dist = distance(referencePosition, p);
    if (dist < shortestDistance) {
      nearestPosition = p;
      shortestDistance = dist;
    }
  });

  return nearestPosition;
}

function distance(point1: Position, point2: Position): number {
  const a = point2.col - point1.col;
  const b = point2.row - point1.row;

  return Math.sqrt(a * a + b * b);
}

function findCardPosition(slots: Slot[][], playerCard: Card): Position | null {
  for (let row = 0; row < slots.length; row++) {
    const slotsRow = slots[row];
    for (let col = 0; col < slotsRow.length; col++) {
      const slot = slotsRow[col];
      if (slot.isEmptySlot() && slot.hasMatchingCard(playerCard)) {
        return new Position(row, col);
      }
    }
  }

  return null;
}
