import React from "react";

const CardDetailsDate = ({ publishedAt }) => {
    let dateStr = new Date(publishedAt)
    dateStr.toLocaleDateString()
    return (
        <div className="flex justify-end">
            <p className="text-gray-700 font-bold">Published at:&nbsp;</p>
            <p className="text-gray-700">{dateStr.toLocaleDateString()}</p>
        </div>
    );
}

export default CardDetailsDate;