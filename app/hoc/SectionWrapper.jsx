import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { MotionSection } from "~/components/Motions";

const SectionWrapper = (Component, idName) =>
    function HOC() {
        return (
            <MotionSection
                variants={staggerContainer()}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.05 }}
                className={`${styles.padding} relative z-0 mx-auto max-w-[92rem]`}
            >
                <span className="hash-span" id={idName}>
                    &nbsp;
                </span>
                <Component />
            </MotionSection>
        );
    };

export default SectionWrapper;
