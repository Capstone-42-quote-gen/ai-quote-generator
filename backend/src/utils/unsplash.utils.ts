import {createApi} from "unsplash-js";
import * as nodeFetch from 'node-fetch';
import {Random} from "unsplash-js/dist/methods/photos/types";
import {json} from "express";

// @ts-ignore
const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch,
});

export async function generateImage(topic: string): Promise<{
    userDownloadLink: any;
    userName: string;
    userHtmlLink: string;
    regularUrl: string
}[]> {
    const result = await unsplash.photos.getRandom({
        query: topic,
        orientation: "portrait",
        count: 10
    })

    if (result.errors) {
        console.log('error occurred: ', result.errors[0]);
        throw new Error("error occurred fetching images from unsplash")
    } else {
        const imageData = result.response as Random[];
        const reducedData = imageData.map((entry) => {
            return {
                regularUrl: entry.urls.regular,
                userName: entry.user.name,
                userHtmlLink: entry.user.links.html,
                userDownloadLink: entry.links.download
            };
        });

        return reducedData;
    }
}