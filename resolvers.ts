import { Resolvers } from "./types";

const resolvers: Resolvers = {
  Product: {
    __resolveReference: ({ id, sku, package }) => {
      return { id: "" };
    },
  },
};
