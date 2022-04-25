import React from "react";
import CardDetailsRate from "./CardDetailsRate";
import CardDetailsEnjoyed from "./CardDetailsEnjoyed";
import CardDetailsDate from "./CardDetailsDate";

const CardDetailsSecondary = ({ data }) => {
    const { ratingOfUseness, enjoyedOrNot, publishedAt } = data

    return (
        <div className="w-full">
            <CardDetailsRate
                ratingOfUseness={ratingOfUseness}
            />
            <CardDetailsEnjoyed
                enjoyedOrNot={enjoyedOrNot}
            />
            <CardDetailsDate
                publishedAt={publishedAt}
            />
        </div>
    );
}

export default CardDetailsSecondary;