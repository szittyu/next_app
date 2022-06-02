import React from "react"
import Head from "next/head";
import ReactPlayer from "react-player"
import { VideoComponent } from "../components/VideoComponent";
import { fetchAPI } from "../lib/api";
import { getStrapiMediaVideo } from "../lib/mediaVideo";

export async function getStaticProps() {

    const res = await fetchAPI("/cover", { populate: "*" });

    return {
        props: { data: res }
    };
}

const Video = ({ data }) => {
    const coverVideo = getStrapiMediaVideo(data.attributes.video.data[0])
    console.log(coverVideo)
    return (
        <div
            role="video"
        >
            <Head>
                <title>Learning blog | Video</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                data-testid={"video"}
            >
                <h1
                    className="text-center text-gray-600 text-4xl mb-10 font-medium"
                    role="header"
                >
                    Video
                </h1>

                <ReactPlayer controls url={coverVideo} />
                {/* <VideoComponent
                    cover="https://res.cloudinary.com/djham8flr/video/upload/v1654185862/odyssey_02_c549f3388b.mp4"
                /> */}
            </div>
        </div>
    );
}

export default Video;