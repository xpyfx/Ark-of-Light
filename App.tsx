import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { PageSection, NewsItem, Creator, TicketType } from './types';
import { NEWS_DATA, CREATORS_DATA, TICKET_DATA } from './constants';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  ArrowRight, 
  Train, 
  Bus, 
  Navigation, 
  CreditCard, 
  Ticket, 
  HelpCircle,
  Mail,
  Instagram,
  Facebook,
  Twitter,
  Sprout,
  Users
} from 'lucide-react';

// Sub-components are defined here to keep the structure flat for this specific artifact request,
// but in a real project would be in separate files.

const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
  <div className="mb-16 text-center animate-slide-up">
    <h2 className="text-gold text-sm tracking-[0.5em] mb-4 uppercase font-sans">{subtitle}</h2>
    <h3 className="text-4xl md:text-5xl font-serif text-white tracking-wider">{title}</h3>
    <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent mx-auto mt-8"></div>
  </div>
);

const HomeSection: React.FC = () => (
  <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://picsum.photos/1920/1080?grayscale&blur=2" 
        alt="Background" 
        className="w-full h-full object-cover opacity-30 scale-105 animate-[pulse_10s_ease-in-out_infinite]" 
      />
      <div className="absolute inset-0 bg-gradient-to-b from-void/50 via-void/50 to-void"></div>
    </div>
    
    <div className="container mx-auto px-6 relative z-10 text-center">
      <div className="animate-fade-in space-y-8">
        <p className="text-gold tracking-[0.5em] text-sm md:text-base uppercase">The Intersection of Art & Nature</p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-display text-white tracking-widest leading-none">
          光影<br/><span className="text-stroke text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">之舟</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-4xl mx-auto border-t border-white/10 pt-8">
          <div className="text-center">
            <p className="text-xs text-gray-500 tracking-widest mb-2">VISITORS TODAY</p>
            <p className="text-2xl font-serif text-gold">23,405</p>
          </div>
          <div className="text-center md:border-l md:border-r border-white/10">
            <p className="text-xs text-gray-500 tracking-widest mb-2">CURRENT EXHIBITION</p>
            <p className="text-xl font-serif text-white">流動的記憶</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-gray-500 tracking-widest mb-2">OPENING HOURS</p>
            <p className="text-xl font-serif text-white">10:00 - 22:00</p>
          </div>
        </div>

        <div className="mt-16 text-xs text-gray-600 tracking-widest">
          <p>主辦單位：文化部 | 執行單位：光影工作室 | 合作單位：在地農產協會</p>
        </div>
      </div>
    </div>
  </div>
);

