import { baseApi } from "@/redux/api/baseApi";

const productsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: "/products",
        method: "POST",
      }),
    }),
  }),
});

export const { useGetAllProductsQuery } = productsApi;
