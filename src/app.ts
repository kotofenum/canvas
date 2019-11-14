import Bubble from "./Bubble";

import _throttle from "lodash.throttle";

export default class App {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private objects: IObject[];

  private cb = _throttle((obj) => this.objects.push(obj), 20)

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
    this.objects = [];
  }

  public run() {
    this.canvas.addEventListener("mousemove", (event: MouseEvent) =>
      this.bubble(event)
    );
    window.requestAnimationFrame(() => this.tick());
  }

  private tick() {
    this.update();
    this.draw();

    window.requestAnimationFrame(() => this.tick());
  }

  private update() {
    this.objects.forEach(obj => obj.update());
  }

  private draw() {
    this.clearCanvas();
    this.objects.forEach(obj => obj.draw(this.context));
  }

  private clearCanvas() {
    this.context.clearRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  }

  private bubble(event: MouseEvent) {
    const x = event.clientX;
    const y = event.clientY;

    const bubble = new Bubble(x, y);

    this.cb(bubble)
  }
}
