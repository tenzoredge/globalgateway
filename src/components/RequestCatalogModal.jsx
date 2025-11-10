import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { X } from 'lucide-react';
import { companyInfo } from '../mock';

const RequestCatalogModal = ({ isOpen, onClose, productName }) => {
  // We now use the user's client to send email (mailto:) or WhatsApp (wa.me).
  // Backend integration removed from frontend.
  const companyEmail = process.env.REACT_APP_COMPANY_EMAIL || companyInfo.email || 'contact@theglobalGateway.in';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    productName: productName || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Keep productName in sync when modal opens for a selected product
  useEffect(() => {
    setFormData((prev) => ({ ...prev, productName: productName || '' }));
  }, [productName]);

  // Validate required fields before launching mailto / WhatsApp
  const validateRequired = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      setSubmitError('Please fill Name, Email and Phone before sending.');
      return false;
    }
    setSubmitError('');
    return true;
  };

  // Open user's mail client using mailto: with prefilled subject & body
  const handleSendEmail = (e) => {
    e.preventDefault();
    if (!validateRequired()) return;

    const to = companyEmail;
    const subject = `Catalog Request for ${formData.productName || 'Product'}`;
    const body = `Hello,%0D%0A%0D%0AI would like to request the catalog for: ${formData.productName || ''}%0D%0A%0D%0AContact details:%0D%0AName: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0APhone: ${formData.phone}%0D%0ACompany: ${formData.company || 'N/A'}%0D%0A%0D%0AThank you.`;

    const mailto = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${body}`;
    // Use location.href to open default mail client
    window.location.href = mailto;
    setSubmitMessage('Opening your mail client...');
    setTimeout(() => {
      setSubmitMessage('');
      onClose();
    }, 1200);
  };

  // Open WhatsApp chat with prefilled message (product name + contact)
  const handleSendWhatsApp = (e) => {
    e.preventDefault();
    if (!validateRequired()) return;

    const waNumber = companyInfo.whatsapp || '';
    const msg = `Hi, I'm ${formData.name} (${formData.email}, ${formData.phone}) and I'd like the catalog for ${formData.productName || ''}. Company: ${formData.company || 'N/A'}`;
    // If company whatsapp number exists, open chat; otherwise show error
    if (!waNumber) {
      setSubmitError('WhatsApp number not available. Please use Email.');
      return;
    }
    const waUrl = `https://wa.me/91${waNumber}?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, '_blank');
    setSubmitMessage('Opening WhatsApp...');
    setTimeout(() => {
      setSubmitMessage('');
      onClose();
    }, 1200);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader className="flex justify-between items-center pr-8">
          <DialogTitle 
            className="text-2xl font-bold" 
            style={{ color: '#2E2E2E', fontFamily: 'Playfair Display, serif' }}
          >
            Request Catalog
          </DialogTitle>
        </DialogHeader>

        {submitMessage ? (
          <div className="py-12 text-center">
            <div className="mb-4 text-5xl">✓</div>
            <p className="text-lg font-semibold text-green-600">{submitMessage}</p>
          </div>
        ) : submitError ? (
          <div className="py-8 text-center bg-red-50 rounded-lg p-4">
            <p className="text-red-600 font-semibold">{submitError}</p>
            <Button
              variant="outline"
              onClick={onClose}
              className="mt-4"
            >
              Close
            </Button>
          </div>
        ) : (
          <form onSubmit={(e) => e.preventDefault()} className="space-y-5 py-4 px-2">
            {/* Product Name (Read-only) */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Product Requested
              </label>
              <Input
                type="text"
                value={formData.productName}
                readOnly
                className="bg-gray-50 cursor-not-allowed border-gray-300 font-medium"
                style={{ color: '#4E7C43' }}
              />
            </div>

            {/* Full Name */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
                className="border-gray-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
                className="border-gray-300"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <Input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 9538446588"
                required
                className="border-gray-300"
              />
            </div>

            {/* Company */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Company / Organization
              </label>
              <Input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name"
                className="border-gray-300"
              />
            </div>

            {/* Submit Button */}
            <div className="flex gap-3 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                type="button"
                onClick={handleSendEmail}
                disabled={isSubmitting}
                className="flex-1 text-white"
                style={{ backgroundColor: '#4E7C43' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#3d6335'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#4E7C43'}
              >
                Send Email
              </Button>
              <Button
                type="button"
                onClick={handleSendWhatsApp}
                disabled={isSubmitting}
                variant="ghost"
                className="flex-1 border"
              >
                Send WhatsApp
              </Button>
            </div>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default RequestCatalogModal;
