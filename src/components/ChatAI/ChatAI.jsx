import React, { useState, useEffect, useRef } from 'react';
import { Send, X, Bot, User, MessageCircle } from 'lucide-react';
import { TRUCKS_DATA } from '../data/data';

const KamazChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [lang, setLang] = useState('uz');
  const messagesEndRef = useRef(null);

  const translations = {
    uz: {
      title: "UzAuto Yordamchi",
      online: "ONLAYN",
      placeholder: "Savolingizni yozing...",
      welcome: "Assalomu alaykum! 👋\n\nMen KAMAZ yuk mashinalari bo'yicha yordam beraman.\n\nQanday mashina kerak?",
      examples: ["🚛 Barcha mashinalar", "💰 Eng arzon", "⚡ 4x2", "💳 Lizing"]
    },
    ru: {
      title: "UzAuto Помощник",
      online: "ОНЛАЙН",
      placeholder: "Напишите вопрос...",
      welcome: "Здравствуйте! 👋\n\nЯ помогу с грузовиками КАМАЗ.\n\nКакая машина нужна?",
      examples: ["🚛 Все машины", "💰 Самая дешевая", "⚡ 4x2", "💳 Лизинг"]
    }
  };

  const detectLang = (text) => {
    const uzWords = /qanday|nima|kerak|bor|mashina|narx|arzon|lizing|barcha/i;
    return uzWords.test(text) ? 'uz' : 'ru';
  };

  const formatPrice = (price) => `${(parseInt(price) / 1000000).toFixed(1)} mln so'm`;

  const generateResponse = (input) => {
    const text = input.toLowerCase();
    const detectedLang = detectLang(text);
    setLang(detectedLang);

    // BARCHA MASHINALAR
    if (/все|барча|barcha|hammasi|какие|qanday/i.test(text)) {
      const list = TRUCKS_DATA.map((t, i) => 
        `${i+1}. ${detectedLang === 'uz' ? t.nameUz : t.name}\n   💰 ${formatPrice(t.price)}`
      ).join('\n\n');
      return detectedLang === 'uz'
        ? `📋 BIZDA ${TRUCKS_DATA.length} TA MODEL:\n\n${list}`
        : `📋 У НАС ${TRUCKS_DATA.length} МОДЕЛЕЙ:\n\n${list}`;
    }

    // ENG ARZON
    if (/дешев|арзон|arzon|kichik/i.test(text)) {
      const cheap = [...TRUCKS_DATA].sort((a,b) => parseInt(a.price) - parseInt(b.price))[0];
      return detectedLang === 'uz'
        ? `💰 ENG ARZON:\n\n🚛 ${cheap.nameUz}\n💵 ${formatPrice(cheap.price)}\n⚡ ${cheap.power} ot kuchi\n📐 ${cheap.formula}`
        : `💰 САМАЯ ДЕШЕВАЯ:\n\n🚛 ${cheap.name}\n💵 ${formatPrice(cheap.price)}\n⚡ ${cheap.power} л.с.\n📐 ${cheap.formula}`;
    }

    // FORMULA
    const formula = text.match(/([46])x([246])/i);
    if (formula) {
      const f = formula[0];
      const found = TRUCKS_DATA.filter(t => t.formula.includes(f));
      if (found.length > 0) {
        const list = found.map((t,i) => 
          `${i+1}. ${detectedLang === 'uz' ? t.nameUz : t.name}\n   💰 ${formatPrice(t.price)}`
        ).join('\n\n');
        return detectedLang === 'uz'
          ? `📐 ${f.toUpperCase()} FORMULA (${found.length} ta):\n\n${list}`
          : `📐 ФОРМУЛА ${f.toUpperCase()} (${found.length} шт):\n\n${list}`;
      }
    }

    // SAMOSVAL
    if (/самосвал|samosvol/i.test(text)) {
      const dumps = TRUCKS_DATA.filter(t => t.category === 'samosvol');
      const list = dumps.map((t,i) => 
        `${i+1}. ${detectedLang === 'uz' ? t.nameUz : t.name}\n   💰 ${formatPrice(t.price)}\n   📦 ${t.volume}m³`
      ).join('\n\n');
      return detectedLang === 'uz'
        ? `⛏️ SAMOSVALLAR (${dumps.length} ta):\n\n${list}`
        : `⛏️ САМОСВАЛЫ (${dumps.length} шт):\n\n${list}`;
    }

    // JAC
    if (/jac|жак/i.test(text)) {
      const jacs = TRUCKS_DATA.filter(t => t.category === 'jac');
      const list = jacs.map((t,i) => 
        `${i+1}. ${t.name}\n   💰 ${formatPrice(t.price)}\n   ⛽ ${detectedLang === 'uz' ? t.fuelUz : t.fuel}`
      ).join('\n\n');
      return detectedLang === 'uz'
        ? `🚐 JAC MODELLAR (${jacs.length} ta):\n\n${list}`
        : `🚐 МОДЕЛИ JAC (${jacs.length} шт):\n\n${list}`;
    }

    // LIZING
    if (/лизинг|lizing/i.test(text)) {
      return detectedLang === 'uz'
        ? `💳 LIZING:\n\n✅ Boshlang'ich: 25%\n✅ Foiz: 20%\n✅ Muddat: 36 oy\n\n📊 Misol (900 mln):\n• Boshlang'ich: 225 mln\n• Oylik: ~25 mln\n• Jami: ~1.13 mlrd`
        : `💳 ЛИЗИНГ:\n\n✅ Первоначальный: 25%\n✅ Ставка: 20%\n✅ Срок: 36 мес\n\n📊 Пример (900 млн):\n• Первоначальный: 225 млн\n• Ежемесячный: ~25 млн\n• Итого: ~1.13 млрд`;
    }

    // SALOM
    if (/привет|salom|салом/i.test(text)) {
      return detectedLang === 'uz'
        ? `Salom! 👋\n\nMen sizga yordam beraman:\n\n🚛 Mashinalar\n💰 Narxlar\n📐 Formula\n💳 Lizing`
        : `Привет! 👋\n\nЯ помогу вам с:\n\n🚛 Машины\n💰 Цены\n📐 Формула\n💳 Лизинг`;
    }

    // DEFAULT
    return detectedLang === 'uz'
      ? `Men sizga yordam bera olaman:\n\n🚛 "Barcha mashinalar"\n💰 "Arzon"\n📐 "4x2" yoki "6x6"\n💳 "Lizing"\n\nNima kerak?`
      : `Я могу помочь с:\n\n🚛 "Все машины"\n💰 "Дешевые"\n📐 "4x2" или "6x6"\n💳 "Лизинг"\n\nЧто нужно?`;
  };

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ role: 'assistant', content: translations[lang].welcome }]);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setInput('');
    
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    
    setTimeout(() => {
      const response = generateResponse(userMsg);
      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    }, 300);
  };

  const t = translations[lang];

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full p-4 shadow-2xl hover:scale-110 transition-all z-50"
        style={{ zIndex: 9999 }}
      >
        <MessageCircle size={28} />
        <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full animate-pulse"></span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 w-[420px] h-[650px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200" style={{ zIndex: 9999 }}>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white p-4 flex items-center justify-between rounded-t-2xl">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="bg-orange-500 rounded-full p-2">
              <Bot size={24} />
            </div>
            <span className="absolute bottom-0 right-0 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <h3 className="font-bold text-lg">{t.title}</h3>
            <p className="text-xs text-green-300 flex items-center gap-1">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              AI {t.online}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === 'uz' ? 'ru' : 'uz')}
            className="text-xs bg-white/20 hover:bg-white/30 px-3 py-1 rounded-full"
          >
            {lang === 'uz' ? 'RU' : 'UZ'}
          </button>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-2 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${msg.role === 'user' ? 'bg-orange-500' : 'bg-blue-600'}`}>
                {msg.role === 'user' ? <User size={18} className="text-white" /> : <Bot size={18} className="text-white" />}
              </div>
              <div className={`rounded-2xl p-3 shadow-sm ${msg.role === 'user' ? 'bg-orange-500 text-white rounded-br-none' : 'bg-white text-gray-800 rounded-bl-none border'}`}>
                <p className="text-sm whitespace-pre-wrap">{msg.content}</p>
              </div>
            </div>
          </div>
        ))}

        {messages.length === 1 && (
          <div className="space-y-2 mt-4">
            <p className="text-xs text-gray-500 font-medium px-1">Tez savollar:</p>
            {t.examples.map((ex, i) => (
              <button
                key={i}
                onClick={() => setInput(ex.replace(/[🚛💰⚡💳]/g, '').trim())}
                className="w-full text-left text-sm bg-white hover:bg-blue-50 text-gray-700 p-3 rounded-xl border transition-colors"
              >
                {ex}
              </button>
            ))}
          </div>
        )}
        
        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 bg-white border-t">
        <div className="flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder={t.placeholder}
            className="flex-1 px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-3 rounded-xl disabled:opacity-50 transition-all"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default KamazChatAssistant;