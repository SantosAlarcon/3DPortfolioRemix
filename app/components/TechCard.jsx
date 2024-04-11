import React from "react";

const TechCard = ({ image, title }) => {
    return (
        <div className="m-2 cursor-pointer rounded-2xl border-white transition-all duration-300 hover:rotate-12 hover:scale-125 hover:drop-shadow-[0_0_1em_#66f]">
            <img src={image} title={title} loading="lazy" />
        </div>
    );
};

export default TechCard;
