import { createYoga, createSchema } from "graphql-yoga";
import { typeDefs } from "@/lib/graphql/schema";
import { resolvers } from "@/lib/graphql/resolvers";
// import { createContext } from "@/lib/graphql/context";

export const { handleRequest } = createYoga({
  schema: createSchema({
    typeDefs,
    resolvers
  }),
  graphqlEndpoint: "/api/graphql",
  // context: createContext,

  fetchAPI: { Response },

  cors: {
    origin: "*",            // ← allow all origins
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: false
  }
});

export { handleRequest as GET, handleRequest as POST, handleRequest as OPTIONS };
