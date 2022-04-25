import React from "react";

const CardDetailsEnjoyed = ({ enjoyedOrNot }) => {
    return (
        <div className="flex flex-row justify-end">
            <p className="text-gray-700 font-bold">Enjoyed to learn this:&nbsp;</p>
            <p className="text-gray-700">{enjoyedOrNot === true ? "Yes" : "No"}</p>
        </div>
    );
}

export default CardDetailsEnjoyed;