const NewsSection: React.FC = () => (
  <div className="py-32 bg-charcoal relative">
    <div className="container mx-auto px-6">
      <SectionTitle title="最新消息" subtitle="Latest News" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {NEWS_DATA.map((news) => (
          <div key={news.id} className="group bg-void border border-white/5 p-8 hover:border-gold/30 transition-all duration-300 hover:-translate-y-2">
            <div className="flex justify-between items-start mb-6">
              <span className={`px-3 py-1 text-xs tracking-wider border ${news.category === '官方消息' ? 'border-white/20 text-white' : 'border-red-900/50 text-red-400'}`}>
                {news.category}
              </span>
              <span className="text-gray-500 text-sm font-serif">{news.date}</span>
            </div>
            <h4 className="text-xl font-serif text-white mb-4 group-hover:text-gold transition-colors">{news.title}</h4>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">{news.summary}</p>
            <button className="flex items-center gap-2 text-xs text-gold tracking-widest uppercase hover:gap-4 transition-all">
              Read More <ArrowRight size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const CreatorsSection: React.FC = () => (
  <div className="py-32 bg-void">
    <div className="container mx-auto px-6">
      <SectionTitle title="創作者與IP" subtitle="Artists & Creators" />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t border-l border-gold/30"></div>
          <img src="https://picsum.photos/800/600" alt="Exhibition" className="w-full grayscale hover:grayscale-0 transition-all duration-700" />
          <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b border-r border-gold/30"></div>
        </div>
        <div className="space-y-8">
          <h3 className="text-3xl font-serif text-white">關於展覽</h3>
          <p className="text-gray-400 leading-loose">
            本次展覽匯集了國內外十二組頂尖創作者，透過光影科技與自然地景的對話，重新詮釋這片土地的歷史記憶。
            從沈浸式投影到互動裝置，每一個角落都是一個故事的開始。
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="px-4 py-2 bg-white/5 text-sm text-gray-300">#數位藝術</span>
            <span className="px-4 py-2 bg-white/5 text-sm text-gray-300">#互動裝置</span>
            <span className="px-4 py-2 bg-white/5 text-sm text-gray-300">#地方創生</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border-t border-white/10">
        {CREATORS_DATA.map((creator, idx) => (
          <div key={creator.id} className={`p-8 md:p-12 border-b md:border-r border-white/10 hover:bg-white/5 transition-colors group ${idx % 3 === 2 ? 'md:border-r-0' : ''}`}>
             <div className="w-20 h-20 rounded-full overflow-hidden mb-6 opacity-80 group-hover:opacity-100 transition-opacity">
               <img src={creator.imageUrl} alt={creator.name} className="w-full h-full object-cover" />
             </div>
             <h4 className="text-xl font-serif text-white mb-2">{creator.name}</h4>
             <p className="text-gold text-xs tracking-widest mb-4 uppercase">{creator.role}</p>
             <p className="text-gray-500 text-sm leading-relaxed">{creator.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const AgriSection: React.FC = () => (
  <div className="py-32 bg-stone-900 relative overflow-hidden">
     <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-black/50 to-transparent"></div>
     <div className="container mx-auto px-6 relative z-10">
       <div className="flex flex-col md:flex-row items-center gap-16">
         <div className="md:w-1/2">
            <SectionTitle title="農產推廣" subtitle="Local Agriculture" />
            <p className="text-gray-300 leading-loose mb-8">
              我們深信，土地是最好的藝術家。光影之舟不僅是視覺的饗宴，更是味蕾的旅程。
              我們精選在地當季農產，結合設計美學，推出一系列限定商品。
            </p>
            <button className="flex items-center gap-3 px-8 py-3 bg-gold text-void font-bold tracking-widest hover:bg-white transition-colors">
              <Sprout size={18} /> 查看市集攤位
            </button>
         </div>
         <div className="md:w-1/2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/400/400?random=1" className="w-full h-64 object-cover" alt="Product 1" />
            <img src="https://picsum.photos/400/400?random=2" className="w-full h-64 object-cover mt-8" alt="Product 2" />
         </div>
       </div>
     </div>
  </div>
);

const MapSection: React.FC = () => (
  <div className="py-32 bg-void">
    <div className="container mx-auto px-6">
      <SectionTitle title="園區地圖" subtitle="Exploration Guide" />
      
      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3 bg-charcoal p-4 rounded-sm border border-white/10 relative group overflow-hidden">
           {/* Placeholder for Map */}
           <div className="aspect-video bg-gray-900 relative flex items-center justify-center">
             <img src="https://picsum.photos/1200/800?grayscale" alt="Map" className="opacity-40 w-full h-full object-cover" />
             <div className="absolute inset-0 flex items-center justify-center">
               <span className="text-gray-500 tracking-widest border border-gray-500 px-4 py-2">INTERACTIVE MAP COMING SOON</span>
             </div>
             
             {/* Fake Map Markers */}
             <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gold rounded-full animate-ping"></div>
             <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-gold rounded-full flex items-center justify-center text-[10px] text-black font-bold">A</div>
             
             <div className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-white rounded-full flex items-center justify-center text-[10px] text-black font-bold">B</div>
           </div>
        </div>
        
        <div className="lg:w-1/3 space-y-8">
          <div className="border-l-2 border-gold pl-6">
            <h4 className="text-xl text-white font-serif mb-2">A. 水上展覽動線</h4>
            <p className="text-sm text-gray-500">主展區，需購票入場。體驗約45分鐘。</p>
          </div>
          <div className="border-l-2 border-gray-700 pl-6">
            <h4 className="text-xl text-white font-serif mb-2">B. 市集與貨櫃區</h4>
            <p className="text-sm text-gray-500">免費開放區域，提供餐飲與文創商品。</p>
          </div>
          <div className="border-l-2 border-gray-700 pl-6">
            <h4 className="text-xl text-white font-serif mb-2">售票處與服務台</h4>
            <p className="text-sm text-gray-500">位於園區入口處與C區廣場。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const TransportSection: React.FC = () => (
  <div className="py-32 bg-charcoal">
    <div className="container mx-auto px-6">
      <SectionTitle title="交通資訊" subtitle="Getting Here" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="p-8 bg-void border border-white/5 hover:border-gold/30 transition-all">
          <Train className="w-10 h-10 text-gold mb-6" />
          <h4 className="text-lg text-white font-bold mb-4">捷運 / Metro</h4>
          <ul className="text-gray-400 text-sm space-y-3">
            <li>• 搭乘紅線至 R16 左營站</li>
            <li>• 轉乘接駁車 (每15分鐘一班)</li>
            <li>• 步行約 10 分鐘抵達入口</li>
          </ul>
        </div>
        
        <div className="p-8 bg-void border border-white/5 hover:border-gold/30 transition-all">
          <Bus className="w-10 h-10 text-gold mb-6" />
          <h4 className="text-lg text-white font-bold mb-4">公車 / Bus</h4>
          <ul className="text-gray-400 text-sm space-y-3">
             <li>• 301路 光影專車</li>
             <li>• 205路 中華幹線</li>
             <li>• 下車點：光影公園站</li>
          </ul>
        </div>

        <div className="p-8 bg-void border border-white/5 hover:border-gold/30 transition-all">
          <Navigation className="w-10 h-10 text-gold mb-6" />
          <h4 className="text-lg text-white font-bold mb-4">交通管制</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            展演期間，園區周邊實施交通管制。
            <br/><br/>
            平日：18:00 - 22:00<br/>
            假日：14:00 - 23:00<br/>
            禁止自用車進入核心區域。
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TicketsSection: React.FC = () => (
  <div className="py-32 bg-void">
    <div className="container mx-auto px-6">
      <SectionTitle title="購票資訊" subtitle="Tickets" />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {TICKET_DATA.map((ticket, idx) => (
          <div key={idx} className={`relative p-8 flex flex-col ${idx === 1 ? 'bg-white text-black' : 'bg-charcoal text-white border border-white/10'}`}>
            {idx === 1 && <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold text-black text-xs font-bold px-4 py-1 tracking-widest uppercase">Best Value</div>}
            
            <h4 className="text-2xl font-serif mb-2">{ticket.name}</h4>
            <p className={`text-sm mb-8 ${idx === 1 ? 'text-gray-600' : 'text-gray-500'}`}>{ticket.description}</p>
            
            <div className="mb-8">
              <span className="text-4xl font-bold font-sans">NT$ {ticket.price}</span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-1">
              {ticket.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-center gap-3 text-sm">
                  <span className={`w-1.5 h-1.5 rounded-full ${idx === 1 ? 'bg-black' : 'bg-gold'}`}></span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 text-sm font-bold tracking-widest border transition-all
              ${idx === 1 
                ? 'bg-black text-white border-black hover:bg-gray-800' 
                : 'border-white/20 hover:bg-gold hover:text-black hover:border-gold'}`}>
              SELECT
            </button>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>退票政策：活動前7天可全額退款，前3天退50%，活動當日不予退款。</p>
        <div className="flex justify-center gap-4 mt-4">
           <span className="flex items-center gap-2"><CreditCard size={14}/> 線上刷卡</span>
           <span className="flex items-center gap-2"><Ticket size={14}/> 現場購票</span>
        </div>
      </div>
    </div>
  </div>
);

const ContactSection: React.FC = () => (
  <div className="py-24 bg-black border-t border-white/10">
    <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
      <div>
        <h4 className="text-gold text-sm tracking-widest uppercase mb-8">FAQ</h4>
        <div className="space-y-6">
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-white font-serif list-none">
              <span>是否可以攜帶寵物？</span>
              <span className="transition group-open:rotate-180">v</span>
            </summary>
            <p className="text-gray-500 text-sm mt-4 pl-4 border-l border-white/10">
              僅限導盲犬進入展區。戶外市集區開放寵物，但需全程繫繩。
            </p>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-white font-serif list-none">
              <span>有提供無障礙設施嗎？</span>
              <span className="transition group-open:rotate-180">v</span>
            </summary>
            <p className="text-gray-500 text-sm mt-4 pl-4 border-l border-white/10">
              全園區皆設有無障礙坡道，服務台提供輪椅租借服務。
            </p>
          </details>
          <details className="group">
            <summary className="flex justify-between items-center cursor-pointer text-white font-serif list-none">
              <span>攝影規定？</span>
              <span className="transition group-open:rotate-180">v</span>
            </summary>
            <p className="text-gray-500 text-sm mt-4 pl-4 border-l border-white/10">
              歡迎拍照，但禁止使用腳架、閃光燈，以免影響觀展體驗與作品保存。
            </p>
          </details>
        </div>
      </div>

      <div>
        <h4 className="text-gold text-sm tracking-widest uppercase mb-8">Contact</h4>
        <div className="space-y-4 text-gray-400">
          <p className="text-white text-xl font-serif">光影工作室</p>
          <p>service@arkoflight.tw</p>
          <p>+886 2 2345 6789</p>
          <div className="flex gap-4 mt-8">
            <Instagram className="text-white hover:text-gold cursor-pointer transition-colors" />
            <Facebook className="text-white hover:text-gold cursor-pointer transition-colors" />
            <Twitter className="text-white hover:text-gold cursor-pointer transition-colors" />
            <Mail className="text-white hover:text-gold cursor-pointer transition-colors" />
          </div>
        </div>
      </div>
    </div>
    
    <div className="container mx-auto px-6 mt-24 pt-8 border-t border-white/5 text-center text-xs text-gray-700">
      &copy; 2023 ARK OF LIGHT. All Rights Reserved. Designed for Art.
    </div>
  </div>
);

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<PageSection>(PageSection.HOME);

  // Function to render content based on active section
  const renderContent = () => {
    switch (currentSection) {
      case PageSection.HOME:
        return <HomeSection />;
      case PageSection.NEWS:
        return <NewsSection />;
      case PageSection.CREATORS:
        return <CreatorsSection />;
      case PageSection.AGRI:
        return <AgriSection />;
      case PageSection.MAP:
        return <MapSection />;
      case PageSection.TRANSPORT:
        return <TransportSection />;
      case PageSection.TICKETS:
        return <TicketsSection />;
      case PageSection.CONTACT:
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <div className="bg-void min-h-screen text-gray-200 selection:bg-gold selection:text-black">
      <Navbar currentSection={currentSection} onNavigate={setCurrentSection} />
      
      <main className="transition-opacity duration-500 ease-in-out">
        {/* For a "Museum" feel, we might want to animate the transition between sections */}
        <div key={currentSection} className="animate-fade-in">
           {renderContent()}
        </div>
      </main>

      {/* Persistent Footer only if not on home, or always? Let's keep it simple for now, 
          Contact Section acts as footer for Contact page, but others need a small one. 
          Actually, let's just make the pages full height or scrollable. */}
    </div>
  );
};

export default App;