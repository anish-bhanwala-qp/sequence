export default class Position {
  readonly row: number;
  readonly col: number;
  constructor(row: number, col: number) {
    if (row < 0 || row > 9) {
      throw Error(`Invalid row number: ${row}`);
    }
    if (col < 0 || col > 9) {
      throw Error(`Invalid column number: ${col}`);
    }
    this.row = row;
    this.col = col;
  }

  public toString(): string {
    return `row: ${this.row}, col: ${this.col}`;
  }
}
