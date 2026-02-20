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
                    // HAR BIR RASM UCHUN ALOHIDA O'LCHAM KLASSLARI
                    imgClasses: "h-[200px] w-full",
                },
                {
                    id: 'special_tech',
                    title: "Спецавтотехника",
                    icon: Truck,
                    img: specialImg,
                    imgClasses: "h-[200px] w-full", // Masalan, buni biroz kichikroq qildik
                },
                {
                    id: 'trailers',
                    title: "Прицепная техника",
                    icon: Container,
                    img: trailerImg,
                    imgClasses: "h-[200px] w-full", // Bu esa eng uzuni
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
                    imgClasses: "h-[200px] w-full",
                },
                {
                    id: 'special_tech',
                    title: "Maxsus avtotexnika",
                    icon: Truck,
                    img: specialImg,
                    imgClasses: "h-[200px] w-full",
                },
                {
                    id: 'trailers',
                    title: "Tirkama texnikasi",
                    icon: Container,
                    img: trailerImg,
                    imgClasses: "h-[200px] w-full",
                }
            ]
        }
    }[lang];

    return (
        <section className="bg-gray-50 py-9 px-6 lg:px-12 animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10">
                    <h1 className="text-4xl font-black text-[#002C5B] uppercase mb-4">{t.title}</h1>
                    <div className="w-20 h-1.5 bg-orange-600 mx-auto mb-2"></div>
                    <p className="text-gray-500 font-medium">{t.subtitle}</p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 items-end"> {/* items-end kartalarni pastdan tekislaydi */}
                    {t.cards.map((card) => (
                        <div
                            key={card.id}
                            onClick={() => setCurrentPage(card.id)}
                            className="bg-white h-full group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100"
                        >
                            {/* DIV KONTEYNERGA DINAMIK KLASS BERAMIZ */}
                            <div className={`overflow-hidden relative flex items-center justify-center ${card.imgClasses}`}>
                                <img
                                    src={card.img}
                                    alt={card.title}
                                    className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-700"
                                // object-contain rasmni kesib yubormasdan sig'diradi
                                />
                                <div className="absolute inset-0 bg-[#002C5B]/5 group-hover:bg-transparent transition-colors"></div>
                                <div className="absolute top-4 left-4 bg-white p-3 rounded-xl shadow-lg text-[#002C5B]">
                                    <card.icon size={24} />
                                </div>
                            </div>

                            <div className="p-6 bg-white relative z-10">
                                <h3 className="text-xl font-black text-[#002C5B] uppercase mb-4 group-hover:text-orange-600 transition-colors">
                                    {card.title}
                                </h3>
                                <div className="flex items-center gap-2 text-[#002C5B] font-bold text-xs uppercase tracking-widest border-t pt-6 group-hover:gap-4 transition-all">
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