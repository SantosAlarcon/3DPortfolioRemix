import { SectionWrapper } from "../hoc";
import { tech_front, tech_back } from "../constants";
import { styles } from "../styles";
import TechCard from "./TechCard";

const Tech = () => {
    return (
        <div className="flex flex-col justify-center gap-10">
            <div>
                <h2 className={styles.sectionHeadText}>Tecnologías</h2>
                <p className="text-[14px] uppercase tracking-wider text-secondary sm:text-[18px]">
                    Estas son las tecnologías que utilizo para desarrollar mis
                    proyectos.
                </p>
            </div>

            <div className="flex flex-row flex-wrap justify-between sm:justify-start">
                <h3 className="w-full font-semibold text-2xl">Front-end</h3>
                <div className="flex items-center flex-wrap max-sm:justify-center max-sm:gap-5">
                    {tech_front.map((tech) => (
                        <div key={tech.name}>
                            <TechCard image={tech.icon} title={tech.name} />
                        </div>
                    ))}
                </div>

                <h3 className="w-full font-semibold text-2xl pt-10">Back-end</h3>
                <div className="flex items-center flex-wrap max-sm:justify-center max-sm:gap-5">
                    {tech_back.map((tech) => (
                        <div key={tech.name}>
                            <TechCard image={tech.icon} title={tech.name} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SectionWrapper(Tech, "tech");
