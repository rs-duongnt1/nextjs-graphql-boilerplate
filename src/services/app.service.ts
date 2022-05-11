import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "./baseQuery";
import getPosts from "@graphql/getPosts.graphql";

export const appApi = createApi({
  baseQuery: baseQuery,
  reducerPath: "app",
  tagTypes: [],
  endpoints: (builder) => ({
    getPosts: builder.query<any, any>({
      query: () => ({
        document: getPosts,
      }),
      transformResponse: (response: any) => response!.data,
    }),
  }),
});

export const { useGetPostsQuery, usePrefetch } = appApi;
