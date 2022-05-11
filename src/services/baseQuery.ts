import { graphqlRequestBaseQuery } from "@rtk-query/graphql-request-base-query";

export const baseQuery = graphqlRequestBaseQuery({
  url: "http://localhost:3333/graphql",
});
