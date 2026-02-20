import React, { useState } from 'react';
import { ArrowLeft, ChevronDown, ChevronUp, ChevronRight, Truck, Info, Check, ShieldCheck, Banknote, Activity } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

const TruckDetail = ({ lang, truckId, setCurrentPage }) => {
    const truck = TRUCKS_DATA.find(t => t.id === truckId);
    const isTrailer = truck?.category === "5";

    const [openSections, setOpenSections] = useState({
        specs: true,
        engine: true,
        service: true,
        finance: true,
        analysis: true
    });

    if (!truck) return <div className="py-20 text-center font-black uppercase">MASHINA TOPILMADI</div>;

    const toggleSection = (section) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
    };

    const t = {
        ru: {
            home: "ГЛАВНАЯ",
            prod: "ПРОДУКЦИЯ",
            title: "ТЕХНИЧЕСКИЕ ХАРАКТЕРИСТИКИ",
            back: "Назад",
            sec1: isTrailer ? "ПАРАМЕТРЫ И НАГРУЗКИ" : "ВЕСОВЫЕ ПАРАМЕТРЫ И НАГРУЗКИ",
            sec2: "ДВИГАТЕЛЬ И СИСТЕМА ПИТАНИЯ",
            sec3: "СЕРВИС И ЗАПАСНЫЕ ЧАСТИ",
            sec4: "ФИНАНСИРОВАНИЕ",
            sec5: "ЭКСПЛУАТАЦИЯ И АНАЛИЗ",
            labels: {
                formula: isTrailer ? "Количество осей" : "Колесная формула",
                load: isTrailer ? "Грузоподъемность (тн)" : "Грузоподъемность / Нагрузка",
                volume: "Объём (м³)",
                price: "Цена (с НДС)",
                costPerYear: "Стоимость владения в год",
                weakness: "Слабые стороны",
                proposals: "Предложения"
            }
        },
        uz: {
            home: "BOSH SAHIFA",
            prod: "MAHSULOTLAR",
            title: "TEXNIK XUSUSIYATLARI",
            back: "Orqaga",
            sec1: isTrailer ? "PARAMETRLAR VA YUKLAMA" : "VAZN PARAMETRLARI VA YUKLAMA",
            sec2: "DVIGATEL VA YOQILG'I TIZIMI",
            sec3: "SERVIS VA EHTIYOT QISMLAR",
            sec4: "MOLIYALASHTIRISH",
            sec5: "FOYDALANISH VA TAHLIL",
            labels: {
                formula: isTrailer ? "O'qlar soni" : "G'ildirak formulasi",
                load: isTrailer ? "Yuk ko'tarish (tn)" : "Yuk ko'tarish / Yuklama",
                volume: "Hajmi (m³)",
                price: "Narxi (QQS bilan)",
                costPerYear: "Yillik egalik qiymati",
                weakness: "Kamchiliklar",
                proposals: "Takliflar"
            }
        }
    }[lang];

    const Row = ({ label, value, isEven }) => (
        <div className={`grid grid-cols-2 border-b border-gray-100 ${isEven ? 'bg-[#f4f7f9]/50' : 'bg-white'}`}>
            <div className="p-4 text-[13px] text-gray-500 font-medium border-r border-gray-100">{label}</div>
            <div className="p-4 text-[13px] font-bold text-[#1d1d1b]">{value && value !== 'x' ? value : '—'}</div>
        </div>
    );

    // --- MANA SHU KOMPONENT SILLIQ OCHILISHNI TA'MINLAYDI ---
    const AccordionSection = ({ title, isOpen, onClick, children }) => (
        <div className="border border-gray-200 shadow-sm bg-white mb-4">
            {/* Header */}
            <div 
                onClick={onClick} 
                className="flex justify-between items-center bg-[#dee3e9] p-4 px-6 cursor-pointer hover:bg-[#d1d8e0] transition-colors"
            >
                <h3 className="text-[13px] font-black text-[#004999] uppercase tracking-wide">{title}</h3>
                <div className={`transition-transform duration-1000 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown size={18} className="text-[#004999]" />
                </div>
            </div>

            {/* Silliq ochilish mantiqi (Pure CSS Grid Transition) */}
            <div 
                className={`grid transition-all duration-1000 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                style={{ transitionDuration: '1000ms' }} // 1 soniya - juda sekin
            >
                <div className="overflow-hidden">
                    <div className="p-1">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-white min-h-screen font-sans pb-20 select-none text-[#1d1d1b]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
                
                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
                    <span className="hover:text-blue-700 cursor-pointer" onClick={() => setCurrentPage('about')}>{t.home}</span>
                    <span>{">"}</span>
                    <span className="hover:text-blue-700 cursor-pointer" onClick={() => setCurrentPage('production')}>{t.prod}</span>
                    <span>{">"}</span>
                    <span className="text-gray-600">{truck.name}</span>
                </div>

                {/* Hero Section */}
                <div className="mb-12">
                    <div className="flex justify-between items-start mb-8 gap-4">
                        <h1 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-[#1d1d1b] leading-tight">{truck.name}</h1>
                        <button onClick={() => setCurrentPage('configurator')} className="flex-shrink-0 flex items-center gap-2 bg-[#002C5B] text-white px-6 py-2.5 rounded-full text-[11px] font-bold uppercase hover:bg-orange-600 transition-all shadow-lg cursor-pointer">
                            <ArrowLeft size={16} /> {t.back}
                        </button>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-start">
                        <div className="lg:col-span-8 h-[350px] md:h-[450px] bg-[#f8f9fb] rounded-xl flex items-center justify-center border border-gray-100 overflow-hidden">
                             <img src={truck.img} alt={truck.name} className="max-h-full max-w-full object-contain p-6" />
                        </div>

                        <div className="lg:col-span-4 space-y-4">
                            <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm">
                                <p className="text-[10px] text-gray-400 font-bold uppercase mb-2 tracking-[0.2em]">{t.labels.price}</p>
                                <p className="text-3xl font-black text-[#e67e22]">{truck.price && truck.price !== 'x' ? truck.price : '—'}</p>
                            </div>
                            <div className="bg-[#004999] p-5 text-white flex justify-between items-center cursor-pointer hover:bg-blue-800 transition-all shadow-lg rounded-sm active:scale-[0.98]">
                                <span className="font-black text-[11px] uppercase tracking-widest">Запросить предложение</span>
                                <ChevronRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>

                <h2 className="text-2xl font-black mb-10 border-b-2 border-gray-100 pb-4 uppercase tracking-tighter text-[#002C5B]">{t.title}</h2>

                {/* Akordeon Jadvallar */}
                <div className="space-y-4">
                    
                    <AccordionSection title={t.sec1} isOpen={openSections.specs} onClick={() => toggleSection('specs')}>
                        <Row label={t.labels.formula} value={truck.formula} isEven={false} />
                        <Row label={t.labels.load} value={truck.load} isEven={true} />
                        {truck.Объём && <Row label={t.labels.volume} value={truck.Объём} isEven={false} />}
                        <Row label={t.labels.costPerYear} value={truck.Стоимость_владения_в_год} isEven={true} />
                        <Row label={t.labels.price} value={truck.price} isEven={false} />
                    </AccordionSection>

                    {!isTrailer && (
                        <AccordionSection title={t.sec2} isOpen={openSections.engine} onClick={() => toggleSection('engine')}>
                            <Row label="Модель двигателя" value={truck.engine} isEven={false} />
                            <Row label="Мощность" value={truck.power} isEven={true} />
                            <Row label="Топливо" value={truck.fuel} isEven={false} />
                            <Row label="Бак" value={truck.tank} isEven={true} />
                        </AccordionSection>
                    )}

                    <AccordionSection title={t.sec3} isOpen={openSections.service} onClick={() => toggleSection('service')}>
                        <div className="p-8 bg-white space-y-4 text-[13px] leading-relaxed text-gray-600 font-medium italic">
                            <div className="flex gap-4 items-start">
                                <ShieldCheck className="text-blue-600 shrink-0" size={20} />
                                <p>{truck.Наличие_фирменного_сервиса && truck.Наличие_фирменного_сервиса !== 'x' ? truck.Наличие_фирменного_сервиса : '—'}</p>
                            </div>
                            <div className="flex gap-4 items-start border-t pt-6 border-gray-100">
                                <Truck className="text-orange-500 shrink-0" size={20} />
                                <p>{truck.Доступность_ЗЧ && truck.Доступность_ЗЧ !== 'x' ? truck.Доступность_ЗЧ : '—'}</p>
                            </div>
                        </div>
                    </AccordionSection>

                    <AccordionSection title={t.sec5} isOpen={openSections.analysis} onClick={() => toggleSection('analysis')}>
                        <div className="p-8 bg-white space-y-10">
                            <div>
                                <h4 className="text-[#004999] font-black text-[11px] uppercase flex items-center gap-2 mb-4 tracking-wider">
                                    <Activity size={16} /> ОСОБЕННОСТИ ЭКСПЛУАТАЦИИ
                                </h4>
                                <p className="text-[14px] text-gray-600 leading-loose text-justify italic bg-blue-50/30 p-6 rounded-2xl border border-blue-100">
                                    {truck.Эксплуатационные_свойтва && truck.Эксплуатационные_свойтва !== 'x' ? truck.Эксплуатационные_свойтва : '—'}
                                </p>
                            </div>
                            <div className="grid md:grid-cols-2 gap-10">
                                <div className="space-y-4">
                                    <h4 className="text-red-700 font-black text-[11px] uppercase flex items-center gap-2">
                                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div> {t.labels.weakness}
                                    </h4>
                                    <p className="text-[13px] text-gray-500 bg-red-50/50 p-5 rounded-xl border border-red-100 min-h-[100px]">
                                        {truck.Слабые_стороны && truck.Слабые_стороны !== 'x' ? truck.Слабые_стороны : '—'}
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-green-700 font-black text-[11px] uppercase flex items-center gap-2">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div> {t.labels.proposals}
                                    </h4>
                                    <p className="text-[13px] text-gray-500 bg-green-50/50 p-5 rounded-xl border border-green-100 min-h-[100px]">
                                        {truck.Предложения && truck.Предложения !== 'x' ? truck.Предложения : '—'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </AccordionSection>
                </div>

                {/* Back to Top */}
                <div className="mt-12 flex justify-end">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-blue-800 transition-all cursor-pointer group">
                        {lang === 'ru' ? 'НАВЕРХ' : 'TEPAGA'} <span className="text-lg transition-transform group-hover:-translate-y-1">↑</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TruckDetail;