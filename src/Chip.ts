import ChipColor from "./ChipColor";

export default class Chip {
  readonly color: ChipColor;
  private inSequence: boolean;
  constructor(color: ChipColor, inSequence = false) {
    this.color = color;
    this.inSequence = inSequence;
  }

  public markInSequence() {
    this.inSequence = true;
  }

  public clone(): Chip {
    return new Chip(this.color, this.inSequence);
  }

  public isInSequence(): boolean {
    return this.inSequence;
  }
}
