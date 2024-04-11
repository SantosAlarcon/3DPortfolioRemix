import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
    index,
    testimonial,
    name,
    designation,
    company,
    image,
}) => (
    <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="w-full rounded-3xl bg-black-200 p-10 xs:w-[320px]"
    >
        <p className="text-[48px] font-black text-white">"</p>
        <div className="mt-1">
            <p>{testimonial}</p>
        </div>
        <div className="mt-7 flex items-center justify-between gap-1">
            <div className="flex flex-1 flex-col">
                <p className="text-[16px] font-medium text-white">
                    <span className="blue-text-gradient">@</span> {name}
                </p>
                <p className="mt-1 text-[12px] text-secondary">
                    {designation} de {company}
                </p>
            </div>

            <img
                className="h-10 w-10 rounded-full"
                src={image}
                alt={`feedback-by-${name}`}
            />
        </div>
    </motion.div>
);

const Feedbacks = () => {
    return (
        <div className="mt-12 rounded-[20px] bg-black-100">
            <div className={`${styles.padding} rounded-2xl bg-tertiary`}>
                <motion.div variants={textVariant()}>
                    <p className={styles.sectionSubText}>
                        Lo que los demás opinan
                    </p>
                    <h2 className={styles.sectionHeadText}>Testimonios</h2>
                </motion.div>
            </div>
            <div
                className={`${styles.padding} -mt-20 flex flex-wrap justify-evenly gap-7 pb-14 xs:w-auto`}
            >
                {testimonials.map((test, index) => (
                    <FeedbackCard
                        key={`testimonial-${index}`}
                        index={index}
                        {...test}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Feedbacks, "testimonials");
