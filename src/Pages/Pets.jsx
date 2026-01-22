import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { colors } from '../theme/colors';

// Pet Data
const pets = [
  { id: 1, name: 'Spot', age: '2 years', gender: 'Male', breed: 'Mixed', vaccinated: 'Yes', neutered: 'Yes', temperament: 'Friendly', type: 'Dog', image: '/d1.jpg' },
  { id: 2, name: 'Max', age: '1.5 years', gender: 'Male', breed: 'Mixed', vaccinated: 'Yes', neutered: 'No', temperament: 'Playful', type: 'Dog', image: '/d2.jpg' },
  { id: 3, name: 'Rocky', age: '3 years', gender: 'Male', breed: 'Mixed', vaccinated: 'Yes', neutered: 'Yes', temperament: 'Calm', type: 'Dog', image: '/d3.jpg' },
  { id: 4, name: 'Lucky', age: '2 years', gender: 'Female', breed: 'Mixed', vaccinated: 'Yes', neutered: 'Yes', temperament: 'Energetic', type: 'Dog', image: '/d4.jpg' },
  { id: 5, name: 'Bella', age: '1 year', gender: 'Female', breed: 'Mixed', vaccinated: 'No', neutered: 'No', temperament: 'Loving', type: 'Dog', image: '/d5.jpg' },
];

export default function Pets() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showForm, setShowForm] = useState(false);

  const pet = pets.find(p => p.id === parseInt(id));

  if (!pet) {
    return (
      <div className="flex flex-col items-center justify-center h-[70vh]">
        <h2 className="text-3xl font-black mb-4" style={{ color: colors.bistre }}>
          Pet Not Found
        </h2>
        <button
          onClick={() => navigate('/gallery')}
          className="px-6 py-2 rounded-full bg-[#3D211A] text-white font-bold"
        >
          Back to Gallery
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-[#fff9f7] py-10 px-6 md:px-16 font-poppins">

      <button
        onClick={() => navigate('/gallery')}
        className="mb-6 px-5 py-2 rounded-full bg-[#3D211A] text-white font-bold hover:bg-[#3d1d28]"
      >
        ← Back to Gallery
      </button>

      {/* ===== MAIN AREA ===== */}
      <div className="flex flex-col md:flex-row gap-8 items-start">

        {/* LEFT : Image (Smaller) */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={pet.image}
            alt={pet.name}
            className="w-[280px] h-auto rounded-xl object-cover"
          />
        </div>

        {/* RIGHT : Details OR Form */}
        <div className="md:w-1/2">

          {!showForm ? (
            // ===== PET DETAILS =====
            <div className="space-y-4">

              <h2 className="text-3xl font-black" style={{ color: colors.bistre }}>
                {pet.name}
              </h2>

              {/* Two Column Info */}
              <div className="grid grid-cols-2 gap-y-3 text-[18px] text-gray-700 font-medium">

                <p><span className="font-bold">Age:</span> {pet.age}</p>
                <p><span className="font-bold">Gender:</span> {pet.gender}</p>
                <p><span className="font-bold">Breed:</span> {pet.breed}</p>
                <p><span className="font-bold">Vaccinated:</span> {pet.vaccinated}</p>
                <p><span className="font-bold">Neutered:</span> {pet.neutered}</p>
                <p><span className="font-bold">Temperament:</span> {pet.temperament}</p>
              </div>

              <p className="text-[18px] text-gray-600 pt-2 leading-relaxed">

                This lovely rescue pet is looking for a forever home. 
                Gentle, social, and ready to become part of your family.
              </p>

              <button
                onClick={() => setShowForm(true)}
                className="mt-4 px-6 py-2 rounded-full bg-[#3D211A] text-white font-bold hover:bg-[#3d1d28]"
              >
                Adopt Me
              </button>

            </div>
          ) : (
            // ===== ADOPTION FORM =====
            <div className="bg-white p-5 rounded-xl shadow-md">

              <h3 className="text-xl font-black mb-4" style={{ color: colors.bistre }}>
                Adoption Form – {pet.name}
              </h3>

              <form className="space-y-3 text-[18px]">


                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-md p-2"
                  required
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full border rounded-md p-2"
                  required
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full border rounded-md p-2"
                  required
                />

                <textarea
                  placeholder="Why would you like to adopt?"
                  className="w-full border rounded-md p-2 h-24"
                  required
                ></textarea>

                <div className="flex gap-3 pt-2">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 rounded-full bg-[#3D211A] text-white font-bold hover:bg-[#3d1d28]"
                  >
                    Submit
                  </button>

                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="flex-1 px-4 py-2 rounded-full bg-gray-300 font-bold hover:bg-gray-400"
                  >
                    Cancel
                  </button>
                </div>

              </form>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
