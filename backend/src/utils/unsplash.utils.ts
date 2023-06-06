import {createApi} from "unsplash-js";
import * as nodeFetch from 'node-fetch';
import {Random} from "unsplash-js/dist/methods/photos/types";

// @ts-ignore
const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch,
});

export async function generateImage(topic: string): Promise<Random[]> {
    const result = await unsplash.photos.getRandom({
        query: topic,
        orientation: "portrait",
        count: 10
    })

        if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
            throw new Error("error occurred fetching images from unsplash")
        } else {
            const imageData = result.response;
            // console.log(imageData);
            return imageData as Random[];
        }

}
