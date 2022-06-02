import React from "react"
import Head from "next/head";
import { getStrapiMediaIcon } from "../../lib/mediaIcon";
import CardDetailsMain from "./CardDetailsMain"

const CardDetails = ({ data }) => {
    const image = getStrapiMediaIcon(data.icon)
    return (
        <>
            <Head>
                <title>Learning blog | {data.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardDetailsMain
                data={data}
                image={image}
            />
        </>
    );
}

export default CardDetails;