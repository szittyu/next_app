import React from "react";
import CardDetailsIcon from "./CardDetailsIcon";

const CardDetailsTitle = ({ title, image }) => {
    return (
        <div className="flex flex-row items-center justify-between text-gray-700 font-bold">
            <p className="my-2 underline">Title of the subject: </p>
            <div className="flex flex-col items-center">
                <p className="">{title}</p>
                <CardDetailsIcon
                    image={image}
                />
            </div>
        </div>
    );
}

export default CardDetailsTitle;