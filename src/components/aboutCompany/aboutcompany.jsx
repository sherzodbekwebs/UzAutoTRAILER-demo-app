import { useState, useEffect } from 'react';
import {
    Factory, Truck, MapPin, ShieldCheck, Cpu, DraftingCompass, ChevronRight, Settings, Users, Award, Globe
} from 'lucide-react';
import bg1 from '../../assets/bg1.png';
import bg2 from '../../assets/bg2.png';
import bg3 from '../../assets/bg3.png';

const AboutCompany = ({ lang, setCurrentPage }) => {
    // --- Slider uchun rasmlar (O'zingizni rasmlaringizga almashtirishingiz mumkin) ---
    const sliderImages = [
        bg1,
        bg2,
        bg3
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
        }, 5000); // Har 5 soniyada almashadi
        return () => clearInterval(interval);
    }, [sliderImages.length]);

    const content = {
        ru: {
            heroTitle1: "Лучшее",
            heroTitle2: "Вождение.",
            heroTitle3: "Лучшая ",
            heroTitle4: "Жизнь.",
            heroSubtitle: "Откройте мир инноваций и комфорта. UzAuto TRAILER предлагает надежную технику, созданную для вашего успеха.",
            heroBtn: "Выбрать технику",
            breadcrumb: "Главная / О компании / Общая информация",
            title: "«UzAuto TRAILER»",
            generalTitle: "Общая информация",
            generalText: "4 июня 2012 году Акционерной компанией «Узавтосаноат» учреждено предприятие «UzAuto TRAILER» по выпуску прицепной техники и различных видов надстроек на грузовые шасси. Проектная мощность завода рассчитана на 3000 единиц: 2000 единиц – полуприцепов и 1000 единиц – надстроек на грузовые шасси. Предприятие нацелено на рынок Узбекистана и стран Центральной Азии: Казахстан, Азербайджан, Афганистан, Туркменистан и Кыргызстан.",
            factoryTitle: "Завод в цифрах",
            factoryDetails: [
                { label: "Общая площадь", value: "14,75 га" },
                { label: "Производственная площадь", value: "2,7 ga" },
                { label: "Персонал", value: "470 человек" },
                { label: "Мощность", value: "3000 ед./год" }
            ],
            locations: {
                title: "Наше местонахождение",
                factory: "Завод: Самаркандская область, Жамбайский район, ул. Ташкентская, д. 1",
                office: "Головной офис: Ташкент, ул. Мирзо-Улугбек, д. 30",
                btn: "Посмотреть на карте"
            },
            productsTitle: "Производимая продукция",
            productCategories: [
                "Кузова: самосвальные, изотермические, тентовые",
                "Полуприцепы и прицепы различного типа",
                "Контейнеровозы и спецтехника",
                "Сельскохозяйственная техника"
            ],
            qualityTitle: "Факторы высокого качества",
            qualityFactors: [
                { title: "Менеджмент качества", desc: "Сертификат ISO 9001:2015, строгий входной контроль материалов и качества сварных швов.", icon: ShieldCheck },
                { title: "Мировые комплектующие", desc: "Использование осей SAF-Holland, тормозных систем Wabco, сталей Hardox и шин Michelin.", icon: Settings },
                { title: "Современное оборудование", desc: "Плазменная резка Messer (Германия), лазеры Ermaksan (Турция), сварка Fronius (Австрия).", icon: Cpu },
                { title: "Конструкторское бюро", desc: "Собственное бюро из высококвалифицированных специалистов для модернизации и проектирования.", icon: DraftingCompass }
            ]
        },
        uz: {
            heroTitle1: "Yaxshiroq ",
            heroTitle2: "Haydash.",
            heroTitle3: "Yaxshiroq ",
            heroTitle4: "Hayot.",
            heroSubtitle: "Innovatsiyalar va qulaylik dunyosini kashf eting. UzAuto TRAILER muvaffaqiyatingiz uchun yaratilgan ishonchli texnikalarni taklif etadi.",
            heroBtn: "Texnika tanlash",
            breadcrumb: "Bosh sahifa / Kompaniya haqida / Umumiy ma'lumot",
            title: "«UzAuto TRAILER» MCHJ",
            generalTitle: "Umumiy ma'lumot",
            generalText: "2012-yil 4-iyunda «O'zavtosanoat» aksiyadorlik kompaniyasi tomonidan tirkama texnikasi va yuk shassilariga turli xil ustqurmalar ishlab chiqarish bo'yicha «UzAuto TRAILER» korxonasi tashkil etildi. Zavodning loyihaviy quvvati 3000 dona: 2000 dona yarim tirkama va 1000 dona yuk shassilari uchun ustqurmalarga mo'ljallangan. Korxona O'zbekiston va Markaziy Osiyo mamlakatlari (Qozog'iston, Ozarbayjon, Afg'oniston, Turkmaniston va Qirg'iziston) bozorlariga yo'naltirilgan.",
            factoryTitle: "Zavod raqamlarda",
            factoryDetails: [
                { label: "Umumiy maydon", value: "14,75 ga" },
                { label: "Ishlab chiqarish maydoni", value: "2,7 ga" },
                { label: "Xodimlar soni", value: "470 kishi" },
                { label: "Quvvati", value: "3000 dona/yil" }
            ],
            locations: {
                title: "Bizning manzilimiz",
                factory: "Zavod: Samarqand viloyati, Jomboy tumani, Toshkent ko'chasi, 1-uy",
                office: "Bosh ofis: Toshkent sh., Mirzo Ulug'bek ko'chasi, 30-uy",
                btn: "Xaritada ko'rish"
            },
            productsTitle: "Ishlab chiqarilayotgan mahsulotlar",
            productCategories: [
                "Kuzovlar: samosval, izotermik, tentli",
                "Turli turdagi yarim tirkamalar va tirkamalar",
                "Konteyner tashuvchilar va maxsus texnika",
                "Qishloq xo'jaligi texnikasi"
            ],
            qualityTitle: "Yuqori sifat omillari",
            qualityFactors: [
                { title: "Sifat menejmenti", desc: "ISO 9001:2015 sertifikati, materiallar va payvandlash choklarining qat'iy nazorati.", icon: ShieldCheck },
                { title: "Jahon brendlari butlovchi qismlari", desc: "SAF-Holland o'qlari, Wabco tormoz tizimlari, Hardox po'lati va Michelin shinalari.", icon: Settings },
                { title: "Zamonaviy uskunalar", desc: "Messer (Germaniya) plazmali kesish, Ermaksan (Turya) lazerlari, Fronius (Avstriya) payvandlash tizimlari.", icon: Cpu },
                { title: "Konstruktorlik byurosi", desc: "Modernizatsiya va loyihalash uchun yuqori malakali mutaxassislardan iborat o'z byuromiz.", icon: DraftingCompass }
            ]
        }
    };

    const t = content[lang];

    return (
        <section className="bg-white font-sans animate-in fade-in duration-500 overflow-x-hidden">

            {/* --- NEW HERO SLIDER SECTION (JAC MOTORS STYLE) --- */}
            <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden">
                {/* Background Images with Fade effect */}
                {sliderImages.map((img, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                        style={{
                            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.95) 20%, rgba(255,255,255,0.1) 80%), url(${img})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center'
                        }}
                    />
                ))}

                {/* Text Content */}
                <div className="relative z-10 max-w-7xl mx-auto h-full flex flex-col justify-center px-4 md:px-12">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-7xl font-black leading-tight mb-4">
                            <span className="text-[#FF3B30]">{t.heroTitle1} </span>
                            <span className="text-[#002C5B]">{t.heroTitle2}</span>
                            <br />
                            <span className="text-[#FF3B30]">{t.heroTitle3} </span>
                            <span className="text-[#002C5B]">{t.heroTitle4}</span>
                        </h1>
                        <p className="text-gray-600 text-lg md:text-xl font-medium mb-10 max-w-lg">
                            {t.heroSubtitle}
                        </p>
                        <button
                            onClick={() => setCurrentPage('catalog')}
                            className="bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold py-4 px-10 rounded-full flex items-center gap-3 shadow-xl hover:scale-105 transition-transform"
                        >
                            {t.heroBtn} <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Slider Indicators (Dots) */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3 z-20">
                    {sliderImages.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === currentSlide ? 'w-12 bg-red-600' : 'w-6 bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>

            {/* Breadcrumb Section - Mobilda kichikroq padding */}
            <div className="bg-gray-50 py-3 md:py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 md:px-12">
                    <span className="text-[9px] md:text-[11px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-12 py-8 md:py-16">
                {/* Header Section */}
                <div className="mb-10 md:mb-16">
                    <h1 className="text-2xl md:text-5xl font-black text-[#002C5B] uppercase mb-4 md:mb-6 tracking-tight leading-tight">
                        {t.title}
                    </h1>
                    <div className="w-16 md:w-20 h-1.5 md:h-2 bg-orange-600 mb-8 md:mb-10"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-lg md:text-xl font-extrabold text-[#002C5B] uppercase mb-4">{t.generalTitle}</h2>
                            <p className="text-gray-600 leading-relaxed text-base md:text-lg text-justify">{t.generalText}</p>
                        </div>
                        <div className="bg-gray-50 p-6 md:p-8 rounded-2xl border border-gray-100 h-fit shadow-sm">
                            <h2 className="text-xs md:text-sm font-black text-[#002C5B] uppercase mb-4 md:mb-6 tracking-widest border-b pb-4">{t.factoryTitle}</h2>
                            <div className="space-y-3 md:space-y-4">
                                {t.factoryDetails.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center text-sm md:text-base">
                                        <span className="text-gray-500 font-medium">{item.label}</span>
                                        <span className="text-[#002C5B] font-bold">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Products Section */}
                <div className="mb-12 md:mb-20">
                    <h2 className="text-xl md:text-2xl font-black text-[#002C5B] uppercase mb-6 md:mb-8 text-center">{t.productsTitle}</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {t.productCategories.map((cat, idx) => (
                            <div key={idx} className="bg-blue-50 p-4 md:p-6 rounded-xl border-l-4 border-blue-600 flex items-center gap-3 md:gap-4 shadow-sm">
                                <Truck className="text-blue-600 shrink-0" size={20} md:size={24} />
                                <span className="text-[#002C5B] font-bold text-xs md:text-sm leading-snug">{cat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quality Factors Grid */}
                <div className="mb-12 md:mb-20">
                    <h2 className="text-xl md:text-2xl font-black text-[#002C5B] uppercase mb-6 md:mb-10 border-l-4 md:border-l-8 border-orange-500 pl-4 md:pl-6">
                        {t.qualityTitle}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                        {t.qualityFactors.map((factor, idx) => (
                            <div key={idx} className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-2xl bg-white border border-gray-100 hover:shadow-md transition-all">
                                <div className="w-10 h-10 md:w-14 md:h-14 bg-gray-50 rounded-xl flex items-center justify-center shrink-0">
                                    <factor.icon className="text-orange-600" size={20} md:size={28} />
                                </div>
                                <div>
                                    <h3 className="text-sm md:text-lg font-black text-[#002C5B] mb-1 md:mb-2 uppercase">{idx + 1}. {factor.title}</h3>
                                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed font-medium">{factor.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Locations Section - BOSILGANDA KONTAKTLARGA O'TADI */}
                <div
                    onClick={() => setCurrentPage('contacts')}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-[#002C5B] rounded-2xl md:rounded-3xl p-6 md:p-12 lg:p-16 text-white shadow-2xl cursor-pointer hover:bg-[#003875] transition-all group mb-10 md:mb-20"
                >
                    <div className="max-w-full overflow-hidden">
                        <h2 className="text-xl md:text-3xl font-black uppercase mb-6 md:mb-8 leading-tight">
                            {t.locations.title}
                        </h2>
                        <div className="space-y-4 md:space-y-6">
                            <div className="flex gap-3 md:gap-4 items-start">
                                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} md:size={24} />
                                <p className="text-blue-100 text-xs md:text-sm leading-relaxed">{t.locations.factory}</p>
                            </div>
                            <div className="flex gap-3 md:gap-4 items-start">
                                <MapPin className="text-orange-500 shrink-0 mt-1" size={18} md:size={24} />
                                <p className="text-blue-100 text-xs md:text-sm leading-relaxed">{t.locations.office}</p>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-10 flex items-center gap-2 text-orange-400 font-bold uppercase text-[10px] md:text-xs">
                            {t.locations.btn} <ChevronRight size={14} md:size={16} />
                        </div>
                    </div>
                    {/* Zavod ikonkasi faqat katta ekranlarda ko'rinadi */}
                    <div className="hidden lg:flex items-center justify-center">
                        <Factory size={120} className="text-blue-800/50 opacity-50 group-hover:scale-110 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;