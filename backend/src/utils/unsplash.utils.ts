import {createApi} from "unsplash-js";
import * as nodeFetch from 'node-fetch';

// @ts-ignore
const unsplash = createApi({
    accessKey: process.env.UNSPLASH_API_KEY,
    fetch: nodeFetch.default as unknown as typeof fetch,
});

export async function generateImage(topic: string): Promise<any> {
    console.log("unsplash", unsplash)
    console.log("process.env", process.env)
    unsplash.search.getPhotos({query: topic})
        .then(result => {
        if (result.errors) {
            // handle error here
            console.log('error occurred: ', result.errors[0]);
        } else {
            const feed = result.response;

            // extract total and results array from response
            const {total, results} = feed;

            // handle success here
            console.log(`received ${results.length} photos out of ${total}`);
            console.log('first photo: ', results[0]);
        }
    });
}

// type Photo = {
//     id: number;
//     width: number;
//     height: number;
//     urls: { large: string; regular: string; raw: string; small: string };
//     color: string | null;
//     user: {
//         username: string;
//         name: string;
//     };
// };

// @ts-ignore
// const serverApi = createApi({
//     accessKey: process.env.UNSPLASH_API_KEY,
// });


// const Body: FC = () => {
//     const [data, setPhotosResponse] = useState(null);

    // useEffect(() => {
    //     serverApi.search
    //         .getPhotos({query: topic, orientation: "landscape"})
    //         .then(result => {
    //             return result;
    //         })
    //         .catch(() => {
    //             console.log("something went wrong!");
    //         });
    // }, []);