import React from 'react';
import { colors } from '../theme/colors';
import { Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

function Footer() {
  return (
    <footer className="w-full text-white" style={{ backgroundColor: '#3D211A' }}>
      <div className="max-w-7xl mx-auto px-6 py-8 md:py-6 flex flex-col md:flex-row justify-between gap-6">

        {/* Branding */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <h3 className="text-2xl font-black" style={{ color: colors.khaki }}>
            Pet Home Adoption
          </h3>
          <p className="text-sm font-medium text-gray-200">
            Connecting pets with loving families
          </p>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <div className="flex items-center gap-2">
            <Phone size={16} />
            <span className="text-sm font-medium">079 2321 3492</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span className="text-sm font-medium">info@pethome.com</span>
          </div>
          <div className="flex items-center gap-3 mt-2">
            <a href="#" className="hover:text-chamois"><Facebook size={18} /></a>
            <a href="#" className="hover:text-chamois"><Instagram size={18} /></a>
            <a href="#" className="hover:text-chamois"><Twitter size={18} /></a>
          </div>
        </div>

        {/* Quick Links / Additional Info */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-sm font-medium">About Us</span>
          <span className="text-sm font-medium">Adoption Policies</span>
          <span className="text-sm font-medium">FAQs</span>
        </div>

      </div>

      <div className="border-t border-gray-600 mt-4 pt-2 text-center text-white-400 text-xs">
        © {new Date().getFullYear()} Pet Home Adoption. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
