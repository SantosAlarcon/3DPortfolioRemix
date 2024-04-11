import React from "react";

const Footer = () => {
    return (
        <footer className="mx-auto flex flex-col justify-center gap-5 bg-black-100 px-6 py-8 text-[18px] max-sm:text-[14px]">
            <div className="z-40 flex items-center justify-center gap-5">
                <a
                    href="mailto:santosalarcon86@gmail.com"
                    aria-label="Correo electrónico"
		    title="Correo electrónico"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="social"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="h-[36px] w-[36px] transition hover:scale-125"
                    >
                        <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z" />
                    </svg>
                </a>

                <a
                    href="https://www.linkedin.com/in/santos-alarcon-asensio"
                    target="_blank"
                    aria-label="LinkedIn"
		    title="Perfil de LinkedIn"
                >
                    <svg
                        id="social"
                        fill="currentColor"
                        xmlns="http://www.w4.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        x="0px"
                        y="0px"
                        viewBox="0 0 1000 1000"
                        enableBackground="new 0 0 1000 1000"
                        xmlSpace="preserve"
                        className="h-[36px] w-[36px] transition hover:scale-125"
                    >
                        <g>
                            <g>
                                <path d="M917.6,10H82.4C42.4,10,10,41.4,10,80.2v839.5c0,38.8,32.4,70.2,72.4,70.2h835.2c40,0,72.4-31.5,72.4-70.2V80.2C990,41.4,957.6,10,917.6,10z M307.1,830.3H159V387.9h148.1V830.3z M233.1,327.4h-1c-49.7,0-81.8-34-81.8-76.5c0-43.4,33.1-76.4,83.8-76.4c50.6,0,81.8,33,82.8,76.4C316.8,293.5,284.7,327.4,233.1,327.4z M840.9,830.3h-148V593.6c0-59.5-21.4-100.1-75-100.1c-41,0-65.3,27.4-75.9,53.8c-4,9.4-4.9,22.6-4.9,35.8v247.1H389c0,0,1.9-401,0-442.5h148v62.7c19.6-30.1,54.8-73.1,133.4-73.1c97.4,0,170.5,63.2,170.5,199.2V830.3L840.9,830.3z M536.1,452c0.3-0.4,0.6-0.9,1-1.4v1.4H536.1z" />
                            </g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                            <g></g>
                        </g>
                    </svg>
                </a>
                <a
                    href="https://github.com/SantosAlarcon"
                    target="_blank"
                    aria-label="GitHub"
		    title="Perfil de GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        id="social"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 20 20"
                        className="h-[36px] w-[36px] transition hover:scale-125"
                    >
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fill="currentColor"
                            fillRule="evenodd"
                        >
                            <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-140.000000, -7559.000000)"
                            >
                                <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                >
                                    <path
                                        d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"
                                        id="github-[#142]"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
            </div>
            <p className="text-center">
                @ {new Date().getFullYear()} <b>Santos Alarcón Asensio</b> -
                Todos los derechos reservados.
                <br />
                Hecho desde <b>La Mancha</b> y con el ❤️ al mundo.
            </p>
        </footer>
    );
};

export default Footer;
