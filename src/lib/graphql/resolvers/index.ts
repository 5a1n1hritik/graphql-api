import { Query } from "./query";
import { Mutation } from "./mutation";
import { GraphQLScalarType, Kind, ValueNode } from "graphql";

function parseLiteral(ast: ValueNode): any {
  switch (ast.kind) {
    case Kind.STRING:
    case Kind.BOOLEAN:
      return ast.value;

    case Kind.INT:
    case Kind.FLOAT:
      return Number(ast.value);

    case Kind.OBJECT: {
      const result: any = {};
      for (const field of ast.fields) {
        result[field.name.value] = parseLiteral(field.value);
      }
      return result;
    }

    case Kind.LIST:
      return ast.values.map(v => parseLiteral(v));

    default:
      return null;
  }
}

export const JSONScalar = new GraphQLScalarType({
  name: "JSON",
  description: "Custom JSON scalar type",

  serialize(value) {
    return value;
  },

  parseValue(value) {
    return value;
  },

  parseLiteral(ast) {
    return parseLiteral(ast);
  },
});

export const resolvers = {
  JSON: JSONScalar,
  Query,
  // Mutation,
};
