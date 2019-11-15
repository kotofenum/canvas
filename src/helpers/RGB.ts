import Hex from "./Hex";

export default class RGB {
  private r: number;
  private g: number;
  private b: number;

  constructor(r: number, g: number, b: number) {
    this.r = r;
    this.g = g;
    this.b = b;
  }

  public scheme() {
    return {
      r: this.r,
      g: this.g,
      b: this.b
    };
  }

  public get hex() {
    return new Hex(this.number);
  }

  private get number() {
    return Number(this.r * 0x10000 + this.g * 0x100 + this.b);
  }
}
