import React from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const colors = {
    screenBg: '#fff9f7', // Light warm page background
    cardBg: '#ffffff',    // Form container light
    accent: '#3D211A'     // Dark brown accent for buttons and highlights
  };

  return (
    <div className="h-full w-full flex items-center justify-center p-6 font-poppins" style={{ backgroundColor: colors.screenBg }}>
      
      {/* Boutique Container */}
      <div className="max-w-4xl w-full h-full max-h-[480px] rounded-[40px] overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-200">
        
        {/* Left Side: Image Asset */}
        <div className="md:w-5/12 relative overflow-hidden">
          <img 
            src="/log.png" 
            alt="Boutique Pet" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Form */}
        <div className="md:w-7/12 p-10 flex flex-col justify-center" style={{ backgroundColor: colors.cardBg }}>
          <div className="mb-8">
            <h3 className="text-3xl font-black text-[#3d1d28] tracking-tight">Sign In</h3>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3D211A] mt-1 opacity-90">
              Premium Member Access
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            {/* Email Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3d1d28] ml-1 opacity-80">Email Address</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="email" 
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm text-gray-900 focus:ring-2 focus:ring-[#5d2d3c] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3d1d28] ml-1 opacity-80">Password</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input 
                  type="password" 
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-4 pl-12 pr-4 text-sm text-gray-900 focus:ring-2 focus:ring-[#5d2d3c] focus:border-transparent outline-none transition-all"
                />
              </div>
            </div>

            {/* Sign In Button */}
            <button 
              onClick={() => navigate('/')}
              className="w-full bg-[#3D211A] text-[#fff9f7] py-4 mt-2 rounded-2xl font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#3d1d28] transition-all shadow-md active:scale-95"
            >
              Sign In <ArrowRight size={18} />
            </button>
          </form>

          {/* Footer Links */}
          <div className="mt-8 flex justify-between items-center text-xs font-bold">
            <span 
              onClick={() => navigate('/forgot-password')} 
              className="text-gray-500 cursor-pointer hover:text-[#3D211A] transition-colors"
            >
              Forgot Password ?
            </span>
            <span 
              onClick={() => navigate('/register')} 
              className="text-[#3D211A] font-bold cursor-pointer uppercase tracking-widest border-b-2 border-transparent hover:border-[#3D211A] transition-all pb-1"
            >
              Register
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Login;
