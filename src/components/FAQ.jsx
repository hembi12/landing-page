import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importación de imágenes representativas para cada duda
import OnlineStoresImage from "../assets/images/online-stores2.svg";
import FreelancersImage from "../assets/images/freelancers2.svg";
import EntrepreneursImage from "../assets/images/entrepreneurs2.svg";
import AppointmentsImage from "../assets/images/appointments2.svg";
import HomeServicesImage from "../assets/images/home-services2.svg";
import TourismImage from "../assets/images/tourism2.svg";
import EntertainmentImage from "../assets/images/entertainment2.svg";
import InfluencerImage from "../assets/images/influencer2.svg";

const FAQ = () => {
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

    const FAQDoubts = [
        {
            title: t("FAQDoubts.onlineStores.title"),
            description: t("FAQDoubts.onlineStores.description"),
            image: OnlineStoresImage,
            link: "/FAQ/online-stores",
        },
        {
            title: t("FAQDoubts.freelancers.title"),
            description: t("FAQDoubts.freelancers.description"),
            image: FreelancersImage,
            link: "/FAQ/freelancers",
        },
        {
            title: t("FAQDoubts.entrepreneurs.title"),
            description: t("FAQDoubts.entrepreneurs.description"),
            image: EntrepreneursImage,
            link: "/FAQ/entrepreneurs",
        },
        {
            title: t("FAQDoubts.appointments.title"),
            description: t("FAQDoubts.appointments.description"),
            image: AppointmentsImage,
            link: "/FAQ/appointments",
        },
        {
            title: t("FAQDoubts.homeServices.title"),
            description: t("FAQDoubts.homeServices.description"),
            image: HomeServicesImage,
            link: "/FAQ/home-services",
        },
        {
            title: t("FAQDoubts.tourism.title"),
            description: t("FAQDoubts.tourism.description"),
            image: TourismImage,
            link: "/FAQ/tourism",
        },
        {
            title: t("FAQDoubts.entertainment.title"),
            description: t("FAQDoubts.entertainment.description"),
            image: EntertainmentImage,
            link: "/FAQ/entertainment",
        },
        {
            title: t("FAQDoubts.influencer.title"),
            description: t("FAQDoubts.influencer.description"),
            image: InfluencerImage,
            link: "/FAQ/influencer",
        },
    ];

    return (
        <section
            id="FAQ"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-12">
                    {t("FAQTitle")}
                </h2>

                <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 px-4">
                    {t("FAQDescription")}
                </p>

                <Slider {...sliderSettings}>
                    {FAQDoubts.map((doubt, index) => (
                        <div key={index} className="px-4 pb-8 mt-8">
                            <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg p-6 text-left transition-transform duration-300 hover:scale-105">
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                                    {doubt.title}
                                </h3>
                                <p className="text-gray-800 dark:text-gray-100 mb-4">
                                    {doubt.description}
                                </p>
                                <img
                                    src={doubt.image}
                                    alt={doubt.title}
                                    className="w-full h-25 object-contain mx-auto mb-4"
                                />
                                {/* Enlace a la publicación del FAQ con efectos de hover y active */}
                                <a
                                    href={doubt.link}
                                    className="text-left text-[#007AFF] dark:text-[#FF9500] font-medium mt-4 cursor-pointer hover:underline hover:text-blue-700 dark:hover:text-orange-300 inline-flex items-center"
                                >
                                    {t("readMore")}
                                    <span className="ml-2">
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
                                </a>
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

export default FAQ;
