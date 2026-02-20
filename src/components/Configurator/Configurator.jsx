import React, { useState, useMemo } from 'react';
import { ArrowLeft, ChevronRight, Check } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

// Rasmlar
import bortImg from '../../assets/image1.png';
import tyagachImg from '../../assets/image2.png';
import samosvalImg from '../../assets/image3.png';
import jacImg from '../../assets/image4.png'; 
import shassiImg from '../../assets/image1.png'; 
import rama from '../../assets/rama.png';

const Configurator = ({ lang, setCurrentPage, setSelectedTruckId }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFormula, setSelectedFormula] = useState(null);

    const t = {
        ru: {
            title: "КОНФИГУРАТОР",
            breadcrumb: "ГЛАВНАЯ > ПРОДУКЦИЯ",
            back: "Назад к продукции", // Matn biroz kengaytirildi
            step1: "ШАГ 1 - ВЫБЕРИТЕ ТИП КУЗОВА АВТОМОБИЛЯ",
            step2: "ШАГ 2 - КОЛЕСНАЯ ФОРМУЛА",
            configTitle: "КОНФИГУРАЦИЯ",
            resultsTitle: "РЕЗУЛЬТАТЫ",
            typeLabel: "Тип техники",
            formulaLabel: "Колесная формула",
            up: "НАВЕРХ",
            types: [
                { id: "3", name: "БОРТОВЫЕ АВТОМОБИЛИ", img: bortImg },
                { id: "1", name: "СЕДЕЛЬНЫЕ ТЯГАЧИ", img: tyagachImg },
                { id: "2", name: "САМОСВАЛЫ", img: samosvalImg },
                { id: "6", name: "МАЛОТОННАЖНЫЕ (JAC)", img: jacImg },
                { id: "7", name: "ШАССИ КАМАЗ", img: shassiImg }
            ],
        },
        uz: {
            title: "KONFIGURATOR",
            breadcrumb: "BOSH SAHIFA > MAHSULOTLAR",
            back: "Mahsulotlarga qaytish",
            step1: "1-QADAM - AVTOMOBIL KUZOV TURINI TANLANG",
            step2: "2-QADAM - G'ILDIRAK FORMULASI",
            configTitle: "KONFIGURATSIYA",
            resultsTitle: "NATIJALAR",
            typeLabel: "Texnika turi",
            formulaLabel: "G'ildirak formulasi",
            up: "TEPAGA",
            types: [
                { id: "3", name: "BORTLI AVTOMOBILLAR", img: bortImg },
                { id: "1", name: "SEDELLI TYAGACHLAR", img: tyagachImg },
                { id: "2", name: "SAMOSVALLAR", img: samosvalImg },
                { id: "6", name: "YENGIL YUK MASHINALARI (JAC)", img: jacImg },
                { id: "7", name: "KAMAZ SHASSILARI", img: shassiImg }
            ],
        }
    }[lang];

    const categoryTrucks = useMemo(() => TRUCKS_DATA.filter(truck => truck.category === selectedCategory), [selectedCategory]);
    const availableFormulas = useMemo(() => {
        const formulas = categoryTrucks.map(truck => truck.formula);
        return [...new Set(formulas)].filter(f => f && f !== "x").sort();
    }, [categoryTrucks]);

    const finalResults = useMemo(() => {
        if (!selectedCategory || !selectedFormula) return [];
        return categoryTrucks.filter(truck => truck.formula === selectedFormula);
    }, [categoryTrucks, selectedFormula]);

    const selectedTypeName = t.types.find(t => t.id === selectedCategory)?.name;

    const handleCategoryChange = (id) => {
        setSelectedCategory(id);
        setSelectedFormula(null);
    };

    const handleTruckClick = (id) => {
        setSelectedTruckId(id);
        setCurrentPage('truck_detail');
    };

    return (
        <div className="bg-white h-auto font-sans select-none text-[#1d1d1b]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">

                {/* --- HEADER QISMI YANGILANDI --- */}
                <div className="flex justify-between items-center mb-10 border-b border-gray-50 pb-6">
                    <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                        <h1 className="text-3xl font-black uppercase mt-1 tracking-tight text-[#002C5B]">{t.title}</h1>
                    </div>

                    {/* YANADA KO'ZGA TASHALANADIGAN TUGMA */}
                    <button 
                        onClick={() => setCurrentPage('production')} 
                        className="group flex items-center gap-3 bg-[#002C5B] hover:bg-[#e67e22] text-white px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                        <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                            <ArrowLeft size={18} className="text-white" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-[0.1em]">
                            {t.back}
                        </span>
                    </button>
                </div>

                <div className="relative">
                    {/* --- STEP 1 --- */}
                    <div className="flex gap-10 relative">
                        <div className="flex flex-col items-center relative">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-500 
                                ${selectedCategory ? 'bg-[#9ba4b0] text-white' : 'bg-[#e67e22] text-white shadow-lg'}`}>
                                {selectedCategory ? <Check size={16} /> : <ChevronRight size={20} />}
                            </div>
                            <div className={`w-[2px] absolute top-8 bg-[#9ba4b0]/40 transition-all duration-500 ${selectedCategory ? 'h-full' : 'h-24'}`}></div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-[14px] font-bold text-[#556071] uppercase flex items-center gap-4 mb-4">
                                <span className="text-blue-100 text-2xl font-light">〈</span> {t.step1}
                            </h2>

                            <div className="flex border border-gray-100 bg-white mb-6 overflow-hidden shadow-sm">
                                {t.types.map((type) => (
                                    <div
                                        key={type.id}
                                        onClick={() => handleCategoryChange(type.id)}
                                        className={`group cursor-pointer flex flex-1 flex-col items-center justify-center border-r last:border-r-0 border-gray-200 px-1 py-6 transition-all duration-300 relative
                                            ${selectedCategory === type.id ? 'bg-[#f4f7f9]' : 'hover:bg-gray-100'}`}
                                    >
                                        <div className="mb-3 h-16 flex items-center justify-center">
                                            <img
                                                src={type.img}
                                                alt={type.name}
                                                style={{ filter: selectedCategory === type.id ? "sepia(1) saturate(10) hue-rotate-[340deg]" : "none" }}
                                                className={`max-h-full object-contain transition-all duration-500 ${selectedCategory === type.id ? 'scale-110' : 'grayscale group-hover:grayscale-0'}`}
                                            />
                                        </div>
                                        <span className={`text-[8.5px] font-black text-center uppercase leading-tight px-1 transition-colors duration-300 ${selectedCategory === type.id ? 'text-[#e67e22]' : 'text-[#0054A6]'}`}>
                                            {type.name}
                                        </span>
                                        {selectedCategory === type.id && <div className="absolute bottom-0 left-0 w-full h-1 bg-[#e67e22]"></div>}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- STEP 2 --- */}
                    <div className={`flex gap-10 relative transition-all duration-500 ease-in-out overflow-hidden
                        ${selectedCategory ? 'max-h-[1500px] opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
                        
                        <div className="flex flex-col items-center relative">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center z-10 transition-all duration-500
                                ${selectedFormula ? 'bg-[#9ba4b0] text-white' : 'bg-[#e67e22] text-white shadow-lg'}`}>
                                {selectedFormula ? <Check size={16} /> : <ChevronRight size={20} />}
                            </div>
                            <div className={`w-[2.5px] absolute top-8 bottom-0 bg-[#9ba4b0]/40 ${selectedFormula ? 'h-full' : 'h-24'}`}></div>
                        </div>

                        <div className="flex-1">
                            <h2 className="text-[14px] font-bold text-[#556071] uppercase flex items-center gap-4 mb-6">
                                <span className="text-blue-100 text-2xl font-light">〈</span> {t.step2}
                            </h2>

                            <div className="flex flex-wrap gap-8 pl-6 mb-8">
                                {availableFormulas.map((formula) => (
                                    <label key={formula} className="flex items-center gap-4 cursor-pointer group">
                                        <div className="relative flex items-center justify-center">
                                            <input type="radio" name="formula" className="peer hidden" checked={selectedFormula === formula} onChange={() => setSelectedFormula(formula)} />
                                            <div className="w-5 h-5 border-2 border-gray-300 rounded-full peer-checked:border-[#e67e22] transition-all bg-white shadow-sm"></div>
                                            <div className="absolute w-2.5 h-2.5 bg-[#e67e22] rounded-full scale-0 peer-checked:scale-100 transition-transform"></div>
                                        </div>
                                        <span className={`text-lg font-medium ${selectedFormula === formula ? 'text-[#1d1d1b]' : 'text-gray-400 group-hover:text-gray-600'}`}>{formula}</span>
                                    </label>
                                ))}
                            </div>

                            {/* --- RESULTS SECTION --- */}
                            {selectedFormula && (
                                <div className="grid lg:grid-cols-2 gap-12 animate-in fade-in duration-700 pb-10">
                                    <div>
                                        <h3 className="text-lg font-black mb-4 uppercase">{t.configTitle}</h3>
                                        <div className="border border-gray-200 text-[12px]">
                                            <div className="grid grid-cols-2 border-b border-gray-200">
                                                <div className="bg-gray-50 p-3 text-gray-500 border-r">{t.typeLabel}</div>
                                                <div className="p-3 font-medium">{selectedTypeName}</div>
                                            </div>
                                            <div className="grid grid-cols-2 bg-[#f4f7f9]">
                                                <div className="p-3 text-gray-500 border-r">{t.formulaLabel}</div>
                                                <div className="p-3 font-medium">{selectedFormula}</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-black mb-4 uppercase">{t.resultsTitle}</h3>
                                        <div className="space-y-0 border-t border-gray-100">
                                            {finalResults.map(truck => (
                                                <div key={truck.id} onClick={() => handleTruckClick(truck.id)}
                                                     className="flex items-center gap-6 py-3 border-b border-gray-100 hover:bg-blue-50/5 transition-colors cursor-pointer group">
                                                    <div className="w-20 h-12 flex items-center justify-center">
                                                        <img src={rama} alt="truck" className="max-h-full max-w-20 object-contain mix-blend-multiply" />
                                                    </div>
                                                    <span className="text-[13px] font-black text-[#0054A6] uppercase underline group-hover:text-orange-600 transition-colors">
                                                        {truck.name}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer Up Button */}
                <div className="mt-4 flex justify-end">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-[#e67e22] transition-all cursor-pointer">
                        {lang === 'ru' ? 'НАВЕРХ' : 'TEPAGA'} <span className="text-lg">↑</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Configurator;