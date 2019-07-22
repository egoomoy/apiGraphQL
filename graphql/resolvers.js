import { deleteUSer, getById, getUsers, addUser } from "./db/db";
import { getMovies } from "./db/rest_db";
const resolvers = {
  Query: {
    movies: () => getMovies(),
    name: () => "gooyunnmo",
    users: () => getUsers(),
    user: (_, { id }) => getById(id)
  },
  Mutation: {
    addUser: (_, { name, age, gender }) => addUser(name, age, gender),
    deleteUSer: (_, { id }) => deleteUSer(id)
  }
};

export default resolvers;
