import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";


export const apis = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
    endpoints: (builder) => ({
        getAllPrompts: builder.query<Prompt[], string>({
            query: () => '/prompt',
            transformResponse: (response: { data: Prompt[]}) => response.data,
        }),

    })
})