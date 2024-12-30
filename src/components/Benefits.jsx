// src/components/Benefits.jsx

import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Importación de imágenes de beneficios
import InterestFreeImage from "../assets/images/interest-free.svg";
import CustomDesignImage from "../assets/images/custom-design.svg";
import ContinuousSupportImage from "../assets/images/continuous-support.svg";
import FastDeliveryImage from "../assets/images/fast-delivery.svg";
import ExtendedWarrantyImage from "../assets/images/extended-warranty.svg";
import PersonalizedConsultingImage from "../assets/images/personalized-consulting.svg";
import FreeUpdatesImage from "../assets/images/free-updates.svg";
import LoyaltyProgramsImage from "../assets/images/loyalty-programs.svg";

const Benefits = () => {
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

    const benefits = [
        {
            title: t("interestFree"),
            description: t("interestFreeDesc"),
            image: InterestFreeImage,
        },
        {
            title: t("customDesign"),
            description: t("customDesignDesc"),
            image: CustomDesignImage,
        },
        {
            title: t("continuousSupport"),
            description: t("continuousSupportDesc"),
            image: ContinuousSupportImage,
        },
        {
            title: t("fastDelivery"),
            description: t("fastDeliveryDesc"),
            image: FastDeliveryImage,
        },
        {
            title: t("extendedWarranty"),
            description: t("extendedWarrantyDesc"),
            image: ExtendedWarrantyImage,
        },
        {
            title: t("personalizedConsulting"),
            description: t("personalizedConsultingDesc"),
            image: PersonalizedConsultingImage,
        },
        {
            title: t("freeUpdates"),
            description: t("freeUpdatesDesc"),
            image: FreeUpdatesImage,
        },
        {
            title: t("loyaltyPrograms"),
            description: t("loyaltyProgramsDesc"),
            image: LoyaltyProgramsImage,
        },
    ];

    return (
        <section
            id="benefits"
            className="bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white py-20 transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#8a4af3] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-12">
                    {t("BenefitsTitle")}
                </h2>

                <p className="text-lg text-center text-gray-800 dark:text-white mb-12 px-4">
                    {t("BenefitsDescription")}
                </p>

                <Slider {...sliderSettings}>
                    {benefits.map((benefit, index) => (
                        <div key={index} className="px-4 pb-8 mt-8">
                            <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg p-6 text-left transition-transform duration-300 hover:scale-105">
                                <p className="text-md font-semibold text-[#007AFF] dark:text-[#FF9500] mb-2">
                                    {t("benefit")}
                                </p>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-800 dark:text-gray-100 mb-4">
                                    {benefit.description}
                                </p>
                                <img
                                    src={benefit.image}
                                    alt={benefit.title}
                                    className="w-full h-22 object-contain mx-auto"
                                />
                                {/* Texto con flecha */}
                                <p className="text-left text-[#007AFF] dark:text-[#FF9500] font-medium mt-4 cursor-pointer hover:underline hover:text-blue-700 dark:hover:text-orange-300 inline-flex items-center">
                                    
                                    {t("learnMore")}
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

export default Benefits;
