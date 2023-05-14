const userData = require("../mock-user.json");

const UserType = require("./Types/UserType");

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLList,
} = require("graphql");

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    getAllUsers: {
      type: new GraphQLList(UserType),
      resolve(parent, args) {
        return userData;
      },
    },
  },
});
const Mutation = new GraphQLObjectType({
  name: "UserMutation",
  fields: {
    createUser: {
      type: UserType,
      args: {
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      resolve(parent, args) {
        const { phone, email, name } = args;
        const list = userData.length + 1;
        userData.push({
          list,
          phone,
          email,
          name,
        });

        return args;
      },
    },
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});

module.exports = schema;
