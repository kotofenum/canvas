import Bubble from "./Bubble";

import _throttle from "lodash.throttle";

export default class App {
  private canvas: HTMLCanvasElement;
  private context: CanvasRenderingContext2D;
  private objects: IObject[];

  private cb = _throttle(obj => this.objects.push(obj), 20);

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = <CanvasRenderingContext2D>canvas.getContext("2d");
    this.objects = [];
  }

  public run() {
    this.canvas.addEventListener("mousemove", (event: MouseEvent) =>
      this.bubble(event)
    );
    this.canvas.addEventListener("click", event => this.bubble(event, 300));
    window.requestAnimationFrame(() => this.tick());
  }

  private tick() {
    this.update();
    this.draw();

    window.requestAnimationFrame(() => this.tick());
  }

  private update() {
    const toDelete: IObject[] = [];

    this.objects.forEach(obj => {
      obj.update();
      if (obj.deleted) toDelete.push(obj);
    });

    this.objects = this.objects.filter(obj => !toDelete.includes(obj));
  }

  private draw() {
    this.clearCanvas();
    this.objects.forEach(obj => obj.draw(this.context));
  }

  private clearCanvas() {
    this.context.fillStyle = "#222"
    this.context.fillRect(
      0,
      0,
      this.context.canvas.width,
      this.context.canvas.height
    );
  }

  private bubble(event: MouseEvent, radius?: number) {
    const x = event.clientX;
    const y = event.clientY;

    const bubble = new Bubble(x, y, radius);

    this.cb(bubble);
  }
}
