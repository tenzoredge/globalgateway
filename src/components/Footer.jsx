import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { companyInfo, socialLinks } from '../mock';

const Footer = () => {
  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'LinkedIn':
        return <Linkedin size={20} />;
      case 'Instagram':
        return <Instagram size={20} />;
      case 'Facebook':
        return <Facebook size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-[#2E2E2E] text-white">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#C1A35E' }}>
              {companyInfo.name}
            </h3>
            <p className="text-sm text-gray-300 mb-4">
              {companyInfo.tagline}
            </p>
            <p className="text-sm text-gray-400">
              Connecting farmers and artisans with global markets.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#C1A35E' }}>Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">Products</Link></li>
              <li><Link to="/farmers-artisans" className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">Farmers & Artisans</Link></li>
              <li><Link to="/export" className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">Export & Logistics</Link></li>
              <li><Link to="/contact" className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#C1A35E' }}>Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="mt-1 flex-shrink-0" style={{ color: '#C1A35E' }} />
                <span className="text-sm text-gray-300">{companyInfo.address}</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} style={{ color: '#C1A35E' }} />
                <a href={`mailto:${companyInfo.email}`} className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">
                  {companyInfo.email}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} style={{ color: '#C1A35E' }} />
                <a href={`https://wa.me/91${companyInfo.whatsapp}`} className="text-sm text-gray-300 hover:text-[#C1A35E] transition-colors">
                  {companyInfo.whatsapp}
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: '#C1A35E' }}>Follow Us</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#4E7C43] flex items-center justify-center hover:bg-[#C1A35E] transition-colors"
                  aria-label={social.platform}
                >
                  {getSocialIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;