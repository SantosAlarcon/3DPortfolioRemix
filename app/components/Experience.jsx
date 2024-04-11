import React from "react";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => (
    <VerticalTimelineElement
        contentStyle={{ background: "#1d1836", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experiences.iconBg }}
        icon={
            <div className="flex h-full w-full items-center justify-center">
                <img
                    src={experience.icon}
                    alt={experience.company_name}
                    className="h-[60%] w-[60%] object-contain"
                />
            </div>
        }
    >
        <div>
            <h1 className="text-[24px] font-bold text-white">
                {experience.title}
            </h1>
            <p className="m-0 text-[16px] font-semibold text-secondary">
                {experience.company_name}
            </p>
        </div>

        <ul className="ml-5 mt-5 list-disc space-y-2">
            {experience.points.map((point, index) => (
                <li
                    key={`experience-point-${index}`}
                    className="pl-1 text-[16px] tracking-wider text-white-100"
                >
                    {point}
                </li>
            ))}
        </ul>
    </VerticalTimelineElement>
);

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant}>
                <p className={styles.sectionSubText}>Esto es lo que he hecho</p>
                <h2 className={styles.sectionHeadText}>Experiencia laboral</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {experiences.map((experience, index) => (
                        <ExperienceCard key={index} experience={experience} />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "work");
