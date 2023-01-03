import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { ProductType } from 'components/Products/Product';

export const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fakestoreapi.com'
  }),
  endpoints: (builder) => ({
    getProducts: builder.query<ProductType[], void>({
      query: () => ({ url: 'products', method: 'GET' })
    })
  })
});

export const { useGetProductsQuery } = storeApi;
