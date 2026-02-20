import React, { useState } from 'react';
import { Phone, Search, MapPin, ChevronDown, Menu, X } from 'lucide-react';

const Navbar = ({ lang, setLang, setCurrentPage, currentPage }) => {
    // Mobil menyu holati
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const translations = {
        ru: {
            callCenter: "Колл-центр: 9:00 — 18:00 UZ",
            contactUs: "Связаться с нами",
            location: "Ташкент, УЗ",
            about: "О компании",
            production: "Продукция",
            news: "Новости",
            contacts: "Контакты",
            searchPlaceholder: "Поиск...",
            bezplatno: "Бесплатно по УЗ"
        },
        uz: {
            callCenter: "Aloqa markazi: 9:00 — 18:00 UZ",
            contactUs: "Biz bilan bog'lanish",
            location: "Toshkent, UZ",
            about: "Kompaniya haqida",
            production: "Mahsulotlar",
            news: "Yangiliklar",
            contacts: "Kontaktlar",
            searchPlaceholder: "Qidiruv...",
            bezplatno: "O'zbekiston bo'ylab bepul"
        }
    };

    const t = translations[lang];

    const navLinks = [
        { name: t.about, id: 'about' },
        { name: t.production, id: 'production', hasSub: true },
        { name: t.contacts, id: 'contacts' }
    ];

    return (
        <header className="w-full font-sans shadow-lg sticky top-0 z-50 select-none bg-white">
            {/* 1. TOP BAR - Mobil va Desktop uchun */}
            <div className="bg-[#002C5B] text-white h-auto py-2 md:h-10 flex flex-wrap items-center justify-between px-4 lg:px-12 gap-2 text-center md:text-left">
                <div className="flex items-center gap-4 md:gap-8 mx-auto md:mx-0">
                    {/* Call Center - Mobilda matni qisqaradi */}
                    <div className="flex items-center gap-2">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">
                            {t.callCenter}
                        </span>
                    </div>
                    {/* Contact Link */}
                    <div className="flex items-center gap-2 cursor-pointer group border-l border-blue-800 pl-4">
                        <Phone size={12} className="text-orange-500 group-hover:scale-110 transition-transform" />
                        <a href='tel:+998908101009' className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider group-hover:text-orange-400">
                            {t.contactUs}
                        </a>
                    </div>
                </div>

                <div className="flex items-center gap-4 md:gap-8 mx-auto md:mx-0">
                    {/* Location */}
                    <div
                        onClick={() => { setCurrentPage('contacts'); setIsMenuOpen(false); }}
                        className={`hidden sm:flex items-center gap-2 cursor-pointer transition-all hover:text-white ${currentPage === 'contacts' ? 'text-orange-500' : 'text-blue-100'}`}
                    >
                        <MapPin size={12} />
                        <span className="text-[10px] md:text-[11px] font-bold uppercase">{t.location}</span>
                    </div>

                    {/* Language Switcher */}
                    <div className="flex bg-blue-900/50 rounded p-0.5 border border-blue-800">
                        <button
                            onClick={() => setLang('ru')}
                            className={`px-3 py-0.5 rounded text-[10px] font-black cursor-pointer transition-all ${lang === 'ru' ? 'bg-orange-600 text-white' : 'text-blue-300 hover:text-white'}`}
                        >RU</button>
                        <button
                            onClick={() => setLang('uz')}
                            className={`px-3 py-0.5 rounded text-[10px] font-black cursor-pointer transition-all ${lang === 'uz' ? 'bg-orange-600 text-white' : 'text-blue-300 hover:text-white'}`}
                        >UZ</button>
                    </div>
                </div>
            </div>

            {/* 2. MAIN BAR */}
            <div className="flex h-16 md:h-20 items-center justify-between px-4 lg:px-12 border-b border-gray-100">
                {/* Logo */}
                <div className="flex items-center">
                    <img
                        onClick={() => { setCurrentPage('about'); setIsMenuOpen(false); }}
                        src="/public/light.png"
                        alt="UzAuto Trailer"
                        className="h-10 md:h-14 w-auto object-contain cursor-pointer"
                    />
                </div>

                {/* DESKTOP NAV */}
                <nav className="hidden md:flex flex-1 items-center justify-center gap-6 lg:gap-8 px-4">
                    {navLinks.map((link) => (
                        <button
                            key={link.id}
                            onClick={() => setCurrentPage(link.id)}
                            className={`flex items-center gap-1 text-[12px] lg:text-[13px] font-extrabold uppercase tracking-wide transition-colors relative group cursor-pointer ${currentPage === link.id ? 'text-[#0054A6]' : 'text-[#002C5B]'}`}
                        >
                            {link.name}
                            {link.hasSub && <ChevronDown size={14} className="mt-0.5" />}
                            <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-500 transition-all ${currentPage === link.id ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                        </button>
                    ))}
                </nav>

                {/* SEARCH & PHONE (Desktop) */}
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex flex-col items-end mr-2">
                        <span className="text-[18px] font-black text-[#002C5B] leading-none text-nowrap">8 (90) 810-10-09</span>
                        <span className="text-[8px] text-orange-600 font-bold uppercase tracking-[0.2em] mt-1">{t.bezplatno}</span>
                    </div>

                    <div className="hidden sm:relative sm:block group">
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            className="bg-gray-100 border border-gray-200 pl-4 pr-10 py-2 w-32 lg:w-48 text-xs rounded-md focus:bg-white focus:border-[#0054A6] focus:ring-4 focus:ring-blue-50 outline-none transition-all duration-300"
                        />
                        <Search className="absolute right-3 top-2.5 text-gray-400 group-hover:text-[#0054A6]" size={14} />
                    </div>

                    {/* Hamburger Button (Faqat mobilda) */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#002C5B] hover:bg-gray-100 rounded-lg transition-colors"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* 3. MOBILE MENU (Drawer) */}
            <div className={`fixed inset-0 top-[104px] bg-white z-40 transition-transform duration-300 ease-in-out md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className="flex flex-col p-6 gap-6">
                    {/* Phone for mobile menu */}
                    <div className="flex flex-col border-b border-gray-100 pb-4">
                        <span className="text-xl font-black text-[#002C5B]">8 (90) 810-10-09</span>
                        <span className="text-xs text-orange-600 font-bold uppercase">{t.bezplatno}</span>
                    </div>

                    {/* Nav Links for mobile */}
                    <div className="flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => { setCurrentPage(link.id); setIsMenuOpen(false); }}
                                className={`text-left text-lg font-black uppercase tracking-wide py-2 ${currentPage === link.id ? 'text-orange-600' : 'text-[#002C5B]'}`}
                            >
                                {link.name}
                            </button>
                        ))}
                    </div>

                    {/* Search for mobile */}
                    <div className="relative mt-4">
                        <input
                            type="text"
                            placeholder={t.searchPlaceholder}
                            className="w-full bg-gray-100 border border-gray-200 pl-4 pr-10 py-3 rounded-lg outline-none"
                        />
                        <Search className="absolute right-3 top-3.5 text-gray-400" size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;