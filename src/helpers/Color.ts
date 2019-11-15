import RGB from "./RGB";
import Hex from "./Hex";

export default class Color {
  public rgb: RGB;
  public hex: Hex;

  constructor(value: RGB | Hex) {
    if (value instanceof RGB) {
      this.rgb = value;
      this.hex = value.hex
    } else if (value instanceof Hex) {
      this.rgb = value.rgb;
      this.hex = value
    } else {
      console.warn("Incorrect color value")
      this.rgb = new RGB(0, 0, 0);
      this.hex = new Hex(0)
    }
  }
}
