import React from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../theme/colors'; 
import { Phone, Clock, ChevronRight, Search, Heart, Award, CheckCircle2 } from 'lucide-react';
import Footer from '../components/Footer';

function Home() {
  const navigate = useNavigate();

  const stats = [
    { id: 1, label: 'Experience', value: '25+', icon: '💙' },
    { id: 2, label: 'Care Takers', value: '30+', icon: '👥' },
    { id: 3, label: 'Reviews', value: '500+', icon: '👍' },
    { id: 4, label: 'Happy Pets', value: '260+', icon: '🐾' },
  ];

  return (
    <div className="w-full font-poppins bg-white">
      
      {/* --- PAGE 1: HERO & ICON BAR --- */}
      <div className="h-[calc(100vh-56px)] w-full flex flex-col overflow-hidden">
        <div className="w-full py-1 px-10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-white" style={{ backgroundColor: colors.coffee }}>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1"><Phone size={12} /> 07923213492</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} /> MONDAY-FRIDAY 8AM-5PM
          </div>
        </div>

        <section className="flex-grow flex items-center relative px-10 overflow-hidden" style={{ backgroundColor: '#F8FAFC' }}>
          <div className="max-w-7xl mx-auto w-full flex items-center justify-between h-full">
            <div className="w-[65%] z-10">
              <h2 className="text-2xl font-black mb-2" style={{ color: colors.chamois }}>Welcome to</h2>
              <h1 className="text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.1]" style={{ color: colors.bistre }}>
                PET HOME<span style={{ color: colors.chamois }}>.LK</span>
              </h1>
              <p className="text-xl mb-10 max-w-lg font-bold leading-relaxed text-gray-500">
                Premium, reliable & trustworthy adoption services. 
                Connecting responsible owners with loving companions.
              </p>
              <div className="flex items-center gap-6">
                <button 
  onClick={() => navigate('/gallery')} 
  className="px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest text-white transition-all shadow-2xl hover:scale-105 active:scale-95"
  style={{ backgroundColor: colors.coffee }}
>
  Explore Gallery
</button>

<button 
  onClick={() => navigate('/about')}
  className="px-10 py-5 rounded-full font-black text-xs uppercase tracking-widest border-4 transition-all hover:bg-gray-50"
  style={{ borderColor: colors.khaki, color: colors.bistre }}
>
  About Us
</button>
              </div>
            </div>

            <div className="w-[35%] h-full flex items-center justify-center relative">
              <div className="absolute w-[400px] h-[400px] rounded-full opacity-10" style={{ backgroundColor: colors.khaki }}></div>
              <img src="/pet.png" alt="Pet" className="relative z-10 w-full h-auto object-contain drop-shadow-2xl scale-110" />
            </div>
          </div>
        </section>

        <section className="w-full py-6 bg-white border-t border-gray-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-10 flex justify-between items-center">
            {stats.map((stat) => (
              <div key={stat.id} className="flex items-center gap-4">
                <div className="text-3xl">{stat.icon}</div>
                <div className="flex flex-col">
                  <span className="text-3xl font-black leading-none" style={{ color: colors.bistre }}>{stat.value}</span>
                  <span className="text-[11px] font-black uppercase tracking-widest text-gray-400">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* --- PAGE 2: MISSION (Simple & Bold) --- */}
<section className="h-screen w-full flex items-center px-20 bg-white">
  <div className="max-w-6xl mx-auto w-full flex items-center gap-16">
    
    {/* Image */}
    <div className="w-5/12">
      <img 
        src="/my.png" 
        className="w-full rounded-[60px] aspect-[4/5]" 
        alt="Mission" 
      />
    </div>

    {/* Content */}
    <div className="w-7/12">

      {/* Main Heading */}
      <h2 
        className="text-5xl font-black mb-4 leading-tight"
        style={{ color: colors.bistre }}
      >
        WE TREAT THEM <br/>
        <span style={{ color: colors.coffee }}>LIKE FAMILY</span>
      </h2>

      {/* Sub Heading */}
      <p className="text-lg font-semibold text-gray-500 mb-8 max-w-xl">
        Your pet’s journey to a forever home starts with expert care and a lot of love.
      </p>

      {/* Why Us Points */}
      <div className="space-y-5">
        
        <div className="flex items-start gap-4">
          <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: colors.coffee }}></div>
          <p className="text-base font-semibold text-gray-600">
            <span className="font-black" style={{ color: colors.bistre }}>Health First:</span> Every pet is medically cleared.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: colors.coffee }}></div>
          <p className="text-base font-semibold text-gray-600">
            <span className="font-black" style={{ color: colors.bistre }}>Pure Love:</span> We focus on temperament and social skills.
          </p>
        </div>

        <div className="flex items-start gap-4">
          <div className="w-3 h-3 rounded-full mt-2" style={{ backgroundColor: colors.coffee }}></div>
          <p className="text-base font-semibold text-gray-600">
            <span className="font-black" style={{ color: colors.bistre }}>Always Here:</span> Lifetime support for every owner.
          </p>
        </div>

      </div>
    </div>

  </div>
</section>


 {/* --- PAGE 3: ADOPTION PROCESS --- */}
<div className="flex-grow flex flex-col justify-center items-center w-full px-6 md:px-10">

  {/* Section Title */}
  <div className="text-center mb-10">
    <h2 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight" style={{ color: colors.bistre }}>
      Adoption Pathway
    </h2>
    <div className="w-20 md:w-24 h-1.5 mx-auto rounded-full" style={{ backgroundColor: colors.chamois }}></div>
  </div>

  {/* Steps Grid */}
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl w-full">

    {[
      { step: '01', title: 'CURATED SEARCH', desc: 'Browse our exclusive gallery of socialized pets.', icon: <Search size={32} /> },
      { step: '02', title: 'PERFECT MATCH', desc: 'Complete our form to ensure a lifelong bond.', icon: <Heart size={32} /> },
      { step: '03', title: 'WELCOME HOME', desc: 'Finalize paperwork and start your journey.', icon: <Award size={32} /> }
    ].map((item, idx) => (
      <div
        key={idx}
        className="flex flex-col items-center text-center p-6 md:p-8 bg-white rounded-2xl border border-gray-100 hover:scale-105 transition-transform duration-300"
      >
        {/* Icon */}
        <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-4 md:mb-6" style={{ backgroundColor: colors.beige, color: colors.coffee }}>
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-black mb-2 uppercase tracking-wide" style={{ color: colors.bistre }}>
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-sm md:text-base font-medium text-gray-600">
          {item.desc}
        </p>
      </div>
    ))}

  </div>
</div>

    </div>
  );
}

export default Home;