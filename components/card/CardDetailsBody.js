import React from "react";
import { useRouter } from "next/router";

const CardDetailsBody = ({ body }) => {
    const router = useRouter()
    return (
        <div className="flex flex-col items-center font-medium text-gray-700 mb-2">
            <p className="w-full text-gray-700 font-bold">Description about the subject:</p>
            <p className="w-4/5">{router.asPath === "/allposts" ? body + "..." : body}</p>
        </div>
    );
}

export default CardDetailsBody;