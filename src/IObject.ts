interface IObject {
  x: number,
  y: number,
  objects?: IObject
  deleted: Boolean
  update: (...args: any[]) => void;
  draw: (ctx: CanvasRenderingContext2D) => void;
}