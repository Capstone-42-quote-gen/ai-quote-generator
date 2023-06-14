import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {Prompt} from "../shared/interfaces/Prompt";
import {CreateQuote, PartialPost } from "../shared/interfaces/CreateQuote";
import {PartialProfile, Profile, SignIn, SignUp} from "../shared/interfaces/Profile";
import {Post} from "../shared/interfaces/Post.ts";
import {PostPrompt} from "../shared/interfaces/PostPrompt.ts";
import {PartialVote, Vote} from "../shared/interfaces/Vote";



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


    tagTypes: ["SignUp", "SignIn" , "Prompt", "CreateQuote", "SaveQuote", "Posts","PostPostPrompt","PostPrompt"],

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


        getAllPromptsByPostId: builder.query<Prompt[], string>({
            query: (postId) => `/prompt/postId/${postId}`,
            transformResponse: (response: { data: Prompt[]}) => response.data,
            providesTags: ["PostPrompt"]
        }),

        getPostByPostId: builder.query<Post, string>({
            query: (postId: string ) => `/post/${postId}`,
            transformResponse: (response: { data: Post}) => response.data,

        }),

        getProfileByProfileId: builder.query<Profile, string>({
            query: (profileId) => `/profile/${profileId}`,
            transformResponse: (response: {data: Profile}) => response.data,
        }),

        getPostByPostCreationTime: builder.query<Post[], string> ({
            query: () => '/post/',
            transformResponse: (response: { data: Post[]}) => response.data,
            providesTags: ["Posts"]
        }),

        getPostByVotePostId: builder.query<Post[], string> ({
            query: () => '/post/',
            transformResponse: (response: { data: Post[] }) => response.data,
            providesTags: ["Posts"]
    }),
        getVotesByVotePostId: builder.query<Vote[], string>({
            query: (VotePostId: string = "") => `/vote/votePostId/${VotePostId}`,
            transformResponse: (response: { data: Vote[] }) => response.data,
        }),

        getPostsByPostProfileId: builder.query<Post[], string> ({
            query: (postProfileId: string) => `/Post/${postProfileId}`,
            transformResponse: (response: { data: Post[] }) => {
                return response.data;
            },
        }),

        getPostsByPromptId: builder.query<Post[], string> ({
            query: (promptId: string) => `/post/promptId/${promptId}`,
            transformResponse: (response: { data: Post[] }) => {
                return response.data;
            },
        }),

        PostVote: builder.mutation<ClientResponse, PartialVote>({
           transformResponse: transformMutationResponses,
           transformErrorResponse: transformErrorResponses,
           query (body: PartialVote) {
               return{
                   url: '/vote/',
                   method: "POST",
                   body
               }
           }
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
                    useGetPostsByPostProfileIdQuery,
                    usePostSignUpMutation,
                    usePostSignInMutation,
                    useGetAllPromptsQuery,
                    useGetAllPromptsByPostIdQuery,
                    usePostCreateQuoteGenerateMutation,
                    usePostSaveQuoteMutation,
                    usePostPostPromptMutation,
                    useGetPostByPostIdQuery,
                    useGetPostByPostCreationTimeQuery,
                    useGetPostsByPromptIdQuery,
                    useGetPostByPostIdAndVoteIdQuery,
                    usePostVoteMutation,
                    useGetVotesByVotePostIdQuery,
                    useGetProfileByProfileIdQuery
                } = apis