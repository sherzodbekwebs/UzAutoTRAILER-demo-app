import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Contacts = ({ lang }) => {
    // 1. Tanlangan manzil ID-sini saqlash (default 1 - Toshkent)
    const [selectedId, setSelectedId] = useState("1");
    
    // 2. Xarita linkini saqlash - DEFAULT HOLATDA TOSHKENT EMBED LINKI QO'YILDI
    const [mapUrl, setMapUrl] = useState("https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7637679738236!2d69.31880274857568!3d41.31923402229421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e4a3efb065%3A0x29824b6b04cb88b3!2sOOO%20%C2%ABUzAuto%20TRAILER%C2%BB!5e0!3m2!1suz!2s!4v1770874993913!5m2!1suz!2s");

    const t = {
        ru: {
            title: "КОНТАКТЫ",
            breadcrumb: "ГЛАВНАЯ > КОНТАКТЫ",
            selectCity: "Выберите офис / завод",
            showBtn: "ПОКАЗАТЬ",
            options: [
                { id: "1", label: "ГОЛОВНОЙ ОФИС (ТАШКЕНТ)", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7637679738236!2d69.31880274857568!3d41.31923402229421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e4a3efb065%3A0x29824b6b04cb88b3!2sOOO%20%C2%ABUzAuto%20TRAILER%C2%BB!5e0!3m2!1suz!2s!4v1770874993913!5m2!1suz!2s" },
                { id: "2", label: "ЗАВОД (САМАРКАНД)", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4954.814235501116!2d67.0679900715332!3d39.68858928009574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d23b64b5ba8b7%3A0x2ce443d66b07c156!2z0J7QntCeIMKrVXpBdXRvIFRyYWlsZXLCuw!5e0!3m2!1suz!2s!4v1770875223856!5m2!1suz!2s" }
            ],
            cards: [
                {
                    id: "1",
                    title: "ГОЛОВНОЙ ОФИС (ТАШКЕНТ)",
                    city: "Ташкент",
                    address: "г. Ташкент, Мирзо-Улугбекский район, ул. Мирзо-Улугбека, 30",
                    phone: "+998 (71) 202 32 23",
                    email: "info@uzautotrailer.uz",
                    workTime: "Пн-Пт: 09:00 - 18:00"
                },
                {
                    id: "2",
                    title: "ЗАВОД (САМАРКАНД)",
                    city: "Самарканд",
                    address: "Самаркандская область, Жамбайский район, ул.Ташкентская, д.1",
                    phone: "+998 (66) 240 00 10",
                    email: "factory@uzautotrailer.uz",
                    workTime: "Пн-Сб: 08:00 - 17:00"
                }
            ]
        },
        uz: {
            title: "KONTAKTLAR",
            breadcrumb: "BOSH SAHIFA > KONTAKTLAR",
            selectCity: "Ofis / Zavodni tanlang",
            showBtn: "KO'RSATISH",
            options: [
                { id: "1", label: "BOSH OFIS (TOSHKENT)", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.7637679738236!2d69.31880274857568!3d41.31923402229421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5e4a3efb065%3A0x29824b6b04cb88b3!2sOOO%20%C2%ABUzAuto%20TRAILER%C2%BB!5e0!3m2!1suz!2s!4v1770874993913!5m2!1suz!2s" },
                { id: "2", label: "ZAVOD (SAMARQAND)", url: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4954.814235501116!2d67.0679900715332!3d39.68858928009574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d23b64b5ba8b7%3A0x2ce443d66b07c156!2z0J7QntCeIMKrVXpBdXRvIFRyYWlsZXLCuw!5e0!3m2!1suz!2s!4v1770875223856!5m2!1suz!2s" }
            ],
            cards: [
                {
                    id: "1",
                    title: "BOSH OFIS (TOSHKENT)",
                    city: "Toshkent",
                    address: "Toshkent sh., Mirzo Ulug'bek tumani, Mirzo Ulug'bek ko'chasi, 30-uy",
                    phone: "+998 (71) 202 32 23",
                    email: "info@uzautotrailer.uz",
                    workTime: "Du-Ju: 09:00 - 18:00"
                },
                {
                    id: "2",
                    title: "ZAVOD (SAMARQAND)",
                    city: "Samarqand",
                    address: "Samarqand viloyati, Jomboy tumani, Toshkent ko'chasi, 1-uy",
                    phone: "+998 (66) 240 00 10",
                    email: "factory@uzautotrailer.uz",
                    workTime: "Du-Sha: 08:00 - 17:00"
                }
            ]
        }
    }[lang];

    // "Показать" tugmasi funksiyasi
    const handleShowMap = () => {
        const selectedOption = t.options.find(opt => opt.id === selectedId);
        if (selectedOption) {
            setMapUrl(selectedOption.url);
        }
    };

    return (
        <div className="bg-white min-h-screen pb-20 font-sans animate-in fade-in duration-500">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                <h1 className="text-3xl font-black text-[#002C5B] uppercase mt-4 mb-10">{t.title}</h1>

                {/* Filter Section */}
                <div className="flex gap-4 items-end mb-10">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 italic">{t.selectCity}</label>
                        <select
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                            className="border-2 border-gray-200 px-4 py-2.5 w-80 text-sm font-bold text-[#002C5B] outline-none focus:border-[#004A99] transition-all bg-gray-50 rounded-sm cursor-pointer"
                        >
                            {t.options.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleShowMap}
                        className="bg-[#002C5B] hover:bg-[#004A99] text-white px-10 py-2.5 text-sm font-black flex items-center gap-4 transition-all active:scale-95 shadow-lg uppercase tracking-wider rounded-sm cursor-pointer"
                    >
                        {t.showBtn} <ChevronRight size={18} />
                    </button>
                </div>

                {/* Map View */}
                <div className="w-full h-[450px] mb-12 bg-gray-100 overflow-hidden border-4 border-gray-50 shadow-inner rounded-sm relative">
                    <iframe
                        src={mapUrl}
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        title="UzAuto Map"
                    ></iframe>
                </div>

                {/* Info Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                    {t.cards.map((card, idx) => (
                        <div key={idx} className={`border-2 transition-all duration-300 ${selectedId === card.id ? 'border-orange-500 shadow-xl scale-[1.02]' : 'border-gray-100 shadow-sm'}`}>
                            <div className={`${selectedId === card.id ? 'bg-orange-500 text-white' : 'bg-[#C4C9D3] text-[#002C5B]'} p-4 transition-colors`}>
                                <h3 className="text-sm font-black uppercase tracking-wide">{card.title}</h3>
                            </div>
                            <table className="w-full text-sm">
                                <tbody className="bg-white">
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[10px]">Город</td>
                                        <td className="p-4 text-[#004A99] font-black">{card.city}</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[10px]">Адрес</td>
                                        <td className="p-4 text-gray-600 font-medium">{card.address}</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[10px]">Телефон</td>
                                        <td className="p-4 text-gray-900 font-black">{card.phone}</td>
                                    </tr>
                                    <tr className="border-b border-gray-100">
                                        <td className="p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[10px]">E-mail</td>
                                        <td className="p-4 text-blue-600 font-bold hover:underline cursor-pointer">{card.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[10px]">Режим работы</td>
                                        <td className="p-4 text-gray-600 font-medium">{card.workTime}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contacts;