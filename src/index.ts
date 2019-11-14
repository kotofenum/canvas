import App from "./app";

const CANVAS_TAG = "canvas"
const config = {
  WIDTH: 1000,
  HEIGHT: 800,
  BACKGROUND: "#eeeeed",
  BORDER: "1px solid #cccccc"
}

const canvas: HTMLCanvasElement = document.createElement(CANVAS_TAG);
canvas.id = CANVAS_TAG;
canvas.width = config.WIDTH;
canvas.height = config.HEIGHT;
canvas.style.backgroundColor = config.BACKGROUND
canvas.style.border = config.BORDER

document.body.appendChild(canvas);

const app = new App(canvas)
app.run()