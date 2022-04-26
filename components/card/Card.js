import React from "react";
import CardDetailsBody from "./CardDetailsBody";
import CardDetailsDate from "./CardDetailsDate";
import CardDetailsTitle from "./CardDetailsTitle";
import { getStrapiMedia } from "/lib/media";

export const Card = ({ data }) => {
    const { title, body, publishedAt, icon } = data.attributes
    const image = getStrapiMedia(icon)
    console.log(image)
    return (
        <div className="m-10 border-l-8 border-solid py-4 px-8 bg-white hover:border-blue-600 rounded-lg drop-shadow-lg">
            <CardDetailsTitle
                title={title}
                image={image}
            />
            <CardDetailsBody
                body={body.substring(0, 100)}
            />
            <CardDetailsDate
                publishedAt={publishedAt}
            />
        </div>
    )
}