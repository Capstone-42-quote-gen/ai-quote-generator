import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {PartialSignUp, SignUp} from "../shared/interfaces/SignUp";
import {Prompt} from "../shared/interfaces/Prompt.ts";

export interface ServerResponse {
    status: number,
    data: unknown,
    message: string | null
}

export interface ClientResponse extends ServerResponse {
    type: "alert alert-success" | "alert alert-danger"
}

export interface MutationResponse {
    data: ClientResponse | undefined,
    error: ClientResponse | undefined
}

export const apis = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:'/apis'}),
    tagTypes: ["SignUp","Prompt"],
    endpoints: (builder) => ({
        getProfile: builder.query<SignUp[], string>({
            query: () => '/profile',
            transformResponse: (response: { data: SignUp[]}) => response.data,
            providesTags: ["SignUp"]
        }),

        getAllPrompts: builder.query<Prompt[], string>({
            query: () => '/prompt',
            transformResponse: (response: { data: Prompt[]}) => response.data,
            providesTags: ["Prompt"]
        }),


        PostSignUp: builder.mutation<ClientResponse, PartialSignUp>({
            query (body: PartialSignUp) {
                return{
                    url:'/profile',
                    method: "POST",
                    body
                }
            },
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            invalidatesTags: ["SignUp"]
            })
        })
    })

function transformMutationResponses(response: ServerResponse): ClientResponse {
    if (response.status === 200) {
        return {
            status: response.status,
            data: response.data,
            message: response.message,
            type: 'alert alert-success',
        }
    }
    return {
        status: response.status,
        data: response.data,
        message: response.message,
        type: 'alert alert-danger',
    }
}

    function transformErrorResponses(): ClientResponse {
        return {
            status: 500,
            data: null,
            message: "An unexpected error occurred",
            type: 'alert alert-danger',
        }
    }
    export const {useGetProfileQuery, usePostSignUpMutation, useGetAllPromptsQuery} = apis
    console.log(usePostSignUpMutation)