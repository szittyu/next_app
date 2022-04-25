import React from "react"
import { AiOutlineEdit } from "react-icons/ai"

const CardDetails = ({ data }) => {
    let dateStr = new Date(data.publishedAt)
    dateStr.toLocaleDateString()
    return (
        <div className="m-10 border-l-8 border-solid py-4 px-8 bg-white hover:border-blue-600">
            <p className="font-bold my-2">Title of the subject: {data.title}</p>
            <div>Description about the subject: {data.body}</div>
            <p>Rate of useness: {data.ratingOfUseness}</p>
            <p>Enjoyed to learn this: {data.enjoyedOrNot === true ? "Yes" : "No"}</p>
            <div className="flex justify-between">
                <p>Published at: {dateStr.toLocaleDateString()}</p>
                <div className="flex flex-row justify-end items-center hover:cursor-pointer w-12">
                    <p>Edit</p>
                    <AiOutlineEdit />
                </div>
            </div>
        </div>
    );
}

export default CardDetails;