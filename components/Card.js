import React from "react";

export const Card = ({ data }) => {

    let dateStr = new Date(data.attributes.publishedAt)
    dateStr.toLocaleDateString()

    return (
        <div className="m-10 border-l-8 border-solid py-4 px-8 bg-white hover:border-blue-600">
            <p className="font-bold my-2">Title of the subject: {data.attributes.title}</p>
            <div>Description about the subject: {data.attributes.body.substring(0, 100)}...</div>
        </div>
    )
}