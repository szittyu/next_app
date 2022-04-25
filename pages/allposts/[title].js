import React from "react";
import { fetchAPI } from "/lib/api";
import CardDetails from "/components/card/CardDetails"

export async function getStaticPaths() {

    const res = await fetchAPI("/learns", { fields: ["title"] });


    return {
        paths: res.map((a) => ({
            params: {
                title: a.attributes.title,
            },
        })),
        fallback: false,
    };

}
export async function getStaticProps({ params }) {

    const learnRes = await fetchAPI("/learns", {
        filters: {
            title: params.title,
        },
        populate: "*"
    })
    return {
        props: { learn: learnRes },
        revalidate: 1,
    };
}


const Details = ({ learn }) => {
    console.log(learn)
    return (
        <div>
            {learn.map(data => (
                <CardDetails
                    key={data.attributes.title}
                    data={data.attributes}
                />
            ))}
        </div>
    )
}

export default Details;