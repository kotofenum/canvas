import RGB from "./RGB";

export default class Hex {
  private value: number;

  constructor(value: number) {
    this.value = value;
  }

  public get string() {
    return "#" + this.value.toString(16);
  }

  public get rgb() {
    return new RGB(
      (this.value >> 16) & 0xff,
      (this.value >> 8) & 0xff,
      this.value & 0xff
    );
  }
}
