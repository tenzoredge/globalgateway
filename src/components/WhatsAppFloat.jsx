import React from 'react';
import { MessageCircle } from 'lucide-react';
import { companyInfo } from '../mock';

const WhatsAppFloat = () => {
  const handleClick = () => {
    window.open(`https://wa.me/91${companyInfo.whatsapp}`, '_blank');
  };

  return (
    <div
      className="whatsapp-float"
      onClick={handleClick}
      role="button"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle />
    </div>
  );
};

export default WhatsAppFloat;