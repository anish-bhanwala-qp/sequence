import ChipColor from "./ChipColor";

export default class Chip {
  readonly color: ChipColor;
  constructor(color: ChipColor) {
    this.color = color;
  }
}
