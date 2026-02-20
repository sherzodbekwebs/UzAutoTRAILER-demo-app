import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

const Trailers = ({ lang, setCurrentPage, setSelectedTruckId }) => {

    const t = {
        ru: {
            title: "ПРИЦЕПНАЯ ТЕХНИКА",
            breadcrumb: "ГЛАВНАЯ > ПРОДУКЦИЯ",
            back: "Назад",
            th: {
                photo: "Фото",
                model: "Модель",
                axles: "Оси",
                load: "Г/п, тн",
                volume: "Объем, м³",
                price: "Цена"
            },
            groups: {
                semi: "ПРИЦЕПЫ И ПОЛУПРИЦЕПЫ",
                container: "КОНТЕЙНЕРОВОЗЫ",
                tractor: "ТРАКТОРНЫЕ ПРИЦЕПЫ"
            },
            up: "НАВЕРХ"
        },
        uz: {
            title: "TIRKAMA TEXNIKASI",
            breadcrumb: "BOSH SAHIFA > MAHSULOTLAR",
            back: "Orqaga",
            th: {
                photo: "Rasm",
                model: "Model",
                axles: "O'qlar",
                load: "Yuk ko'tarish, tn",
                volume: "Hajmi, m³",
                price: "Narxi"
            },
            groups: {
                semi: "TIRKAMALAR VA YARIM TIRKAMALAR",
                container: "KONTEYNER TASHUVCHILAR",
                tractor: "TRAKTOR TIRKAMALARI"
            },
            up: "TEPAGA"
        }
    }[lang];

    // --- DATA GURUHLASH (Category 5) ---
    const groupedData = useMemo(() => {
        const allTrailers = TRUCKS_DATA.filter(item => item.category === "5");

        return {
            container: allTrailers.filter(i => i.name.toLowerCase().includes('контейнеровоз')),
            tractor: allTrailers.filter(i => i.name.toLowerCase().includes('тракторный')),
            semi: allTrailers.filter(i =>
                !i.name.toLowerCase().includes('контейнеровоз') &&
                !i.name.toLowerCase().includes('тракторный')
            ),
        };
    }, []);

    const renderTable = (groupKey, items) => {
        if (items.length === 0) return null;
        return (
            <div className="mb-10 md:mb-16">
                <h2 className="text-base md:text-lg font-black text-[#1d1d1b] mb-4 border-l-4 border-[#0054A6] pl-4 uppercase tracking-wide">
                    {t.groups[groupKey]} ({items.length})
                </h2>
                
                {/* Jadval konteyneri - Mobilda scroll bo'lishi uchun */}
                <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse min-w-[650px] md:min-w-full text-xs md:text-sm">
                        <thead>
                            <tr className="bg-[#E9EDF2] text-[#4a5568]">
                                <th className="border border-gray-200 p-2 md:p-3 w-20 md:w-32 font-bold">{t.th.photo}</th>
                                <th className="border border-gray-200 p-2 md:p-3 text-left font-bold">{t.th.model}</th>
                                <th className="border border-gray-200 p-2 md:p-3 font-bold">{t.th.axles}</th>
                                <th className="border border-gray-200 p-2 md:p-3 font-bold">{t.th.load}</th>
                                <th className="border border-gray-200 p-2 md:p-3 font-bold">{t.th.volume}</th>
                                <th className="border border-gray-200 p-2 md:p-3 text-right font-bold">{t.th.price}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {items.map((item) => (
                                <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                    <td className="border border-gray-100 p-2 text-center">
                                        <div className="flex items-center justify-center h-12 md:h-16">
                                            <img
                                                src={item.img}
                                                alt={item.name}
                                                onClick={() => { setSelectedTruckId(item.id); setCurrentPage('truck_detail'); }}
                                                className="max-h-full max-w-full object-contain cursor-pointer hover:scale-105 transition-transform"
                                            />
                                        </div>
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4">
                                        <span
                                            onClick={() => { setSelectedTruckId(item.id); setCurrentPage('truck_detail'); }}
                                            className="text-[#0054A6] font-black cursor-pointer hover:text-orange-600 underline underline-offset-2 uppercase text-[11px] md:text-xs leading-tight block"
                                        >
                                            {item.name}
                                        </span>
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-center font-bold text-gray-600">
                                        {item.formula}
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-center font-medium text-gray-700">
                                        {item.load}
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-center font-medium text-gray-500">
                                        {item.Объём !== 'x' ? item.Объём : '-'}
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-right">
                                        <div className="text-[#e67e22] font-black text-sm md:text-base whitespace-nowrap">{item.price}</div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen font-sans pb-10 select-none text-[#1d1d1b]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 md:py-10">

                {/* --- HEADER SECTION --- */}
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 border-b border-gray-50 pb-6 gap-4">
                    <div>
                        <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                        <h1 className="text-2xl md:text-3xl font-black uppercase mt-1 tracking-tight text-[#002C5B]">{t.title}</h1>
                    </div>

                    <button
                        onClick={() => setCurrentPage('production')}
                        className="group flex items-center gap-3 bg-[#002C5B] hover:bg-[#e67e22] text-white px-5 md:px-6 py-2 md:py-2.5 rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer w-full sm:w-auto justify-center"
                    >
                        <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                            <ArrowLeft size={16} className="text-white" />
                        </div>
                        <span className="text-[10px] md:text-[11px] font-black uppercase tracking-widest">
                            {t.back}
                        </span>
                    </button>
                </div>

                {/* --- TABLES --- */}
                <div className="animate-in fade-in duration-700">
                    {renderTable('semi', groupedData.semi)}
                    {renderTable('container', groupedData.container)}
                    {renderTable('tractor', groupedData.tractor)}
                </div>

                {/* Back to Top */}
                <div className="mt-8 md:mt-20 flex justify-end">
                    <button 
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
                        className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-[#e67e22] transition-all cursor-pointer group"
                    >
                        {t.up} <span className="text-xl transition-transform group-hover:-translate-y-1">↑</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Trailers;