import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Prompt} from "../shared/interfaces/Prompt";
import {CreateQuote, PartialPost } from "../shared/interfaces/CreateQuote";
import {PartialProfile, SignIn, SignUp} from "../shared/interfaces/Profile";


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

export interface ClientResponseForSignIn extends ClientResponse {
    authorization: string | undefined
}

export const apis = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({baseUrl:'/apis'}),

    tagTypes: ["SignUp", "SignIn" , "Prompt", "CreateQuote", "SaveQuote"],
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

        PostSignUp: builder.mutation<ClientResponse, PartialProfile>({
            transformResponse: transformMutationResponses,
            transformErrorResponse: transformErrorResponses,
            query (body: PartialProfile) {
                return{
                    url:'/sign-up',
                    method: "POST",
                    body
                }
            },
            }),

        PostSignIn: builder.mutation<ClientResponseForSignIn, SignIn>({
            query (body: SignIn) {
                return {
                    url:'/sign-in',
                    method: "POST",
                    body
                }
            },

            transformErrorResponse: transformErrorResponses,
            transformResponse: (response: ServerResponse, meta): ClientResponseForSignIn => {

                const authorization = meta?.response?.headers.get('authorization') ?? undefined

                if(response.status === 200) {
                    return {
                        status: response.status,
                        data: response.data,
                        message: response.message,
                        type: 'alert alert-success',
                        authorization
                    }
                }
                return {
                    status: response.status,
                    data: response.data,
                    message: response.message,
                    type: 'alert alert-danger',
                    authorization
                }
            }
        }),


        PostCreateQuoteGenerate: builder.mutation<ClientResponse, CreateQuote>({
            transformErrorResponse: transformErrorResponses,
            query (body: CreateQuote) {
                return{
                    url:'/generate-prompt',
                    method: "POST",
                    body
                }
            },
            transformResponse: transformMutationResponses,
            invalidatesTags: ["CreateQuote"]
        }),


        PostSaveQuote: builder.mutation<ClientResponse, PartialPost >({
            transformErrorResponse: transformErrorResponses,
            query (body: PartialPost ) {
                return{
                    url:'/post',
                    method: "POST",
                    body
                }
            },
            transformResponse: transformMutationResponses,
            invalidatesTags: ["SaveQuote"]
        }),
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


    export const {
                    // useGetProfileQuery,
                    usePostSignUpMutation,
                    usePostSignInMutation,
                    useGetAllPromptsQuery,
                    usePostCreateQuoteGenerateMutation,
                    usePostSaveQuoteMutation
                } = apis