declare module 'triangulr' {
  export type Triangle = {
    cols: number,
    counter: number,
    lines: number,
    points: { x: number, y: number }[],
    x: number,
    y: number
  }

  const Triangulr: {
    new (
      width: number,
      height: number,
      lineHeight: number,
      pointArea = 0,
      renderingFunction?: (triangle: Triangle) => string
    ): SVGElement
  }

  export = Triangulr
}