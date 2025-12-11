import { createSchema, createYoga } from "graphql-yoga";
import { resolvers } from "@/lib/graphql/resolvers";
import { typeDefs } from "@/lib/graphql/schema";

export const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers,
  }),
  graphqlEndpoint: "/api/graphql",

  fetchAPI: { Response },

  cors: {
    origin: "*",
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false,
  },
});

export {
  handleRequest as GET,
  handleRequest as POST,
  handleRequest as OPTIONS,
};
