interface House {
  name: string;
  planets: string | string[];
}

interface HouseWithID extends House {
  id: number;
}
  
  function findHouses(houses: string): HouseWithID[];
  function findHouses(
    houses: string,
    filter: (house: House) => boolean
  ): HouseWithID[];
  function findHouses(houses: House[]): HouseWithID[];
  function findHouses(
    houses: House[],
    filter: (house: House) => boolean
  ): HouseWithID[];
  function findHouses(
    input: string | House[],
    filter?: (house: House) => boolean
    ): HouseWithID[] {
      const houses: House[] = typeof input === 'string' ? JSON.parse(input) : input;
      return houses.filter(filter || (house => true))
        .map(house => (
          {
            id: houses.indexOf(house),
            ...house
          }
        )); 
  }
  
  const houses: House[] = [
    { name: "Atreides", planets: "Calladan" },
    { name: "Corrino", planets: ["Kaitan", "Salusa Secundus"] },
    { name: "Harkonnen", planets: ["Giedi Prime", "Arrakis"] }
  ];

  console.log(
    findHouses(JSON.stringify(houses), ({ name }) => name === "Atreides")
  );
  
  console.log(findHouses(houses, ({ name }) => name === "Harkonnen"));