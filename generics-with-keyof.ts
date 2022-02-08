function pluck<DataType, KeyType extends keyof DataType>(
  items: DataType[], key: KeyType
): DataType[KeyType][] {
  return items.map( item => item[key])
}

const dogs = [
  {
    name: "Mimi",
    age: 12
  },
  {
    name: "Pillon",
    age: 11
  },
  {
    name: "Max",
    age: 15
  },
  {
    name: "Bea",
    age: 3
  },
  {
    name: "Paco",
    age: 10
  },
];

console.log(pluck(dogs, "age"))
console.log(pluck(dogs, "name"))

interface BaseEvent {
  time: number;
  user: string;
};

interface EventMap {
  addToCart: BaseEvent & { quantity: number; productID: string; },
  checkout: BaseEvent
};

function sendEvent<Name extends keyof EventMap>(name: string, data: EventMap[Name]): void {
  console.log([name, data]);
}

sendEvent("addToCart", {productID: 'foo', user: 'baz', quantity: 1, time: 10})
sendEvent("checkout", {time: 20, user: 'bob'})