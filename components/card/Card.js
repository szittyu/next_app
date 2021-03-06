import React from "react";
import CardDetailsBody from "./CardDetailsBody";
import CardDetailsDate from "./CardDetailsDate";
import CardDetailsTitle from "./CardDetailsTitle";
import { getStrapiMediaIcon } from "../../lib/mediaIcon"

export const Card = ({ data }) => {
    console.log(data.attributes.icon)
    const { title, body, publishedAt, icon } = data.attributes
    const image = getStrapiMediaIcon(icon)
    return (
        <div
            className="m-10 border-l-8 border-gray-400 border-solid bg-blue-600/10 py-4 px-8 bg-white hover:border-blue-600 rounded-lg  drop-shadow-2xl"
        >
            <CardDetailsTitle
                title={title}
                image={image}
            />
            <CardDetailsBody
                body={body.substring(0, 150)}
            />
            <CardDetailsDate
                publishedAt={publishedAt}
            />
        </div>
    )
}