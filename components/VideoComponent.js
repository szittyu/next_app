import React from "react";

export const VideoComponent = ({ cover }) => {
    return (
        <video
            role="video"
            autoPlay muted loop>
            <source src={cover} />
        </video>
    );
}
