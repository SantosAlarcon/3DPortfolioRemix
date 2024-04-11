import { StarField } from "starfield-react/dist/starfield-react";

const Stars = () => {
    return (
        <StarField
            className="h-fill-available w-full"
            width={1200}
            height={1200}
            fps={60}
            bgStyle="transparent"
        />
    );
};

const StarsCanvas = () => {
    return (
        <div className="absolute inset-0 z-[-1] h-auto w-full">
            <Stars />
        </div>
    );
};

export default StarsCanvas;
