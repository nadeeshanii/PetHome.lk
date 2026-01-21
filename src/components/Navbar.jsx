import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { colors } from '../theme/colors';
import { PawPrint } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full h-14 bg-white/95 backdrop-blur-md border-b border-gray-100 px-10 flex items-center justify-between z-50 sticky top-0">
      
      {/* --- LOGO & BRAND NAME --- */}
      <Link to="/" className="flex items-center gap-3 group">
        <div className="p-1.5 rounded-lg transition-all group-hover:scale-110" style={{ backgroundColor: colors.beige }}>
          <PawPrint size={20} style={{ color: colors.bistre }} />
        </div>
        {/* Brand Name in one line near logo */}
        <span className="text-lg font-black tracking-tight flex items-center gap-1" style={{ color: colors.bistre }}>
          PET HOME<span style={{ color: colors.chamois }}>.LK</span>
        </span>
      </Link>

      {/* --- NAVIGATION LINKS (Enhanced Typography) --- */}
      <div className="hidden md:flex items-center gap-10">
        {['HOME', 'ABOUT', 'GALLERY', 'CONTACT'].map((item) => (
          <Link 
            key={item}
            to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`} 
            className="text-[13px] font-extrabold tracking-[0.1em] transition-all hover:opacity-60 relative group"
            style={{ color: colors.bistre }}
          >
            {item}
            {/* Animated underline for better interaction */}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 transition-all group-hover:w-full" style={{ backgroundColor: colors.chamois }}></span>
          </Link>
        ))}
      </div>

      {/* --- ACTION BUTTON --- */}
      <button 
        onClick={() => navigate('/login')}
        className="px-8 py-2 rounded-lg text-[12px] font-black tracking-widest text-white transition-all shadow-md hover:shadow-lg active:scale-95"
        style={{ backgroundColor: colors.coffee }}
      >
        SIGN IN
      </button>
      
    </nav>
  );
}

export default Navbar;