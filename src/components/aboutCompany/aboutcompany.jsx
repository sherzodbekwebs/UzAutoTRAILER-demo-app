import {
    Factory, Truck, MapPin, ShieldCheck, Cpu, DraftingCompass, ChevronRight, Settings, Users, Award, Globe
} from 'lucide-react';

const AboutCompany = ({ lang, setCurrentPage }) => {
    const content = {
        ru: {
            breadcrumb: "Главная / О компании / Общая информация",
            title: "ООО «UzAuto TRAILER»",
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
                { title: "Zamonaviy uskunalar", desc: "Messer (Germaniya) plazmali kesish, Ermaksan (Turkiya) lazerlari, Fronius (Avstriya) payvandlash tizimlari.", icon: Cpu },
                { title: "Konstruktorlik byurosi", desc: "Modernizatsiya va loyihalash uchun yuqori malakali mutaxassislardan iborat o'z byuromiz.", icon: DraftingCompass }
            ]
        }
    };

    const t = content[lang];

    return (
        <section className="bg-white font-sans animate-in fade-in duration-500">
            {/* Breadcrumb Section */}
            <div className="bg-gray-50 py-4 border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6 lg:px-12">
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
                {/* Header Section */}
                <div className="mb-16">
                    <h1 className="text-4xl lg:text-5xl font-black text-[#002C5B] mb-6 tracking-tight">{t.title}</h1>
                    <div className="w-20 h-2 bg-orange-600 mb-10"></div>
                    <div className="grid lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-xl font-extrabold text-[#002C5B] uppercase mb-4">{t.generalTitle}</h2>
                            <p className="text-gray-600 leading-relaxed text-lg text-justify">{t.generalText}</p>
                        </div>
                        <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 h-fit">
                            <h2 className="text-sm font-black text-[#002C5B] uppercase mb-6 tracking-widest border-b pb-4">{t.factoryTitle}</h2>
                            <div className="space-y-4">
                                {t.factoryDetails.map((item, idx) => (
                                    <div key={idx} className="flex justify-between items-center">
                                        <span className="text-gray-500 text-sm font-medium">{item.label}</span>
                                        <span className="text-[#002C5B] font-bold">{item.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Locations Section (BOSILGANDA KONTAKTLARGA O'TADI) */}

                {/* Products Section */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-[#002C5B] uppercase mb-8 text-center">{t.productsTitle}</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {t.productCategories.map((cat, idx) => (
                            <div key={idx} className="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-600 flex items-start gap-4">
                                <Truck className="text-blue-600 shrink-0" size={24} />
                                <span className="text-[#002C5B] font-bold text-sm leading-snug">{cat}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quality Factors Grid */}
                <div className="mb-20">
                    <h2 className="text-2xl font-black text-[#002C5B] uppercase mb-10 border-l-8 border-orange-500 pl-6">{t.qualityTitle}</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {t.qualityFactors.map((factor, idx) => (
                            <div key={idx} className="flex gap-6 p-6 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                                <div className="w-14 h-14 bg-white shadow-md rounded-xl flex items-center justify-center shrink-0">
                                    <factor.icon className="text-orange-600" size={28} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-black text-[#002C5B] mb-2 uppercase">{idx + 1}. {factor.title}</h3>
                                    <p className="text-gray-500 text-sm leading-relaxed font-medium">{factor.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/* Locations Section */}
                 <div
                    onClick={() => setCurrentPage('contacts')}
                    className="grid lg:grid-cols-2 gap-12 bg-[#002C5B] rounded-3xl p-10 lg:p-16 text-white shadow-2xl cursor-pointer hover:bg-[#003875] transition-all group mb-20"
                >
                    <div>
                        <h2 className="text-3xl font-black uppercase mb-8">{t.locations.title}</h2>
                        <div className="space-y-6">
                            <div className="flex gap-4">
                                <MapPin className="text-orange-500 shrink-0" size={24} />
                                <p className="text-blue-100 text-sm leading-relaxed">{t.locations.factory}</p>
                            </div>
                            <div className="flex gap-4">
                                <MapPin className="text-orange-500 shrink-0" size={24} />
                                <p className="text-blue-100 text-sm leading-relaxed">{t.locations.office}</p>
                            </div>
                        </div>
                        <div className="mt-8 flex items-center gap-2 text-orange-400 font-bold uppercase text-xs">
                            {t.locations.btn} <ChevronRight size={16} />
                        </div>
                    </div>
                    <div className="hidden lg:flex items-center justify-center">
                        <Factory size={120} className="text-blue-800/50 opacity-50 group-hover:scale-110 transition-transform" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;