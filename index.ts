const add = (a: number, b: number): number => a+b;

const addStrings = (a: string, b: string): string => `l'unione delle stringhe è ${a+b}`;

const addGeneric = function<T>(a: T, b:T) {
  if(typeof a === "number" && typeof b === "number") {
    return a+b;
  } 
  if(typeof a === "string" && typeof b === "string") {
    return `l'unione delle stringhe è ${a+b}`;
  } 
  return;
};
export {add, addStrings, addGeneric};