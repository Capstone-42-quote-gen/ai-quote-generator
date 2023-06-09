import {createAsyncThunk} from "@reduxjs/toolkit";
import {httpConfig} from "../shared/utils/http-config";
import {fetchProfileByProfileId} from "./profile";

interface Post {
    postId: string,
    postProfileId: string,
    postPhotoUrl: string,
    postQuote: string,
    postCreationTime: Date | null,
    postPhotographerName: string,
    postPhotographerUrl: string
}

interface State {
    post: Post[],
}

const initialState: State = {
    post: [],
};

export const fetchAllPosts = createAsyncThunk(
    'post/fetchAllPosts',
    async () => {
        const { data } = await httpConfig.get("/apis/post/");
        return data;
    }
)

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setAllPosts: (state, action) =>  {
            state.post = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAllPosts.fulfilled, (state, action) => {
            state.post = action.payload;
        })
    }
});

export const { setAllPosts } = postSlice.actions;

export const fetchPostsAndProfiles = () => async (dispatch, getState) => {
    await dispatch(fetchAllPosts());

    const { posts } = getState().post;
    const profileIdSet = new Sett<string>();

    for (const post of posts) {
        const { postId, postProfileId } = post;
        if (!profileIdSet.has(postProfileId)) {
            profileIdSet.add(postProfileId);
            await dispatch(fetchProfileByProfileId(postProfileId));
        }
        await dispatch(fetchVotesByVotesId(postId));
    }
}

export default postSlice.reducer;