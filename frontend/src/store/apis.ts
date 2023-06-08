import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {PartialSignUp, SignUp} from "../shared/interfaces/SignUp";

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
    tagTypes: ["SignUp"],
    endpoints: (builder) => ({
        getProfile: builder.query<SignUp[], string>({
            query: () => '/profile',
            transformResponse: (response: { data: SignUp[]}) => response.data,
            providesTags: ["SignUp"]
        }),
        PostProfile: builder.mutation<ClientResponse, PartialSignUp>({
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

    export const {useGetProfileQuery, usePostProfileMutation} = apis
    console.log(useGetProfileQuery)