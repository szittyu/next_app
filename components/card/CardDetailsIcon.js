import React from "react";
import Image from "next/image";

const CardDetailsIcon = ({ image }) => {
    return (
        <Image src={image} alt={"icon"} width={50} height={50} />
    );
}

export default CardDetailsIcon;