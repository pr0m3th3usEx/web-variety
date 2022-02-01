import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EXPRESS_API_URL } from '../config';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: EXPRESS_API_URL,
  }),
  endpoints: () => ({}),
});
