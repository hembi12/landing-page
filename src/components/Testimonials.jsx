import React from "react";
import { useTranslation } from "react-i18next";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaRegThumbsUp, FaRegThumbsDown, FaFlag } from "react-icons/fa";

const Testimonials = () => {
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

    // Función para representar las estrellas con color
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(<span key={`full-${i}`} className="text-yellow-500">★</span>);
        }

        if (halfStar) {
            stars.push(<span key="half" className="text-yellow-500">½</span>);
        }

        return stars;
    };

    // Función para formatear la fecha a "día de mes de año"
    const formatDate = (dateString) => {
        const options = { day: 'numeric', month: 'long', year: 'numeric' };
        const date = new Date(dateString);
        return date.toLocaleDateString('es-ES', options);
    };

    const testimonials = [
        {
            name: "María González",
            highlight: t("testimonial1Highlight"), 
            feedback: t("testimonial1"), 
            company: "Tienda Online XYZ",
            rating: 5,
            date: "2024-12-12",
        },
        {
            name: "Carlos Ramírez",
            highlight: t("testimonial2Highlight"),
            feedback: t("testimonial2"),
            company: "Diseñador Freelance",
            rating: 4.5,
            date: "2024-12-10",
        },
        {
            name: "Laura Martínez",
            highlight: t("testimonial3Highlight"),
            feedback: t("testimonial3"),
            company: "Emprendimiento Creativo LM",
            rating: 5,
            date: "2024-12-09",
        },
        {
            name: "Pedro López",
            highlight: t("testimonial4Highlight"),
            feedback: t("testimonial4"),
            company: "Consultas Médicas López",
            rating: 4.5,
            date: "2024-12-07",
        },
        {
            name: "Ana Torres",
            highlight: t("testimonial5Highlight"),
            feedback: t("testimonial5"),
            company: "Servicio de Limpieza Torres",
            rating: 4.5,
            date: "2024-12-05",
        },
        {
            name: "Jorge Castillo",
            highlight: t("testimonial6Highlight"),
            feedback: t("testimonial6"),
            company: "Agencia de Viajes Castillo",
            rating: 5,
            date: "2024-12-03",
        },
        {
            name: "Elena Suárez",
            highlight: t("testimonial7Highlight"),
            feedback: t("testimonial7"),
            company: "Eventos Suárez",
            rating: 4.5,
            date: "2024-12-02",
        },
        {
            name: "Roberto Fernández",
            highlight: t("testimonial8Highlight"),
            feedback: t("testimonial8"),
            company: "Influencer de Moda R.F.",
            rating: 5,
            date: "2024-12-01",
        }
    ];

    return (
        <section
            id="testimonials"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-black dark:text-white transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#8a4af3] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-12">
                    {t("testimonialsTitle")}
                </h2>

                <p className="text-lg text-center text-black dark:text-white mb-12 px-4">
                    {t("testimonialsDescription")}
                </p>

                <Slider {...sliderSettings}>
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="px-4 pb-8 mt-8">
                            <div className="bg-gray-200 dark:bg-gray-600 rounded-lg shadow-lg p-6 text-left transition-transform duration-300 hover:scale-105">
                                {/* Nombre de la persona */}
                                <p className="text-md font-bold text-[#007AFF] dark:text-[#FF9500] mb-2">
                                    {testimonial.name}
                                </p>
                                {/* Título corto (highlight) */}
                                <h3 className="text-xl font-semibold mb-2 text-dark dark:text-white">
                                    {testimonial.highlight}
                                </h3>
                                {/* Calificación debajo del highlight */}
                                <p className="text-black dark:text-gray-200 mb-2">
                                    {renderStars(testimonial.rating)} ({testimonial.rating.toFixed(1)})
                                </p>
                                {/* Descripción completa (feedback) */}
                                <p className="text-gray-700 dark:text-gray-100 mb-4 italic">
                                    "{testimonial.feedback}"
                                </p>
                                {/* Nombre de la compañía en semi-bold */}
                                <p className="text-gray-900 dark:text-white font-semibold mb-2">
                                    {testimonial.company}
                                </p>
                                {/* Fecha */}
                                <p className="text-gray-700 dark:text-gray-300 text-sm mb-2">
                                    {formatDate(testimonial.date)}
                                </p>
                                {/* Thumbs up/down y Reportar */}
                                <div className="flex items-center space-x-4">
                                    {/* Pulgar hacia arriba */}
                                    <FaRegThumbsUp className="text-[#007AFF] dark:text-[#FF9500] hover:text-blue-700 dark:hover:text-orange-300 cursor-pointer" title={t("useful", "Útil")} />
                                    {/* Pulgar hacia abajo */}
                                    <FaRegThumbsDown className="text-[#007AFF] dark:text-[#FF9500] hover:text-blue-700 dark:hover:text-orange-300 cursor-pointer" title={t("notUseful", "No es útil")} />
                                    {/* Botón de Reportar */}
                                    <button className="flex items-center text-[#007AFF] dark:text-[#FF9500] hover:underline hover:text-blue-700 dark:hover:text-orange-300">
                                        <FaFlag className="mr-1" />
                                        {t("report", "Reportar")}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>

                <style>
                    {`
        /* Color de los slick dots por defecto */
        .slick-dots li button:before {
            color: #60a5fa !important; 
            opacity: 0.5 !important;
        }
        .slick-dots li.slick-active button:before {
            color: #007AFF !important; 
            opacity: 1 !important;
        }

        /* Ajuste de color en modo oscuro */
        .dark .slick-dots li button:before {
            color: #FF9500 !important; 
            opacity: 0.5 !important;
        }
        .dark .slick-dots li.slick-active button:before {
            color: #FF9500 !important; 
            opacity: 1 !important;
        }
    `}
                </style>
            </div>
        </section>
    );
};

export default Testimonials;
