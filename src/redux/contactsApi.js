import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://620a8c6e92946600171c5b1b.mockapi.io/phonebook/',
    tagTypes: ['contacts'],
  }),

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => 'contacts',
      providesTags: ['contacts'],
    }),
    addContact: builder.mutation({
      // note: an optional `queryFn` may be used in place of `query`
      query: ({ name, number }) => ({
        url: 'contacts',
        method: 'POST',
        body: {
          name,
          phone: number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsApi;
