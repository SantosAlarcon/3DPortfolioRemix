const Footer = () => {
    return (
        <footer className="mx-auto flex max-sm:flex-col-reverse justify-center gap-5 bg-black-100 px-12 py-5 text-[18px] max-sm:text-[14px]">
            <p className="max-sm:text-center w-full">
                @ {new Date().getFullYear()} <b>Santos Alarcón Asensio</b> -
                Todos los derechos reservados. Hecho desde <b>La Mancha</b> y
                con el ❤ al mundo.
            </p>
            <div className="z-40 flex items-center justify-center gap-5">
                <a
                    href="mailto:santosalarcon86@gmail.com"
                    aria-label="Correo electrónico"
                    title="Correo electrónico"
                    className="h-[24px] w-[24px] transition hover:scale-125 text-secondary hover:text-white"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        alt="Gmail"
						role="presentation"
                    >
                        <path d="M30.996 7.824v17.381c0 0 0 0 0 0.001 0 1.129-0.915 2.044-2.044 2.044-0 0-0 0-0.001 0h-4.772v-11.587l-8.179 6.136-8.179-6.136v11.588h-4.772c0 0 0 0-0 0-1.129 0-2.044-0.915-2.044-2.044 0-0 0-0.001 0-0.001v0-17.381c0-0 0-0.001 0-0.001 0-1.694 1.373-3.067 3.067-3.067 0.694 0 1.334 0.231 1.848 0.619l-0.008-0.006 10.088 7.567 10.088-7.567c0.506-0.383 1.146-0.613 1.84-0.613 1.694 0 3.067 1.373 3.067 3.067v0z" />
                    </svg>
                </a>

                <a
                    href="https://www.linkedin.com/in/santos-alarcon-asensio"
                    target="_blank"
                    aria-label="LinkedIn"
                    title="Perfil de LinkedIn"
                    className="h-[24px] w-[24px] transition hover:scale-125 text-secondary hover:text-white"
                >
                    <svg
                        fill="currentColor"
                        xmlns="http://www.w4.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 1000 1000"
                        xmlSpace="preserve"
                        alt="LinkedIn"
						role="presentation"
                    >
                        <g>
                            <g>
                                <path d="M917.6,10H82.4C42.4,10,10,41.4,10,80.2v839.5c0,38.8,32.4,70.2,72.4,70.2h835.2c40,0,72.4-31.5,72.4-70.2V80.2C990,41.4,957.6,10,917.6,10z M307.1,830.3H159V387.9h148.1V830.3z M233.1,327.4h-1c-49.7,0-81.8-34-81.8-76.5c0-43.4,33.1-76.4,83.8-76.4c50.6,0,81.8,33,82.8,76.4C316.8,293.5,284.7,327.4,233.1,327.4z M840.9,830.3h-148V593.6c0-59.5-21.4-100.1-75-100.1c-41,0-65.3,27.4-75.9,53.8c-4,9.4-4.9,22.6-4.9,35.8v247.1H389c0,0,1.9-401,0-442.5h148v62.7c19.6-30.1,54.8-73.1,133.4-73.1c97.4,0,170.5,63.2,170.5,199.2V830.3L840.9,830.3z M536.1,452c0.3-0.4,0.6-0.9,1-1.4v1.4H536.1z" />
                            </g>
                        </g>
                    </svg>
                </a>
                <a
                    href="https://github.com/SantosAlarcon"
                    className="h-[24px] w-[24px] transition hover:scale-125 text-secondary hover:text-white"
                    target="_blank"
                    aria-label="GitHub"
                    title="Perfil de GitHub"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 20 20"
                        alt="GitHub"
						role="presentation"
                    >
                        <g
                            id="Page-1"
                            stroke="none"
                            strokeWidth="1"
                            fillRule="evenodd"
                        >
                            <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-140.000000, -7559.000000)"
                            >
                                <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                    fill="currentColor"
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
                <a
                    aria-label="Substack"
                    href="https://santosalarconasensio.substack.com"
                    title="Perfil de Substack"
                    className="h-[24px] w-[24px] transition hover:scale-125 text-secondary hover:text-white"
                    target="_blank"
                >
                    <svg
                        width="34"
                        height="38"
                        viewBox="0 0 54 58"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        alt="Substack"
						role="presentation"
                    >
                        <g clipPath="url(#clip0_5_2)">
                            <path
                                d="M33.5986 8.65H-3.57628e-07V13.1884H33.5986V8.65Z"
                                fill="currentColor"
                            />
                            <path
                                d="M-3.57628e-07 17.3V38.4006L16.7986 28.9771L33.6 38.4006V17.3H-3.57628e-07Z"
                                fill="currentColor"
                            />
                            <path
                                d="M33.5986 0H0V4.53765H33.5986V0Z"
                                fill="currentColor"
                            />
                        </g>
                        <defs>
                            <clipPath id="clip0_5_2">
                                <rect
                                    width="34"
                                    height="38"
                                    fill="currentColor"
                                />
                            </clipPath>
                        </defs>
                    </svg>
                </a>
                <a
                    aria-label="Codepen"
                    href="https://codepen.io/SantosAlarcon"
                    title="Perfil de Codepen"
                    className="h-[24px] w-[24px] transition hover:scale-125 text-secondary hover:text-white"
                    target="_blank"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="32"
                        height="32"
                        viewBox="0 0 80 80"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        alt="Codepen"
						role="presentation"
                    >
                        <path
                            d="M3.06 41.732L32 60.932l28.94-19.2V22.268L32 3.068l-28.94 19.2zm57.878 0L32 22.268 3.06 41.732m0-19.463L32 41.47l28.94-19.2M32 3.068v19.2m0 19.463v19.2"
                            strokeWidth="6.05"
                        />
                    </svg>
                </a>
                <a
                    aria-label="YouTube"
                    href="https://www.youtube.com/@santosalarcondev"
                    title="Perfil de YouTube"
                    className="h-[36px] w-[36px] transition hover:scale-125 text-secondary hover:text-white"
                    target="_blank"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        viewBox="0 -3 20 20"
                        version="1.1"
                        alt="YouTube"
						role="presentation"
                    >
                        <g
                            id="Page-1"
                            stroke="none"
                            stroke-width="1"
                            fill="none"
                            fillRule="evenodd"
                        >
                            <g
                                id="Dribbble-Light-Preview"
                                transform="translate(-300.000000, -7442.000000)"
                                fill="currentColor"
                            >
                                <g
                                    id="icons"
                                    transform="translate(56.000000, 160.000000)"
                                >
                                    <path
                                        d="M251.988432,7291.58588 L251.988432,7285.97425 C253.980638,7286.91168 255.523602,7287.8172 257.348463,7288.79353 C255.843351,7289.62824 253.980638,7290.56468 251.988432,7291.58588 M263.090998,7283.18289 C262.747343,7282.73013 262.161634,7282.37809 261.538073,7282.26141 C259.705243,7281.91336 248.270974,7281.91237 246.439141,7282.26141 C245.939097,7282.35515 245.493839,7282.58153 245.111335,7282.93357 C243.49964,7284.42947 244.004664,7292.45151 244.393145,7293.75096 C244.556505,7294.31342 244.767679,7294.71931 245.033639,7294.98558 C245.376298,7295.33761 245.845463,7295.57995 246.384355,7295.68865 C247.893451,7296.0008 255.668037,7296.17532 261.506198,7295.73552 C262.044094,7295.64178 262.520231,7295.39147 262.895762,7295.02447 C264.385932,7293.53455 264.28433,7285.06174 263.090998,7283.18289"
                                        id="youtube-[#168]"
                                    ></path>
                                </g>
                            </g>
                        </g>
                    </svg>{" "}
                </a>
            </div>
        </footer>
    );
};

export default Footer;
