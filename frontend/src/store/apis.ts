import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Prompt} from "../shared/interfaces/Prompt";
import {CreateQuote, PartialPost } from "../shared/interfaces/CreateQuote";
import {PartialProfile, SignIn, SignUp} from "../shared/interfaces/Profile";
import {Post} from "../shared/interfaces/Post.ts";
import {PostPrompt} from "../shared/interfaces/PostPrompt.ts";



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
    baseQuery: fetchBaseQuery({baseUrl:'/apis',
        prepareHeaders: (headers, {}) => {
            const token = window.localStorage.getItem("authorization")

            // If we have a token set in state, let's assume that we should be passing it.
            if (token) {
                headers.set('authorization', token)
            }

            return headers
        },
    }),


    tagTypes: ["SignUp", "SignIn" , "Prompt", "CreateQuote", "SaveQuote", "Posts","PostPostPrompt"],

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

        getPostByPostId: builder.query<Post, string>({
            query: (postId: string ) => `/post/${postId}`,
            transformResponse: (response: { data: Post}) => response.data,

        }),

        getPostByPostCreationTime: builder.query<Post[], string> ({
            query: () => '/post/',
            transformResponse: (response: { data: Post[]}) => response.data,
            providesTags: ["Posts"]
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

        PostPostPrompt: builder.mutation<ClientResponse, PostPrompt >({
            transformErrorResponse: transformErrorResponses,
            query (body: PostPrompt ) {
                return{
                    url:'/post-prompt',
                    method: "POST",
                    body
                }
            },
            transformResponse: transformMutationResponses,
            invalidatesTags: ["PostPostPrompt"]
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
                    usePostSaveQuoteMutation,
                    usePostPostPromptMutation,
                    useGetPostByPostIdQuery,
                    useGetPostByPostCreationTimeQuery
                } = apis