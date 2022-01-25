interface Point {
  x: number,
  y:number
}

function createPoint(json: string): Point;
function createPoint(x: number, y: number): Point;

function createPoint(
  first: string | number,
  second?: number
): Point{
  if(second !== undefined) {
    return {
      x: first as number,
      y: second
    }
  } else {
    return JSON.parse(first as string) as Point;
  }
}

console.log(createPoint(2,3))
console.log(createPoint('x: 2, y: 3'))