type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinate(c1: ThreeDCoordinate, c2: ThreeDCoordinate): ThreeDCoordinate {
  return [
    c1[0] + c2[0],
    c1[1] + c2[1],
    c1[2] + c2[2],
  ]
}

console.log(add3DCoordinate([10,20,0], [10,20,40]))
 
function simpleStringState(initial: string): [() => string, (v: string) => void] {
  let str: string = initial;
  return [
    () => str,
    (v: string) => {
      str = v;
    }
  ]
}

const [str1Getter, str1Setter] = simpleStringState("hello");

console.log(str1Getter())
console.log(str1Setter("World"))
console.log(str1Getter())
