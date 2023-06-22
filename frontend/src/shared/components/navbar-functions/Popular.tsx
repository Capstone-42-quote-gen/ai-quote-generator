import { Navigation } from "./NavBar";
import { GalleryContent } from "../HomeGallery/GalleryContent";
import { useGetPostByVotePostIdQuery } from "../../../store/apis.ts";
import { Post } from "../../interfaces/Post.ts";
import LazyLoad from "react-lazyload";

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
                <LazyLoad key={post.postId} height={1800} offset={1800}>
                    <GalleryContent post={post} />
                </LazyLoad>
            ))}
        </>
    );
}
