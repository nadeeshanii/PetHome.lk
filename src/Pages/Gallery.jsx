import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { colors } from '../theme/colors';

function Pets() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState('All');

  const pets = [
    // Dogs
    { id: 1, name: 'Spot', age: '2 years', type: 'Dog', image: '/d1.jpg' },
    { id: 2, name: 'Max', age: '1.5 years', type: 'Dog', image: '/d2.jpg' },
    { id: 3, name: 'Rocky', age: '3 years', type: 'Dog', image: '/d3.jpg' },
    { id: 4, name: 'Lucky', age: '2 years', type: 'Dog', image: '/d4.jpg' },
    { id: 5, name: 'Bella', age: '1 year', type: 'Dog', image: '/d5.jpg' },

    // Kittens
    { id: 6, name: 'Whiskers', age: '6 months', type: 'Kitten', image: '/k1.jpg' },
    { id: 7, name: 'Mittens', age: '1 year', type: 'Kitten', image: '/k2.jpg' },
    { id: 8, name: 'Luna', age: '8 months', type: 'Kitten', image: '/k3.jpg' },
    { id: 9, name: 'Oreo', age: '1 year', type: 'Kitten', image: '/k4.jpg' },

    // Birds
    { id: 10, name: 'Tweety', age: '1 year', type: 'Bird', image: '/b1.jpg' },
    { id: 11, name: 'Kiwi', age: '2 years', type: 'Bird', image: '/b2.jpg' },
    { id: 12, name: 'Sunny', age: '6 months', type: 'Bird', image: '/b3.jpg' },
  ];

  const filteredPets = filter === 'All' ? pets : pets.filter(p => p.type === filter);

  return (
    <div className="w-full font-poppins bg-[#fff9f7] py-10 px-6 md:px-20">
      <h2 className="text-3xl font-black mb-6 text-center" style={{ color: colors.bistre }}>
        Meet Our Lovely Pets
      </h2>

      {/* Filter Bar */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {['All', 'Dog', 'Kitten', 'Bird'].map((type) => (
          <button
            key={type}
            onClick={() => setFilter(type)}
            className={`px-5 py-2 rounded-full font-bold text-sm transition-all transform ${
              filter === type
                ? 'bg-[#3D211A] text-white shadow-md scale-105'
                : 'bg-white text-[#3D211A] border border-[#3D211A] hover:bg-[#3D211A] hover:text-white hover:scale-105'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Pet Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredPets.map((pet) => (
          <div
            key={pet.id}
            className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all cursor-pointer"
             onClick={() => navigate(`/pet/${pet.id}`)} // Navigate to pet details page
          >
            <div className="w-full h-48 overflow-hidden">
              <img
                src={pet.image}
                alt={pet.name}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <div className="p-3 text-center">
              <h3 className="text-lg font-black mb-1" style={{ color: colors.bistre }}>
                {pet.name}
              </h3>
              <p className="text-xs text-gray-400">{pet.age} • {pet.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Pets;
