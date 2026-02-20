import React, { useMemo } from 'react';
import { ArrowLeft } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

const Trailers = ({ lang, setCurrentPage, setSelectedTruckId }) => {

    const t = {
        ru: {
            title: "ПРИЦЕПНАЯ ТЕХНИКА",
            breadcrumb: "ГЛАВНАЯ > ПРОДУКЦИЯ",
            back: "Назад к продукции",
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
            }
        },
        uz: {
            title: "TIRKAMA TEXNIKASI",
            breadcrumb: "BOSH SAHIFA > MAHSULOTLAR",
            back: "Mahsulotlarga qaytish",
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
            }
        }
    }[lang];

    // --- DATA GURUHLASH (Kengaytirilgan mantiq) ---
    const groupedData = useMemo(() => {
        // Faqat 5-kategoriyani olamiz (Jami 13 ta)
        const allTrailers = TRUCKS_DATA.filter(item => item.category === "5");

        return {
            // 1. Konteyner tashuvchilar
            container: allTrailers.filter(i => i.name.toLowerCase().includes('контейнеровоз')),

            // 2. Traktor tirkamalari
            tractor: allTrailers.filter(i => i.name.toLowerCase().includes('тракторный')),

            // 3. Qolgan barcha tirkama va yarim tirkamalar (41-ID ham shu yerga kiradi)
            semi: allTrailers.filter(i =>
                !i.name.toLowerCase().includes('контейнеровоз') &&
                !i.name.toLowerCase().includes('тракторный')
            ),
        };
    }, []);

    const renderTable = (groupKey, items) => {
        if (items.length === 0) return null;
        return (
            <div className="mb-12 overflow-x-auto">
                <h2 className="text-lg font-black text-[#1d1d1b] mb-4 border-l-4 border-[#0054A6] pl-4 uppercase tracking-wide">
                    {t.groups[groupKey]} ({items.length})
                </h2>
                <table className="w-full border-collapse border border-gray-200 text-sm">
                    <thead>
                        <tr className="bg-[#E9EDF2] text-[#4a5568]">
                            <th className="border border-gray-300 p-3 w-32 font-bold">{t.th.photo}</th>
                            <th className="border border-gray-300 p-3 text-left font-bold">{t.th.model}</th>
                            <th className="border border-gray-300 p-3 font-bold">{t.th.axles}</th>
                            <th className="border border-gray-300 p-3 font-bold">{t.th.load}</th>
                            <th className="border border-gray-300 p-3 font-bold">{t.th.volume}</th>
                            <th className="border border-gray-300 p-3 text-right font-bold">{t.th.price}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {items.map((item) => (
                            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
                                <td className="border border-gray-200 p-2 text-center">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        onClick={() => { setSelectedTruckId(item.id); setCurrentPage('truck_detail'); }}
                                        className="max-h-16 mx-auto object-contain cursor-pointer hover:scale-105 transition-transform"
                                    />
                                </td>
                                <td className="border border-gray-200 p-4">
                                    <span
                                        onClick={() => { setSelectedTruckId(item.id); setCurrentPage('truck_detail'); }}
                                        className="text-[#0054A6] font-black cursor-pointer hover:text-orange-600 underline underline-offset-2 uppercase text-[12px]"
                                    >
                                        {item.name}
                                    </span>
                                </td>
                                <td className="border border-gray-200 p-4 text-center font-bold text-gray-600">
                                    {item.formula}
                                </td>
                                <td className="border border-gray-200 p-4 text-center font-medium text-gray-700">
                                    {item.load}
                                </td>
                                <td className="border border-gray-200 p-4 text-center font-medium text-gray-500">
                                    {item.Объём !== 'x' ? item.Объём : '-'}
                                </td>
                                <td className="border border-gray-200 p-4 text-right">
                                    <div className="text-[#e67e22] font-black text-base">{item.price}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    return (
        <div className="bg-white min-h-screen font-sans pb-20 select-none text-[#1d1d1b]">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10">

                {/* Header */}
                <div className="flex justify-between items-center mb-10 border-b border-gray-100 pb-6">
                    <div>
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                        <h1 className="text-3xl font-black uppercase mt-1 tracking-tight text-[#002C5B]">{t.title}</h1>
                    </div>

                    <button
                        onClick={() => setCurrentPage('production')}
                        className="group flex items-center gap-3 bg-[#002C5B] hover:bg-[#e67e22] text-white px-6 py-2.5 rounded-full shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
                    >
                        <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                            <ArrowLeft size={18} className="text-white" />
                        </div>
                        <span className="text-[11px] font-black uppercase tracking-widest">{t.back}</span>
                    </button>
                </div>

                {/* --- TABLES --- */}
                <div className="animate-in fade-in duration-700">
                    {renderTable('semi', groupedData.semi)}
                    {renderTable('container', groupedData.container)}
                    {renderTable('tractor', groupedData.tractor)}
                </div>

                {/* Up Button */}
                <div className="mt-16 flex justify-end">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-[#e67e22] transition-all cursor-pointer">
                        {lang === 'ru' ? 'НАВЕРХ' : 'TEPAGA'} <span className="text-lg">↑</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Trailers;