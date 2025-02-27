import { useState, useRef, lazy, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { MotionDiv } from "./Motions";
import { useInView } from "motion/react";

const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const service = "service_pvuk9gl";
        const template = "template_2usneng";
        const key = "NeOO99lpyn65FvPP2";
        setLoading(true);
        emailjs
            .send(
                service,
                template,
                {
                    from_name: form.nombre,
                    to_name: "Santos",
                    from_email: form.email,
                    to_email: "santosalarcon86@gmail.com",
                    message: form.mensaje,
                },
                key,
            )
            .then(
                () => {
                    setLoading(false);
                    alert(
                        "Gracias. Me pondré en contacto contigo lo más rápido posible.",
                    );
                    setForm({
                        nombre: "",
                        email: "",
                        mensaje: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert("Ha ocurrido un error.");
                },
            );
    };

    const LazyEarthCanvas = lazy(() => import("./canvas/Earth"));

    return (
        <div className="flex flex-col-reverse gap-10 overflow-hidden text-[18px] xl:mt-12 xl:flex-row">
            <MotionDiv
                variants={slideIn("left", "tween", 0.2, 1)}
                className="flex-[0.75] rounded-2xl bg-black-100 p-8"
            >
                <h2 className={styles.sectionHeadText}>Contacto</h2>
                <p className={styles.sectionSubText}>
                    Pónte en contacto conmigo
                </p>

                <div className="flex max-md:flex-col justify-between gap-8 py-8">
                    <a
                        href="/CurriculumFullStack.pdf"
                        aria-label="Descargar curriculum"
                        className="flex w-fit max-md:w-full items-center justify-center gap-2 rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none active:scale-95 active:shadow-inner"
			title="Descargar CV"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="social"
                            fill="currentColor"
                            viewBox="0 0 1024 1024"
                            className="h-[36px] w-[36px]"
			    alt="Curriculum Vitae"
                        >
                            <path d="M334.336 616.3456c0 11.5712 9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944H355.4304c-11.6736 0-21.0944 9.5232-21.0944 21.0944zM670.9248 702.0544H355.4304c-11.5712 0-21.0944 9.5232-21.0944 21.0944s9.5232 21.0944 21.0944 21.0944h315.4944c11.5712 0 21.0944-9.5232 21.0944-21.0944s-9.5232-21.0944-21.0944-21.0944z" />
                            <path d="M586.9568 165.888H272.4864c-23.2448 0-42.1888 18.944-42.1888 42.1888v607.8464c0 23.2448 18.944 42.1888 42.1888 42.1888H751.616c23.2448 0 42.1888-18.944 42.1888-42.1888V372.736l-206.848-206.848z m27.4432 87.1424l97.1776 97.1776h-89.9072c-3.8912 0-7.2704-3.3792-7.2704-7.2704v-89.9072z m137.1136 562.7904s0 0.1024 0 0l-479.0272 0.1024s-0.1024 0-0.1024-0.1024V208.1792s0-0.1024 0.1024-0.1024h297.984l1.6384 1.6384v133.12c0 27.2384 22.3232 49.4592 49.4592 49.4592h129.9456v423.5264z" />
                            <path d="M428.8512 388.7104c37.1712 0 67.2768-30.1056 67.2768-67.2768 0-37.1712-30.1056-67.2768-67.2768-67.2768S361.472 284.16 361.472 321.4336c0 37.1712 30.1056 67.2768 67.3792 67.2768z m0-97.6896c16.7936 0 30.4128 13.6192 30.4128 30.4128s-13.6192 30.4128-30.4128 30.4128-30.4128-13.6192-30.4128-30.4128 13.6192-30.4128 30.4128-30.4128zM355.4304 504.7296c11.6736 0 21.0944-9.4208 21.0944-21.0944 0-22.8352 23.9616-42.1888 52.3264-42.1888s52.3264 19.2512 52.3264 42.1888c0 11.6736 9.4208 21.0944 21.0944 21.0944s21.0944-9.4208 21.0944-21.0944c0-46.4896-42.3936-84.3776-94.5152-84.3776s-94.5152 37.888-94.5152 84.3776c0 11.6736 9.4208 21.0944 21.0944 21.0944z" />
                        </svg>
                        Descargar CV
                    </a>
                    <a
                        href="tel:641278743"
                        aria-label="Llamar al número de teléfono"
                        className="flex w-fit max-md:w-full items-center justify-center gap-2 rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none active:scale-95 active:shadow-inner"
			title="Número de teléfono"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="32"
                            fill="currentColor"
                            viewBox="0 0 1792 1792"
                            width="32"
			    alt="Teléfono"
                        >
                            <path d="M1600 1240q0 27-10 70.5t-21 68.5q-21 50-122 106-94 51-186 51-27 0-52.5-3.5t-57.5-12.5-47.5-14.5-55.5-20.5-49-18q-98-35-175-83-128-79-264.5-215.5t-215.5-264.5q-48-77-83-175-3-9-18-49t-20.5-55.5-14.5-47.5-12.5-57.5-3.5-52.5q0-92 51-186 56-101 106-122 25-11 68.5-21t70.5-10q14 0 21 3 18 6 53 76 11 19 30 54t35 63.5 31 53.5q3 4 17.5 25t21.5 35.5 7 28.5q0 20-28.5 50t-62 55-62 53-28.5 46q0 9 5 22.5t8.5 20.5 14 24 11.5 19q76 137 174 235t235 174q2 1 19 11.5t24 14 20.5 8.5 22.5 5q18 0 46-28.5t53-62 55-62 50-28.5q14 0 28.5 7t35.5 21.5 25 17.5q25 15 53.5 31t63.5 35 54 30q70 35 76 53 3 7 3 21z" />
                        </svg>
                        Teléfono
                    </a>
                </div>

                <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="mt-12 flex flex-col gap-8"
                >
                    <label className="flex flex-col">
                        <span className="mb-4 font-medium text-white">
                            Nombre{" "}
                            <span
                                className="mb-4 font-medium text-red-500"
                                title="Campo obligatorio"
                            >
                                (*)
                            </span>
                        </span>
                        <input
                            className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                            type="text"
                            placeholder="Nombre"
                            aria-label="Nombre"
                            required
                            name="nombre"
                            value={form.nombre}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-4 font-medium text-white">
                            Correo electrónico{" "}
                            <span
                                className="mb-4 font-medium text-red-500"
                                title="Campo obligatorio"
                            >
                                (*)
                            </span>
                        </span>
                        <input
                            className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                            type="email"
                            placeholder="Correo electrónico"
                            aria-label="Correo electrónico"
                            required
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                        />
                    </label>
                    <label className="flex flex-col">
                        <span className="mb-4 font-medium text-white">
                            Mensaje{" "}
                            <span
                                className="mb-4 font-medium text-red-500"
                                title="Campo obligatorio"
                            >
                                (*)
                            </span>
                        </span>
                        <textarea
                            className="rounded-lg border-none bg-tertiary px-6 py-4 font-medium text-white outline-none placeholder:text-secondary"
                            type="text"
                            placeholder="Mensaje"
                            aria-label="Mensaje"
                            required
                            rows={7}
                            name="mensaje"
                            value={form.mensaje}
                            onChange={handleChange}
                        />
                    </label>
                    <div className="flex flex-wrap gap-8">
                        <button
                            type="submit"
                            aria-label="Enviar"
                            className="w-fit rounded-xl bg-tertiary px-8 py-3 font-bold text-white shadow-md shadow-primary outline-none active:scale-95 active:shadow-inner"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </div>
                </form>
            </MotionDiv>

            <MotionDiv
                className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
                variants={slideIn("right", "tween", 0.2, 1)}
            >
		<Suspense>
		    <LazyEarthCanvas />
		</Suspense>
            </MotionDiv>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
