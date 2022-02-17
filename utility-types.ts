//Partial
interface MyUser {
  name: string;
  id: number;
  email?: string;
}

const merge = <T>(
  user: T,
  overrides: Partial<T>
): T => {
  return {
    ...user,
    ...overrides
  }
}

const user1: MyUser = {
  name: "Gerson",
  id: 1,
}

const user2: MyUser = {
  name: "Yannet",
  id: 2,
}

console.log(merge(user1, user2))

//Required
type RequiredMyUser = Required<MyUser>

//Pick and Omit
type JustEmailAndName = Pick<MyUser, "email" | "name">
type UserWithoutID = Omit<MyUser, "id">

const mapById = (users: MyUser[]) : Map<MyUser["id"], UserWithoutID> => {
  return users.reduce((a,v) => {
    const {id, ...other} = v;
    a.set(id, other);
    return a;
  }, new Map())
}