import React from 'react';
import { Heart, Award, Shield } from 'lucide-react';
import Footer from '../components/Footer';
import { colors } from '../theme/colors';

function About() {
  const highlights = [
    { id: 1, icon: <Shield size={28} />, title: 'Health First', desc: 'Every pet is medically cleared for adoption.' },
    { id: 2, icon: <Heart size={28} />, title: 'Pure Love', desc: 'We focus on temperament and social skills.' },
    { id: 3, icon: <Award size={28} />, title: 'Always Here', desc: 'Lifetime support for every pet owner.' },
  ];

  const directors = [
    { id: 1, name: 'Sanchana Peris', role: 'Founder', photo: '/A.jpg' },
    { id: 2, name: 'Shani Fernando', role: 'Co-Founder', photo: '/B.jpg' },
    { id: 3, name: 'A.D.Bandara', role: 'Operations', photo: '/D.jpg' },
    { id: 4, name: 'Kushani Sneha', role: 'Care Specialist', photo: '/E.jpg' },
  ];

  return (
    <div className="w-full font-poppins bg-[#fff9f7]">

      {/* --- OUR STORY / INTRODUCTION --- */}
<section className="w-full py-6 px-6 md:px-20 flex flex-col md:flex-row items-start gap-6">
  <div className="md:w-1/2">
    <h2 className="text-3xl font-black mb-3" style={{ color: colors.bistre }}>
      Our Story
    </h2>
    <p className="text-base text-gray-600 leading-relaxed mb-2">
      Founded with love and passion, Pet Home Adoption connects soulful pets with caring families.
       From the very beginning, our mission has been to provide a safe and nurturing environment where pets can thrive and develop 
       the social skills they need to feel comfortable in their forever homes.
    </p>
    <p className="text-base text-gray-600 leading-relaxed">
     We believe every animal deserves a forever home and a life full of care, affection, and happiness. 
     That’s why we work tirelessly to ensure that each pet receives medical attention, proper nutrition, and plenty of love and attention. 
    </p>
  </div>
   <div className="md:w-1/2 flex justify-center items-start">
  <img
    src="/2.jpg"
    alt="Our Story"
    className="w-auto h-auto max-h-[220px] rounded-xl object-cover"
  />
</div>
</section>

{/* --- MISSION & VISION --- */}
<section className="w-full py-6 px-6 md:px-20 flex flex-col md:flex-row items-start gap-6 bg-[#fff9f7]">
  <div className="md:w-1/2 flex justify-center">
    <img
      src="/8.jpg"
      alt="Mission & Vision"
      className="h-auto max-h-[160px] rounded-xl object-cover"
    />
  </div>
  <div className="md:w-1/2">
    <h2 className="text-3xl font-black mb-3" style={{ color: colors.bistre }}>
      We Treat Them Like Family
    </h2>
    <p className="text-base text-gray-600 mb-2">
      Your pet’s journey to a forever home starts with expert care and a lot of love.
    </p>
    <p className="text-base text-gray-600">
      Every pet is nurtured, socialized, and guided to ensure a smooth transition into their new loving home.
    </p>
  </div>
</section>


      {/* --- WHY CHOOSE US / HIGHLIGHTS --- */}
<section className="w-full py-12 px-6 md:px-20 text-center bg-[#fcfbf8]">
  <h2 className="text-3xl font-black mb-8" style={{ color: colors.bistre }}>
    Why Choose Us
  </h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
    {highlights.map((item) => (
      <div
        key={item.id}
        className="flex flex-col items-center p-6 rounded-xl bg-[#f7eede] hover:bg-[#f4e7d8] transition-all shadow-sm"
      >
        {/* Circular icon container */}
        <div className="w-14 h-14 mb-3 flex items-center justify-center rounded-full bg-[#5d2d3c]/20 text-[#5d2d3c]">
          {item.icon}
        </div>

        <h3 className="text-lg font-black mb-1" style={{ color: colors.bistre }}>
          {item.title}
        </h3>
        <p className="text-gray-600 text-sm">{item.desc}</p>
      </div>
    ))}
  </div>
</section>

      {/* --- DIRECTORS / TEAM --- */}
      <section className="w-full py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-black mb-8" style={{ color: colors.bistre }}>
          Our Directors
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {directors.map((dir) => (
            <div key={dir.id} className="flex flex-col items-center">
              <img
                src={dir.photo}
                alt={dir.name}
                className="w-28 h-28 rounded-full object-cover mb-3"
              />
              <h3 className="text-lg font-black" style={{ color: colors.bistre }}>{dir.name}</h3>
              <p className="text-sm text-gray-500">{dir.role}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}

export default About;
