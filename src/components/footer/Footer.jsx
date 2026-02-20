import React from 'react';
import { Send, Instagram, Facebook, Youtube, Phone } from 'lucide-react';
import light from '/public/light.png';

const Footer = ({ lang, setCurrentPage }) => {
    const t = {
        ru: {
            desc: "Завод-изготовитель автомобильной, прицепной, полуприцепной и навесной техники полного производственного цикла, входящий в состав отраслеобразующих предприятий автомобильной промышленности Республики Узбекистан.",
            contacts: "Контакты",
            tashkent: "г. Ташкент, ул. Мирзо-Улугбека, 30",
            headOffice: "Головной офис",
            samarkand: "Самаркандская область, Джамбайский район, ул. Ташкентская, 2",
            production: "Производство",
            showMap: "Показать на карте",
            copyright: "© 2012 - 2026 ИП ООО «UzAuto Trailer»",
            legal: "Свидетельство №0002005 от 06.06.2012 г. Копирование материалов запрещено."
        },
        uz: {
            desc: "O'zbekiston avtomobil sanoatining to'liq ishlab chiqarish sikliga ega bo'lgan avtomobil, tirkama va osma texnikalar ishlab chiqaruvchi zavodi.",
            contacts: "Kontaktlar",
            tashkent: "Toshkent sh., Mirzo Ulug'bek ko'chasi, 30-uy",
            headOffice: "Bosh ofis",
            samarkand: "Samarqand viloyati, Jomboy tumani, Toshkent ko'chasi, 2-uy",
            production: "Ishlab chiqarish",
            showMap: "Xaritada ko'rish",
            copyright: "© 2012 - 2026 «UzAuto Trailer» MCHJ XK",
            legal: "Guvohnoma №0002005, 06.06.2012 y. Materiallardan nusxa ko'chirish taqiqlanadi."
        }
    }[lang];

    return (
        <footer className="relative bg-[#003875] text-white font-sans overflow-hidden">
            {/* Fon naqshi */}
            <div className="absolute inset-0 opacity-5 pointer-events-none"
                style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/carbon-fibre.png')` }}>
            </div>

            <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-8"> {/* Padding py-16 dan py-8 ga tushirildi */}
                <div className="grid md:grid-cols-2 gap-10">

                    {/* CHAP TOMON: LOGO VA TAVSIF */}
                    <div className="flex flex-col justify-between">
                        <div className="space-y-4">
                            <img
                                src={light}
                                alt="UzAuto Trailer"
                                className="h-10 w-20"  /* Logo h-16 dan h-10 ga tushirildi */
                            />
                            <p className="text-blue-100/70 text-[13px] leading-relaxed text-justify max-w-md">
                                {t.desc}
                            </p>

                            {/* Ijtimoiy tarmoqlar (Kichikroq) */}
                            <div className="flex gap-3 pt-2">
                                {[Send, Instagram, Facebook, Youtube].map((Icon, i) => (
                                    <a key={i} href="#" className="w-8 h-8 rounded bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-all">
                                        <Icon size={16} />
                                    </a>
                                ))}
                            </div>
                        </div>

                        <div className="mt-6 space-y-1">
                            <p className="text-[10px] text-blue-200/50 font-bold uppercase tracking-wider">{t.copyright}</p>
                            <p className="text-[9px] text-blue-200/30">{t.legal}</p>
                        </div>
                    </div>

                    {/* O'NG TOMON: KONTAKTLAR (Zichroq) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {/* Toshkent */}
                        <div className="space-y-3">
                            <h3 className="text-lg font-black uppercase tracking-tight border-b border-white/10 pb-2">{t.contacts}</h3>
                            <div className="space-y-1">
                                <p className="text-blue-100 text-xs font-medium">{t.tashkent}</p>
                                <p className="text-orange-400 font-black uppercase text-[9px] tracking-widest">{t.headOffice}</p>
                            </div>
                            <p className="text-lg font-black text-white">+998 71 202 32 23</p>
                            <button
                                onClick={() => setCurrentPage('contacts')}
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded text-[10px] font-bold uppercase transition-all cursor-pointer border border-white/5"
                            >
                                {t.showMap}
                            </button>
                        </div>

                        {/* Samarqand */}
                        <div className="space-y-3 pt-0 sm:pt-9"> {/* Sarlavha bilan tenglash uchun padding */}
                            <div className="space-y-1">
                                <p className="text-blue-100 text-xs font-medium leading-snug">{t.samarkand}</p>
                                <p className="text-orange-400 font-black uppercase text-[9px] tracking-widest">{t.production}</p>
                            </div>
                            <p className="text-lg font-black text-white">+998 66 240 00 10</p>
                            <button
                                onClick={() => setCurrentPage('contacts')}
                                className="bg-white/10 hover:bg-white/20 text-white px-4 py-1.5 rounded text-[10px] font-bold uppercase transition-all cursor-pointer border border-white/5"
                            >
                                {t.showMap}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Slim Bar */}
            <div className="bg-[#002C5B] py-3 border-t border-white/5"> {/* py-6 dan py-3 ga tushirildi */}
                <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                    <p className="text-[9px] text-blue-200/40 uppercase font-bold tracking-[0.2em]">
                        UzAuto Trailer — {new Date().getFullYear()}
                    </p>
                    <div className="bg-blue-900/50 px-2 py-0.5 rounded text-[9px] font-black text-blue-400 border border-blue-800">
                        TAS-IX <span className="text-white ml-1">0</span>
                    </div>
                </div>
            </div>

            {/* Floating Call Button (Sal kichikroq) */}
            <a href="tel:+998712023223"
                className="fixed bottom-6 right-6 w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all z-[100]">
                <Phone size={20} className="text-white" />
                <span className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-20"></span>
            </a>
        </footer>
    );
};

export default Footer;