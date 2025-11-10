import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { companyInfo } from '../mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock function - will be replaced with backend email functionality
    setTimeout(() => {
      alert('Thank you for your message! We will get back to you within 24 hours.');
      setFormData({
        name: '',
        email: '',
        country: '',
        company: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&h=400&fit=crop"
            alt="Contact us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Get In Touch
            </h1>
            <p className="text-xl text-gray-200">
              Let's discuss how we can serve your market
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                Contact Information
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We're here to answer your questions about our products, export capabilities, and partnership opportunities. Reach out to us through any of the channels below.
              </p>

              <div className="space-y-6">
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#2E2E2E' }}>Our Office</h3>
                      <p className="text-gray-600">{companyInfo.address}</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center flex-shrink-0">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#2E2E2E' }}>Email Us</h3>
                      <a
                        href={`mailto:${companyInfo.email}`}
                        className="text-gray-600 hover:text-[#4E7C43] transition-colors"
                      >
                        {companyInfo.email}
                      </a>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0 flex items-start space-x-4">
                    <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center flex-shrink-0">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2" style={{ color: '#2E2E2E' }}>WhatsApp</h3>
                      <a
                        href={`https://wa.me/91${companyInfo.whatsapp}`}
                        className="text-gray-600 hover:text-[#4E7C43] transition-colors"
                      >
                        {companyInfo.whatsapp}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4" style={{ color: '#2E2E2E' }}>Business Hours</h3>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                  Saturday: 9:00 AM - 1:00 PM IST<br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="p-8 shadow-lg">
                <CardContent className="p-0">
                  <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                    Send Us a Message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-base font-medium mb-2 block">
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-base font-medium mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="country" className="text-base font-medium mb-2 block">
                          Country *
                        </Label>
                        <Input
                          id="country"
                          name="country"
                          type="text"
                          required
                          value={formData.country}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="USA"
                        />
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-base font-medium mb-2 block">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-base font-medium mb-2 block">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full min-h-[150px]"
                        placeholder="Tell us about your requirements..."
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-[#4E7C43] hover:bg-[#3d6335] text-white py-6 text-base"
                    >
                      {isSubmitting ? 'Sending...' : (
                        <>
                          Send Message
                          <Send className="ml-2" size={20} />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact CTA */}
      <section className="py-16 bg-[#EBD9B4]">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
            Prefer to Chat?
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            Connect with us instantly on WhatsApp for quick responses
          </p>
          <Button
            size="lg"
            onClick={() => window.open(`https://wa.me/${companyInfo.whatsapp}`, '_blank')}
            className="bg-[#25D366] hover:bg-[#1da851] text-white px-8 py-6 text-base"
          >
            <Phone className="mr-2" size={20} />
            Chat on WhatsApp
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Contact;