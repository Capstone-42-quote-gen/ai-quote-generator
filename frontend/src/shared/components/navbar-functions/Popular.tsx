import { Navigation } from "./NavBar";
import { GalleryContent } from "../HomeGallery/GalleryContent";
import { useGetPostByVotePostIdQuery } from "../../../store/apis.ts";
import { Post } from "../../interfaces/Post.ts";
import {Footer} from "./Footer.tsx";

export function DisplayByPopular() {
    const { data, isLoading } = useGetPostByVotePostIdQuery("");
    const posts = data ?? [];

    if (isLoading) {
        return null;
    }

    return (
        <>
            <Navigation />
            {posts.map((post: Post) => (
               <GalleryContent post={post} />

            ))}
            <Footer/>
        </>
    );
}
