import React, { useMemo } from 'react';
import { ArrowLeft, Truck, ChevronRight } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

const SpecialTech = ({ lang, setCurrentPage, setSelectedTruckId }) => {

    const t = {
        ru: {
            title: "СПЕЦАВТОТЕХНИКА",
            breadcrumb: "ГЛАВНАЯ > ПРОДУКЦИЯ",
            back: "Назад",
            th: {
                photo: "Фото",
                model: "Модель",
                chassis: "Шасси / Формула",
                spec: "Характеристики",
                price: "Цена"
            },
            groups: {
                lifts: "АВТОГИДРОПОДЪЁМНИКИ",
                cranes: "АВТОКРАНЫ И КМУ",
                water: "АВТОЦИСТЕРНЫ / ВОДОВОЗЫ",
                fuel: "АВТОТОПЛИВОЗАПРАВЩИКИ",
                communal: "КОММУНАЛЬНАЯ ТЕХНИКА",
                buses: "ВАХТОВЫЕ АВТОБУСЫ"
            },
            up: "НАВЕРХ"
        },
        uz: {
            title: "MAXSUS AVTOTEXNIKA",
            breadcrumb: "BOSH SAHIFA > MAHSULOTLAR",
            back: "Orqaga",
            th: {
                photo: "Rasm",
                model: "Model",
                chassis: "Shassi / Formula",
                spec: "Xususiyatlari",
                price: "Narxi"
            },
            groups: {
                lifts: "AVTOGIDROPODYOMNIKLAR",
                cranes: "AVTOKRAN VA KMULAR",
                water: "AVTOTSISTERNA / SUV TASHUVCHILAR",
                fuel: "AVTOYONILG'I QUYISH MASHINALARI",
                communal: "KOMMUNAL TEXNIKALAR",
                buses: "VAXTA AVTOBUSLARI"
            },
            up: "TEPAGA"
        }
    }[lang];

    const groupedData = useMemo(() => {
        const data = TRUCKS_DATA.filter(item => item.category === "4");
        return {
            lifts: data.filter(i => i.name.toLowerCase().includes('подъёмник')),
            cranes: data.filter(i => i.name.toLowerCase().includes('кран') || i.name.toLowerCase().includes('манипулятор')),
            water: data.filter(i => i.name.toLowerCase().includes('водовоз')),
            fuel: data.filter(i => i.name.toLowerCase().includes('топливо')),
            communal: data.filter(i => i.name.toLowerCase().includes('моечная') || i.name.toLowerCase().includes('кдм') || i.name.toLowerCase().includes('вакуумная') || i.name.toLowerCase().includes('мусор')),
            buses: data.filter(i => i.name.toLowerCase().includes('автобус')),
        };
    }, []);

    const renderTable = (groupName, items) => {
        if (items.length === 0) return null;
        return (
            <div className="mb-10 md:mb-16">
                <h2 className="text-base md:text-lg font-black text-[#1d1d1b] mb-4 border-l-4 border-orange-500 pl-4 uppercase tracking-wide">
                    {t.groups[groupName]} ({items.length})
                </h2>

                {/* Jadval konteyneri - Mobilda scroll bo'lishi uchun */}
                <div className="overflow-x-auto bg-white border border-gray-200 shadow-sm">
                    <table className="w-full border-collapse min-w-[700px] md:min-w-full text-xs md:text-sm">
                        <thead>
                            <tr className="bg-[#E9EDF2] text-[#4a5568]">
                                <th className="border border-gray-200 p-2 md:p-3 w-20 md:w-32 font-bold">{t.th.photo}</th>
                                <th className="border border-gray-200 p-2 md:p-3 text-left font-bold">{t.th.model}</th>
                                <th className="border border-gray-200 p-2 md:p-3 text-left font-bold">{t.th.chassis}</th>
                                <th className="border border-gray-200 p-2 md:p-3 text-left font-bold">{t.th.spec}</th>
                                <th className="border border-gray-200 p-2 md:p-3 text-right font-bold">{t.th.price}</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {items.map((truck) => (
                                <tr key={truck.id} className="hover:bg-blue-50/30 transition-colors">
                                    <td className="border border-gray-100 p-2 text-center">
                                        <div className="flex items-center justify-center h-12 md:h-16">
                                            <img
                                                src={truck.img}
                                                alt={truck.name}
                                                onClick={() => { setSelectedTruckId(truck.id); setCurrentPage('truck_detail'); }}
                                                className="max-h-full max-w-full object-contain cursor-pointer hover:scale-105 transition-transform"
                                            />
                                        </div>
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4">
                                        <span
                                            onClick={() => { setSelectedTruckId(truck.id); setCurrentPage('truck_detail'); }}
                                            className="text-[#0054A6] font-black cursor-pointer hover:text-orange-600 underline underline-offset-2 uppercase text-[11px] md:text-xs leading-tight block"
                                        >
                                            {truck.name}
                                        </span>
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-gray-600 font-bold">
                                        {truck.formula} <span className="text-gray-400 font-medium">/ {truck.power}</span>
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-gray-500 text-[10px] md:text-xs leading-relaxed">
                                        {truck.Объём !== 'x' && <div className="font-bold text-gray-700">V: {truck.Объём} м³</div>}
                                        <div className="truncate max-w-[150px]">{truck.engine !== 'x' ? truck.engine : 'Standart'}</div>
                                    </td>
                                    <td className="border border-gray-100 p-3 md:p-4 text-right">
                                        <div className="text-[#e67e22] font-black text-sm md:text-base whitespace-nowrap">{truck.price}</div>
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

                {/* Header Section - Responsive */}
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

                {/* Tables Grid */}
                <div className="animate-in fade-in duration-700">
                    {renderTable('lifts', groupedData.lifts)}
                    {renderTable('cranes', groupedData.cranes)}
                    {renderTable('water', groupedData.water)}
                    {renderTable('fuel', groupedData.fuel)}
                    {renderTable('communal', groupedData.communal)}
                    {renderTable('buses', groupedData.buses)}
                </div>

                {/* Back to Top */}
                <div className="mt-8 md:mt-20 flex justify-end">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-[#e67e22] transition-all cursor-pointer"
                    >
                        {t.up} <span className="text-lg">↑</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialTech;