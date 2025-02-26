import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant, slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import photo from "/FotoSantos.webp";
import { MotionDiv } from "./Motions";
import ReactParallaxTilt from "react-parallax-tilt";

interface ServiceCardProps {
    title: string,
    icon: string,
    index: number
}

const ServiceCard = ({ title, icon, index }: ServiceCardProps) => {
    return (
        <ReactParallaxTilt className="w-full select-none sm:w-[250px]" scale={1} tiltEnable transitionSpeed={450} tiltMaxAngleX={45} tiltMaxAngleY={45}>
            <MotionDiv
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="green-pink-gradient w-full rounded-[20px] p-[1px] shadow-[var(--card)]"
            >
                <div
                    className="flex min-h-[280px] flex-col items-center justify-evenly rounded-[20px] bg-tertiary px-12 py-5"
                >
                    <img
                        src={icon}
                        alt={title}
                        className="h-16 w-16 object-contain"
                        loading="lazy"
                    />
                    <h3 className="text-center text-[20px] font-bold text-white">
                        {title}
                    </h3>
                </div>
            </MotionDiv>
        </ReactParallaxTilt>
    );
};

const About = () => {
    return (
        <div className="max-sm:overflow-hidden">
            <MotionDiv variants={textVariant()}>
                <h1 className={styles.sectionHeadText}>Sobre mí</h1>
                <p className={styles.sectionSubText}>Introducción</p>
            </MotionDiv>

            <div className="flex gap-5 max-sm:flex-col-reverse">
                <MotionDiv variants={fadeIn("right", "tween", 0.1, 1)}>
                    <p className="mt-4 max-w-3xl text-[18px] leading-[30px] text-secondary">
                        Me considero un apasionado{" "}
                        <b>desarrollador full-stack junior</b>. Mi devoción por
                        la <b>tecnología</b> y mi <b>curiosidad innata</b> me
                        han llevado a adquirir conocimientos en diferentes áreas
                        del desarrollo web. Desde el <b>diseño de interfaces</b>{" "}
                        hasta la implementación de funcionalidades del servidor,
                        ofreciendo una experiencia completa al usuario.
                    </p>

                    <p className="mt-4 max-w-3xl text-[18px] leading-[30px] text-secondary">
                        Mi enfoque principal es crear aplicaciones web{" "}
                        <b>eficientes y atractivas</b>, centrándome en la
                        usabilidad y experiencia del usuario, incluyendo el
                        diseño <b>responsive</b>. Me considero, además, una
                        persona dispuesta a <b>dominar nuevas tecnologías</b>{" "}
                        para mejorar mis habilidades, y estoy emocionado por
                        formar parte de un equipo dinámico donde pueda
                        contribuir y crecer profesionalmente.
                    </p>

                    <p className="mt-4 max-w-3xl text-[18px] leading-[30px] text-secondary">
                        Cuando no estoy programando, soy amante de la{" "}
                        <b>cultura japonesa</b> y del <b>frikismo</b>, además de
                        ser amante de la música de los 80s, 90s, música
                        remember, pero sobre todo, <b>del trance</b>.
                    </p>

                    <p className="mt-4 max-w-3xl text-[18px] leading-[30px] text-secondary">
                        En mi portfolio encontrarás una selección de proyectos
                        en los que he trabajado, donde podrás ver ejemplos
                        concretos de mi trabajo y la forma en que aplico mis
                        habilidades técnicas. Estoy listo para asumir nuevos
                        retos y contribuir en el desarrollo de soluciones
                        innovadoras. ¡Espero tener la oportunidad de colaborar
                        contigo y de hacer realidad ideas increíbles!
                    </p>
                </MotionDiv>
                <MotionDiv variants={fadeIn("left", "spring", 0.5, 1)}>
                    <img
                        className="rounded-full max-sm:mx-auto max-sm:w-[75%]"
                        alt="Santos Alarcón"
                        src={photo}
                        loading="lazy"
                    />
                </MotionDiv>
            </div>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(About, "about");
