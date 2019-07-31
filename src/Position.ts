export default class Position {
  readonly row: number;
  readonly col: number;
  constructor(row: number, col: number) {
    this.row = row;
    this.col = col;
  }

  public toString(): string {
    return `row: ${this.row}, col: ${this.col}`;
  }
}
