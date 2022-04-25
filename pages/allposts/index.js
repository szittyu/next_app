import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Card } from "/components/Card";
import { fetchAPI } from "/lib/api";

export const getStaticProps = async () => {

    const res = await fetchAPI("/learns", { learn: "*" });

    return {
        props: { learn: res }
    }
}

const AllPost = ({ learn }) => {
    console.log(learn)
    return (
        <>
            <Head>
                <title>Learning blog | All Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                {learn.map(data => (
                    <Link href={"/allposts/" + data.attributes.title} key={data.attributes.title}>
                        <a>
                            <Card
                                data={data}
                            />
                        </a>
                    </Link>
                ))}
            </div>
        </>
    );
}

export default AllPost;