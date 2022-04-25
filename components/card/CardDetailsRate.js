import React from "react";

const CardDetailsRate = ({ ratingOfUseness }) => {
    return (
        <div className="flex flex-row justify-end">
            <p className="text-gray-700 font-bold">Rate of useness (1-10):&nbsp;</p>
            <p className="text-gray-600">{ratingOfUseness}</p>
        </div>
    );
}

export default CardDetailsRate;