import React from "react"
import Head from "next/head";

import CardDetailsMain from "./CardDetailsMain"

const CardDetails = ({ data }) => {

    return (
        <>
            <Head>
                <title>Learning blog | {data.title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <CardDetailsMain
                data={data}
            />
        </>
    );
}

export default CardDetails;