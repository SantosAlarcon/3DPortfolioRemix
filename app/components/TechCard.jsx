const TechCard = ({ image, title }) => {
    return (
        <div role="img" aria-hidden className="m-2 flex h-24 w-24 justify-center items-center cursor-pointer rounded-2xl border-white transition-all duration-300 hover:rotate-12 hover:scale-125 hover:drop-shadow-[0_0_1em_#66f]">
            <img alt={title} src={image} title={title} loading="lazy" />
        </div>
    );
};

export default TechCard;
