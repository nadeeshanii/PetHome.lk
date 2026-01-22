import React from 'react';
import { Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ForgotPassword() {
  return (
    <div className="min-h-[calc(100vh-64px)] w-full flex items-center justify-center bg-white p-6">
      <div className="max-w-md w-full bg-white rounded-[40px] p-10 shadow-2xl border border-[#f3e9dc]">
        <Link to="/login" className="flex items-center gap-2 text-[#3d2b1f] text-xs font-black uppercase tracking-widest hover:opacity-60 transition-all mb-8">
          <ArrowLeft size={16} /> Back to Login
        </Link>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-black text-[#3d2b1f]">Forgot Password?</h2>
          <p className="text-sm text-[#3d2b1f]/60 mt-2">Enter your email and we'll send you a link to reset your password.</p>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-wider text-[#3d2b1f]/60 ml-1">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-[#3d2b1f]/40" size={18} />
              <input 
                type="email" 
                placeholder="name@example.com"
                className="w-full bg-[#f3e9dc]/30 border-none rounded-2xl py-4 pl-12 text-sm focus:ring-2 focus:ring-[#3d2b1f] outline-none"
              />
            </div>
          </div>

          <button className="w-full bg-[#3d2b1f] text-white py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#714423] transition-all shadow-lg active:scale-95">
            Send Reset Link
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;