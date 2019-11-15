const DEFAULT_RADIUS = 30;

import Color from "./helpers/Color";
import Hex from "./helpers/Hex";

export default class Bubble implements IObject {
  x: number;
  y: number;

  color: Color;

  private startRadius: number;
  public radius: number;
  public deleted: Boolean = false;

  constructor(x: number, y: number, radius: number = DEFAULT_RADIUS) {
    this.x = x;
    this.y = y;
    this.startRadius = radius ? radius : DEFAULT_RADIUS;
    this.radius = this.startRadius;

    this.color = this.getRandomColor();
  }

  public update() {
    if (this.radius > 0.1) {
      this.narrow();
    } else {
      this.delete();
    }
  }

  private narrow() {
    this.radius = this.radius * 0.95;
  }

  public draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.strokeStyle = this.color.hex.string;
    ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
  }

  private delete() {
    this.deleted = true;
  }

  private getRandomColor(): Color {
    const value = Math.round(Math.random() * 0xffffff);

    return new Color(new Hex(value));
  }
}
