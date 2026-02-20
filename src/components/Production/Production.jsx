import React from 'react';
import { Settings, Truck, Container, ChevronRight } from 'lucide-react';
import configImg from '../../../src/assets/1.3.png';
import specialImg from '../../../src/assets/3.png';
import trailerImg from '../../../src/assets/3.4.png';

const Production = ({ lang, setCurrentPage }) => {
    const t = {
        ru: {
            title: "Наша продукция",
            subtitle: "Широкий спектр качественной техники для вашего бизнеса",
            goTo: "Перейти",
            cards: [
                {
                    id: 'configurator',
                    title: "Конфигуратор модели",
                    icon: Settings,
                    img: configImg,
                    imgClasses: "h-[180px] md:h-[200px] w-full",
                },
                {
                    id: 'special_tech',
                    title: "Спецавтотехника",
                    icon: Truck,
                    img: specialImg,
                    imgClasses: "h-[180px] md:h-[200px] w-full",
                },
                {
                    id: 'trailers',
                    title: "Прицепная техника",
                    icon: Container,
                    img: trailerImg,
                    imgClasses: "h-[180px] md:h-[200px] w-full",
                }
            ]
        },
        uz: {
            title: "Bizning mahsulotlar",
            subtitle: "Sizning biznesingiz uchun yuqori sifatli texnikalarning keng assortimenti",
            goTo: "O'tish",
            cards: [
                {
                    id: 'configurator',
                    title: "Model konfiguratori",
                    icon: Settings,
                    img: configImg,
                    imgClasses: "h-[180px] md:h-[200px] w-full",
                },
                {
                    id: 'special_tech',
                    title: "Maxsus avtotexnika",
                    icon: Truck,
                    img: specialImg,
                    imgClasses: "h-[180px] md:h-[200px] w-full",
                },
                {
                    id: 'trailers',
                    title: "Tirkama texnikasi",
                    icon: Container,
                    img: trailerImg,
                    imgClasses: "h-[180px] md:h-[200px] w-full",
                }
            ]
        }
    }[lang];

    return (
        <section className="bg-gray-50 py-8 md:py-16 px-4 sm:px-6 lg:px-12 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto">
                {/* Sarlavha qismi - Responsive fontlar */}
                <div className="text-center mb-8 md:mb-16">
                    <h1 className="text-2xl md:text-4xl lg:text-5xl font-black text-[#002C5B] uppercase mb-4 leading-tight">
                        {t.title}
                    </h1>
                    <div className="w-16 md:w-24 h-1.5 bg-orange-600 mx-auto mb-4"></div>
                    <p className="text-gray-500 text-sm md:text-lg font-medium max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>

                {/* Grid - Mobilda 1, planshetda 2, desktopda 3 ustun */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
                    {t.cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => setCurrentPage(card.id)}
                            className="bg-white flex flex-col group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* Rasm konteyneri */}
                            <div className={`overflow-hidden relative flex items-center justify-center bg-gray-50/50 ${card.imgClasses}`}>
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-[#002C5B]/5 group-hover:bg-transparent transition-colors"></div>
                                
                                {/* Ikonka - Mobilda kichikroq */}
                                <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-white p-2 md:p-3 rounded-xl shadow-lg text-[#002C5B]">
                                    <card.icon className="w-5 h-5 md:w-6 md:h-6" />
                                </div>
                            </div>

                            {/* Matn qismi */}
                            <div className="p-5 md:p-8 bg-white flex-1 flex flex-col justify-between">
                                <h3 className="text-lg md:text-xl font-black text-[#002C5B] uppercase mb-6 group-hover:text-orange-600 transition-colors leading-tight">
                                    {card.title}
                                </h3>
                                
                                <div className="flex items-center gap-2 text-[#002C5B] font-bold text-xs uppercase tracking-widest border-t pt-5 md:pt-6 group-hover:gap-4 transition-all mt-auto">
                                    {t.goTo} <ChevronRight size={16} className="text-orange-600" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Production;