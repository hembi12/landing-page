import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importación de imágenes de servicios
import OnlineStoresImage from "../assets/images/online-stores.svg";
import FreelancersImage from "../assets/images/freelancers.svg";
import EntrepreneursImage from "../assets/images/entrepreneurs.svg";
import AppointmentsImage from "../assets/images/appointments.svg";
import HomeServicesImage from "../assets/images/home-services.svg";
import TourismImage from "../assets/images/tourism.svg";
import EntertainmentImage from "../assets/images/entertainment.svg";
import InfluencersImage from "../assets/images/influencer.svg";

const WebSolutions = () => {
    const { t } = useTranslation();

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: false,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 1 },
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 },
            },
        ],
    };

    const services = [
        {
            title: t("onlineStores"),
            description: t("onlineStoresDesc"),
            image: OnlineStoresImage,
        },
        {
            title: t("freelancers"),
            description: t("freelancersDesc"),
            image: FreelancersImage,
        },
        {
            title: t("newEntrepreneurs"),
            description: t("newEntrepreneursDesc"),
            image: EntrepreneursImage,
        },
        {
            title: t("appointmentsServices"),
            description: t("appointmentsServicesDesc"),
            image: AppointmentsImage,
        },
        {
            title: t("homeServices"),
            description: t("homeServicesDesc"),
            image: HomeServicesImage,
        },
        {
            title: t("tourismCompanies"),
            description: t("tourismCompaniesDesc"),
            image: TourismImage,
        },
        {
            title: t("entertainment"),
            description: t("entertainmentDesc"),
            image: EntertainmentImage,
        },
        {
            title: t("influencers"), // Nuevo título para influencers
            description: t("influencersDesc"), // Nueva descripción
            image: InfluencersImage, // Imagen recién agregada
        },
    ];

    return (
        <section
            id="websolutions"
            className="bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white py-20 transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#8a4af3] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-12">
                    {t("WebSolutionsTitle")}
                </h2>

                <p className="text-lg text-center text-gray-800 dark:text-white mb-12 px-4">
                    {t("WebSolutionsDescription")}
                </p>

                <Slider {...sliderSettings}>
                    {services.map((service, index) => (
                        <div key={index} className="px-4 pb-8 mt-8"> {/* Mantén el padding-bottom */}
                            <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg p-6 text-left transition-transform duration-300 hover:scale-105">
                                <p className="text-md font-semibold text-[#007AFF] dark:text-[#FF9500] mb-2">
                                    {t("customDesignedFor")}
                                </p>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                                    {service.title}
                                </h3>
                                <p className="text-gray-800 dark:text-gray-100 mb-4">
                                    {service.description}
                                </p>
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-25 object-contain mx-auto"
                                />
                                {/* Texto con flecha */}
                                <p className="text-left text-[#007AFF] dark:text-[#FF9500] font-medium mt-4 cursor-pointer hover:underline hover:text-blue-700 dark:hover:text-orange-300 inline-flex items-center">
                                    {t("makeItHappen")}
                                    <span className="ml-2 flex items-center justify-center">
                                        {/* SVG de flecha */}
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-5 w-5"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Personalización con estilos inline */}
                <style>
                    {`
        /* Color de los slick dots por defecto */
        .slick-dots li button:before {
            color: #60a5fa !important; /* Color claro */
            opacity: 0.5 !important;
        }
        .slick-dots li.slick-active button:before {
            color: #007AFF !important; /* Dot activo */
            opacity: 1 !important;
        }

        /* Ajuste de color en modo oscuro */
        .dark .slick-dots li button:before {
            color: #FF9500 !important; /* Color naranja para dark mode */
            opacity: 0.5 !important;
        }
        .dark .slick-dots li.slick-active button:before {
            color: #FF9500 !important; /* Color naranja activo en dark mode */
            opacity: 1 !important;
        }
    `}
                </style>
            </div>
        </section>
    );
};

export default WebSolutions;
