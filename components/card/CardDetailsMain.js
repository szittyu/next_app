import React from "react";

import CardDetailsBody from "./CardDetailsBody";
import CardDetailsSecondary from "./CardDetailsSecondary";
import CardDetailsTitle from "./CardDetailsTitle";

const CardDetailsMain = ({ data, image }) => {
    return (
        <div className="m-10 border-l-8 border-solid py-4 px-8 bg-white border-blue-600 rounded-lg drop-shadow-lg">
            <CardDetailsTitle
                title={data.title}
                image={image}
            />
            <CardDetailsBody
                body={data.body}
            />
            <CardDetailsSecondary
                data={data}
            />
        </div>
    );
}

export default CardDetailsMain;