//Keyword interface usarlo solo per definire strutture di oggetti,
//per il resto usare la keyword TYPE.
//type MutationFunction =  (v: number) => number;

const arrayMutate = <T>(
  values: T[],
  mutate: (v: T) => T
): T[] => values.map(mutate);

const incrementByOne = (v: number): number => v + 1;

console.log(arrayMutate([1, 2, 3], incrementByOne))
console.log(arrayMutate(["jack"], (v: string) => `hello ${v}`))

//Functions as return values
const createAdder = (num: number) => {
  return (v: number) => v + num;
}

const add1 = createAdder(1);
console.log(`ADDER: ${add1(2)}`)