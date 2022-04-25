import React from "react";

const CardDetailsTitle = ({ title }) => {
    return (
        <div className="flex flex-row items-center justify-between text-gray-700 font-bold">
            <p className="my-2 underline">Title of the subject: </p>
            <p className="">{title}</p>
        </div>
    );
}

export default CardDetailsTitle;