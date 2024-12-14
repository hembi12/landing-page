import React from "react";
import { useTranslation } from 'react-i18next';
import HeroImage from '../assets/images/Hero.svg'; // Importa la imagen

const Hero = () => {
    const { t } = useTranslation();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-gray-800 dark:text-gray-200 flex items-center justify-center relative transition-colors duration-500"
        >
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Columna izquierda con título y subtítulo */}
                <div className="text-center">
                    <h1 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold mb-4 leading-tight">
                        {t('heroTitle')}
                    </h1>
                    <p className="text-lg sm:text-xl text-gray-800 dark:text-white mb-6">
                        {t('heroSubtitle')}
                    </p>
                    <div className="flex justify-center items-center space-x-4">
                        <a
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("projects");
                            }}
                            className="bg-blue-600 text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-500 transition duration-300"
                        >
                            {t('viewProjects')}
                        </a>
                        <a
                            href="#contact"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection("contact");
                            }}
                            className="border border-blue-600 dark:border-white text-blue-600 dark:hover:border-blue-600 dark:text-white px-6 py-2 rounded-full font-bold shadow-lg hover:shadow-xl hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition duration-300"
                        >
                            {t('contactMe')}
                        </a>
                    </div>
                </div>

                {/* Columna derecha con la imagen */}
                <div className="flex justify-center md:justify-end">
                    <img
                        src={HeroImage}
                        alt="Hero Illustration"
                        className="w-full max-w-xs md:max-w-md"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
