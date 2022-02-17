// reproduce forEach, filter and map using just reduce, and make them generic so that types are preserved.

//forEach

function forEach<T>(
  arr: T[],
  fn: (x: T) => void
): void {
  arr.reduce<void>( (_a, v) => fn(v), undefined)
}

function filter<T>(
  arr: T[],
  fn: (x: T) => boolean
): T {
  return arr.reduce((a, v) =>  fn(v) ? [...a, v] : a, []);
}