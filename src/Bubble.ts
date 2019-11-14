export default class Bubble implements IObject {
  x: number;
  y: number;

  color: string;

  public radius: number = 30;
  public deleted: Boolean = false;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.color = this.getRandomColorHex();
  }

  public update() {
    if (this.radius > 0) {
      this.narrow()
    } else {
      this.delete();
    }
  }

  private narrow() {
    this.radius = this.radius * 0.95;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  private delete() {
    this.radius = 0;
    this.deleted = true;
  }

  private getRandomColorHex(): string {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);

    const color =
      "#" + this.rgbToHex(red) + this.rgbToHex(green) + this.rgbToHex(blue);
    return color;
  }

  private rgbToHex(val: number): string {
    let hex: string = Number(val).toString(16);

    if (hex.length < 2) {
      hex = "0" + hex;
    }

    return hex;
  }
}
