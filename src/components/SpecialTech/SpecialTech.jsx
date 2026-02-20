import React, { useMemo } from 'react';
import { ArrowLeft, Truck } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

const SpecialTech = ({ lang, setCurrentPage, setSelectedTruckId }) => {
    
    const t = {
        ru: {
            title: "СПЕЦАВТОТЕХНИКА",
            breadcrumb: "ГЛАВНАЯ > ПРОДУКЦИЯ",
            back: "Назад к продукции",
            th: {
                photo: "Фото",
                model: "Модель",
                chassis: "Базовое шасси",
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
            }
        },
        uz: {
            title: "MAXSUS AVTOTEXNIKA",
            breadcrumb: "BOSH SAHIFA > MAHSULOTLAR",
            back: "Mahsulotlarga qaytish",
            th: {
                photo: "Rasm",
                model: "Model",
                chassis: "Baza shassisi",
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
            }
        }
    }[lang];

    // --- DATA GURUHLASH MANTIQI ---
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
            <div className="mb-12 overflow-x-auto">
                <h2 className="text-lg font-black text-[#1d1d1b] mb-4 border-l-4 border-orange-500 pl-4 uppercase tracking-wide">
                    {t.groups[groupName]}
                </h2>
                <table className="w-full border-collapse border border-gray-200 text-sm">
                    <thead>
                        <tr className="bg-[#E9EDF2] text-[#4a5568]">
                            <th className="border border-gray-300 p-3 w-32 font-bold">{t.th.photo}</th>
                            <th className="border border-gray-300 p-3 text-left font-bold">{t.th.model}</th>
                            <th className="border border-gray-300 p-3 text-left font-bold">{t.th.chassis}</th>
                            <th className="border border-gray-300 p-3 text-left font-bold">{t.th.spec}</th>
                            <th className="border border-gray-300 p-3 text-right font-bold">{t.th.price}</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white">
                        {items.map((truck) => (
                            <tr key={truck.id} className="hover:bg-blue-50/30 transition-colors group">
                                <td className="border border-gray-200 p-2 text-center">
                                    <img 
                                        src={truck.img} 
                                        alt={truck.name} 
                                        onClick={() => { setSelectedTruckId(truck.id); setCurrentPage('truck_detail'); }}
                                        className="max-h-16 mx-auto object-contain cursor-pointer hover:scale-110 transition-transform" 
                                    />
                                </td>
                                <td className="border border-gray-200 p-4">
                                    <span 
                                        onClick={() => { setSelectedTruckId(truck.id); setCurrentPage('truck_detail'); }}
                                        className="text-[#0054A6] font-black cursor-pointer hover:text-orange-600 underline underline-offset-2 uppercase text-xs"
                                    >
                                        {truck.name}
                                    </span>
                                </td>
                                <td className="border border-gray-200 p-4 text-gray-600 font-medium">
                                    {truck.formula} / {truck.power}
                                </td>
                                <td className="border border-gray-200 p-4 text-gray-500 text-xs leading-relaxed">
                                    {truck.Объём !== 'x' && <div>• Объём: {truck.Объём} м³</div>}
                                    <div>• {truck.engine !== 'x' ? truck.engine : 'Стандарт'}</div>
                                    <div>• {truck.tank}</div>
                                </td>
                                <td className="border border-gray-200 p-4 text-right">
                                    <div className="text-orange-600 font-black text-base whitespace-nowrap">{truck.price}</div>
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
                        <span className="text-[11px] font-black uppercase tracking-widest">
                            {t.back}
                        </span>
                    </button>
                </div>

                {/* --- TABLES BY CATEGORIES --- */}
                <div className="animate-in fade-in duration-700">
                    {renderTable('lifts', groupedData.lifts)}
                    {renderTable('cranes', groupedData.cranes)}
                    {renderTable('water', groupedData.water)}
                    {renderTable('fuel', groupedData.fuel)}
                    {renderTable('communal', groupedData.communal)}
                    {renderTable('buses', groupedData.buses)}
                </div>

                {/* Habepx Button */}
                <div className="mt-20 flex justify-end">
                    <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 hover:text-orange-600 transition-all cursor-pointer">
                        {lang === 'ru' ? 'НАВЕРХ' : 'TEPAGA'} <span className="text-lg">↑</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SpecialTech;