import React from "react";
import Image from "next/image";

const CardDetailsIcon = ({ image }) => {
    return (
        <Image src={image} alt={"icon"} width={40} height={40} />
    );
}

export default CardDetailsIcon;