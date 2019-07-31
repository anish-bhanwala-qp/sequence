import ChipColor from "./ChipColor";

export default class Chip {
  readonly color: ChipColor;
  constructor(color: ChipColor) {
    this.color = color;
  }

  public clone(): Chip {
    return new Chip(this.color);
  }
}
