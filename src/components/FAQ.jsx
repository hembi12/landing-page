// FAQ.jsx
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const FAQ = () => {
    const { t } = useTranslation();

    // Datos de preguntas y respuestas
    const faqs = [
        {
            question: t("faq1.question"),
            answer: t("faq1.answer"),
        },
        {
            question: t("faq2.question"),
            answer: t("faq2.answer"),
        },
        {
            question: t("faq3.question"),
            answer: t("faq3.answer"),
        },
        {
            question: t("faq4.question"),
            answer: t("faq4.answer"),
        },
        {
            question: t("faq5.question"),
            answer: t("faq5.answer"),
        },
    ];

    // Estado para controlar qué FAQ está abierto
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        if (openIndex === index) {
            setOpenIndex(null);
        } else {
            setOpenIndex(index);
        }
    };

    return (
        <section
            id="faq"
            className="py-20 bg-[#f5f4f7] dark:bg-gray-800 text-gray-800 dark:text-white transition-colors duration-500"
        >
            <div className="container mx-auto px-4">
                <h2 className="bg-gradient-to-r from-[#007AFF] via-[#AF52DE] to-[#FF9500] bg-clip-text text-transparent text-4xl sm:text-5xl font-bold text-center mb-8">
                    {t("faqTitle")}
                </h2>
                <p className="text-lg text-center text-gray-600 dark:text-gray-300 mb-12 px-4">
                    {t("faqDescription")}
                </p>
                <div className="max-w-2xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-600 dark:border-gray-400 rounded-lg"
                        >
                            <button
                                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
                                onClick={() => toggleFAQ(index)}
                                aria-expanded={openIndex === index}
                                aria-controls={`faq-answer-${index}`}
                            >
                                <span className="font-semibold text-lg">
                                    {faq.question}
                                </span>
                                {openIndex === index ? (
                                    <FaChevronUp className="text-blue-500 dark:text-orange-400" />
                                ) : (
                                    <FaChevronDown className="text-blue-500 dark:text-orange-400" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div
                                    id={`faq-answer-${index}`}
                                    className="px-6 py-4 bg-gray-50 dark:bg-gray-700"
                                >
                                    <p className="text-gray-700 dark:text-gray-200">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
