import React from 'react';
import { Mail, Lock, User, CheckCircle, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  const colors = {
    screenBg: '#fff9f7',
    cardBg: '#ffffff',
    accent: '#3D211A'
  };

  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center p-6 font-poppins"
      style={{ backgroundColor: colors.screenBg }}
    >
      {/* Main Container */}
      <div className="w-full max-w-4xl rounded-[40px] overflow-hidden shadow-xl flex flex-col md:flex-row border border-gray-200">
        
        {/* Left Side: Form */}
        <div
          className="md:w-7/12 flex flex-col justify-between p-10 md:p-12 gap-6"
          style={{ backgroundColor: colors.cardBg }}
        >
          {/* Header */}
          <div className="text-center">
            <h3 className="text-3xl font-black text-[#3D211A] tracking-tight">
              Create Account
            </h3>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#3D211A] mt-1 opacity-90">
              Join Our Pet Community
            </p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4 overflow-y-auto" onSubmit={(e) => e.preventDefault()}>
            {/* Username */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3D211A] opacity-80">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#5d2d3c] outline-none"
                />
              </div>
            </div>

            {/* Email */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3D211A] opacity-80">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#5d2d3c] outline-none"
                />
              </div>
            </div>

            {/* Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3D211A] opacity-80">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#5d2d3c] outline-none"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div className="space-y-1">
              <label className="text-xs font-bold uppercase tracking-wider text-[#3D211A] opacity-80">
                Confirm Password
              </label>
              <div className="relative">
                <CheckCircle className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input 
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-2xl py-3 pl-11 pr-4 text-sm focus:ring-2 focus:ring-[#5d2d3c] outline-none"
                />
              </div>
            </div>

            {/* Register Button */}
            <button 
              type="submit"
              onClick={() => navigate('/')}
              className="w-full bg-[#3D211A] text-[#fff9f7] py-3.5 mt-4 rounded-2xl font-black text-xs uppercase tracking-[0.25em] flex items-center justify-center gap-3 hover:bg-[#5d2d3c] transition-all shadow-md active:scale-95"
            >
              Register <ArrowRight size={18} />
            </button>
          </form>

          {/* Footer link */}
          <div className="mt-4 text-xs font-bold text-gray-500 text-center">
            Already have an account?{" "}
            <span 
              onClick={() => navigate('/login')}
              className="text-[#3D211A] cursor-pointer hover:underline"
            >
              Sign In
            </span>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-5/12 relative overflow-hidden">
          <img 
            src="/3.png" 
            alt="Register Visual"
            className="w-full h-full object-cover"
          />
        </div>

      </div>
    </div>
  );
}

export default Register;
