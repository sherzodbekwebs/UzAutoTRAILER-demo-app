import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const Contacts = ({ lang }) => {
    const [selectedId, setSelectedId] = useState("1");
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
                { id: "1", title: "ГОЛОВНОЙ ОФИС (ТАШКЕНТ)", city: "Ташкент", address: "г. Ташкент, Мирзо-Улугбекский район, ул. Мирзо-Улугбека, 30", phone: "+998 (71) 202 32 23", email: "info@uzautotrailer.uz", workTime: "Пн-Пт: 09:00 - 18:00" },
                { id: "2", title: "ЗАВОД (САМАРКАНД)", city: "Самарканд", address: "Самаркандская область, Жамбайский район, ул.Ташкентская, д.1", phone: "+998 (66) 240 00 10", email: "factory@uzautotrailer.uz", workTime: "Пн-Сб: 08:00 - 17:00" }
            ],
            th: { city: "Город", address: "Адрес", phone: "Телефон", email: "E-mail", hours: "Режим работы" }
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
                { id: "1", title: "BOSH OFIS (TOSHKENT)", city: "Toshkent", address: "Toshkent sh., Mirzo Ulug'bek tumani, Mirzo Ulug'bek ko'chasi, 30-uy", phone: "+998 (71) 202 32 23", email: "info@uzautotrailer.uz", workTime: "Du-Ju: 09:00 - 18:00" },
                { id: "2", title: "ZAVOD (SAMARQAND)", city: "Samarqand", address: "Samarqand viloyati, Jomboy tumani, Toshkent ko'chasi, 1-uy", phone: "+998 (66) 240 00 10", email: "factory@uzautotrailer.uz", workTime: "Du-Sha: 08:00 - 17:00" }
            ],
            th: { city: "Shahar", address: "Manzil", phone: "Telefon", email: "E-mail", hours: "Ish vaqti" }
        }
    }[lang];

    const handleShowMap = () => {
        const selectedOption = t.options.find(opt => opt.id === selectedId);
        if (selectedOption) setMapUrl(selectedOption.url);
    };

    return (
        <div className="bg-white min-h-screen pb-10 md:pb-20 font-sans animate-in fade-in duration-500 overflow-x-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
                
                {/* Breadcrumb & Title */}
                <span className="text-[9px] md:text-[10px] font-bold text-gray-400 uppercase tracking-widest">{t.breadcrumb}</span>
                <h1 className="text-2xl md:text-3xl font-black text-[#002C5B] uppercase mt-2 mb-6 md:mb-10">{t.title}</h1>

                {/* Filter Section - Responsive Grid */}
                <div className="flex flex-col sm:flex-row gap-4 items-stretch sm:items-end mb-8 md:mb-10">
                    <div className="flex flex-col gap-2">
                        <label className="text-xs font-bold text-gray-500 italic">{t.selectCity}</label>
                        <select
                            value={selectedId}
                            onChange={(e) => setSelectedId(e.target.value)}
                            className="border-2 border-gray-200 px-4 py-2.5 w-full sm:w-80 text-sm font-bold text-[#002C5B] outline-none focus:border-[#004A99] bg-gray-50 rounded-sm cursor-pointer"
                        >
                            {t.options.map(opt => (
                                <option key={opt.id} value={opt.id}>{opt.label}</option>
                            ))}
                        </select>
                    </div>
                    <button
                        onClick={handleShowMap}
                        className="bg-[#002C5B] hover:bg-[#004A99] text-white px-8 py-2.5 text-sm font-black flex items-center justify-center gap-4 transition-all active:scale-95 shadow-lg uppercase tracking-wider rounded-sm"
                    >
                        {t.showBtn} <ChevronRight size={18} />
                    </button>
                </div>

                {/* Map View - Responsive Height */}
                <div className="w-full h-[300px] md:h-[450px] mb-8 md:mb-12 bg-gray-100 overflow-hidden border-2 md:border-4 border-gray-50 shadow-inner rounded-sm">
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

                {/* Info Cards - Responsive Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {t.cards.map((card) => (
                        <div key={card.id} className={`border-2 transition-all duration-300 ${selectedId === card.id ? 'border-orange-500 shadow-lg' : 'border-gray-100 shadow-sm'}`}>
                            <div className={`${selectedId === card.id ? 'bg-orange-500 text-white' : 'bg-[#C4C9D3] text-[#002C5B]'} p-3 md:p-4 transition-colors`}>
                                <h3 className="text-xs md:text-sm font-black uppercase tracking-wide">{card.title}</h3>
                            </div>
                            <div className="overflow-x-auto">
                                <table className="w-full text-xs md:text-sm min-w-[300px]">
                                    <tbody className="bg-white">
                                        <tr className="border-b border-gray-100">
                                            <td className="p-3 md:p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[9px] md:text-[10px]">{t.th.city}</td>
                                            <td className="p-3 md:p-4 text-[#004A99] font-black">{card.city}</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-3 md:p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[9px] md:text-[10px]">{t.th.address}</td>
                                            <td className="p-3 md:p-4 text-gray-600 font-medium leading-snug">{card.address}</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-3 md:p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[9px] md:text-[10px]">{t.th.phone}</td>
                                            <td className="p-3 md:p-4 text-gray-900 font-black">{card.phone}</td>
                                        </tr>
                                        <tr className="border-b border-gray-100">
                                            <td className="p-3 md:p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[9px] md:text-[10px]">{t.th.email}</td>
                                            <td className="p-3 md:p-4 text-blue-600 font-bold break-all hover:underline cursor-pointer">{card.email}</td>
                                        </tr>
                                        <tr>
                                            <td className="p-3 md:p-4 text-gray-400 font-bold w-1/3 border-r border-gray-100 uppercase text-[9px] md:text-[10px]">{t.th.hours}</td>
                                            <td className="p-3 md:p-4 text-gray-600 font-medium">{card.workTime}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contacts;