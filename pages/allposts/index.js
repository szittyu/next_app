import React from "react";
import Head from "next/head";
import Link from "next/link";
import { Card } from "../../components/card/Card";
import { fetchAPI } from "/lib/api";

export async function getStaticProps() {

    const res = await fetchAPI("/learns", { populate: "*" });

    return {
        props: { learn: res }
    };
}


const AllPost = ({ learn }) => {
    return (
        <>
            <Head>
                <title>Learning blog | All Posts</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="text-center text-gray-600 text-4xl mb-10 font-medium">
                All Posts
            </h1>
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