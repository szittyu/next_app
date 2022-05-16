import React from "react"
import Head from "next/head";
import { VideoComponent } from "../components/VideoComponent";
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media";

export async function getStaticProps() {

    const res = await fetchAPI("/cover", { populate: "*" });

    return {
        props: { data: res }
    };
}

const Video = ({ data }) => {
    const { video } = data.attributes
    const coverVideo = getStrapiMedia(video)
    return (
        <>
            <Head>
                <title>Learning blog | Video</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div
                role="video"
            >
                <h1
                    className="text-center text-gray-600 text-4xl mb-10 font-medium"
                >
                    Video
                </h1>
                <VideoComponent
                    cover={coverVideo}
                />
            </div>
        </>
    );
}

export default Video;