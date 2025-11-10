import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Ship, Award, Globe, CheckCircle, Package, Shield } from 'lucide-react';
import { exportDestinations, certifications } from '../mock';

const Export = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&h=600&fit=crop"
            alt="Export and logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Export & Logistics
            </h1>
            <p className="text-xl text-gray-200">
              Seamless global delivery with quality assurance
            </p>
          </div>
        </div>
      </section>

      {/* Export Capabilities */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Ship className="mx-auto mb-4" size={48} style={{ color: '#4E7C43' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Export Capabilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              End-to-end export solutions from sourcing to international delivery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-[#4E7C43] flex items-center justify-center mx-auto mb-4">
                  <Package className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Professional Packaging
                </h3>
                <p className="text-gray-600">
                  Export-grade packaging designed to preserve product quality during international transit. Customized solutions for different product types.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-[#7B4A2E] flex items-center justify-center mx-auto mb-4">
                  <Shield className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Quality Control
                </h3>
                <p className="text-gray-600">
                  Multi-stage quality inspection processes ensure only premium products reach international markets. Full traceability from farm to port.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-0 text-center">
                <div className="w-16 h-16 rounded-full bg-[#C1A35E] flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Global Logistics
                </h3>
                <p className="text-gray-600">
                  Partnerships with leading logistics providers for efficient, reliable delivery to 15+ countries. Real-time shipment tracking available.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality & Compliance */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-4" size={48} style={{ color: '#C1A35E' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Quality & Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meeting and exceeding international standards
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-semibold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Certifications & Registrations
                </h3>
                <div className="flex flex-wrap gap-3">
                  {certifications.map((cert, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="px-4 py-2 text-base border-[#4E7C43] text-[#4E7C43] bg-white flex items-center gap-2"
                    >
                      <CheckCircle size={16} />
                      {cert}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="text-xl font-semibold mb-4" style={{ color: '#4E7C43' }}>
                    Quality Assurance Process
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Source verification and farmer certification</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Pre-processing quality inspection</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Laboratory testing for purity and quality</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Final packaging and export documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h4 className="text-xl font-semibold mb-4" style={{ color: '#4E7C43' }}>
                    Compliance Standards
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">International organic certification standards</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Food safety and hygiene regulations</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Country-specific import requirements</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle size={20} className="mt-0.5 flex-shrink-0" style={{ color: '#4E7C43' }} />
                      <span className="text-gray-600">Sustainable sourcing documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Export Destinations */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="mx-auto mb-4" size={48} style={{ color: '#4E7C43' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Export Destinations
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our products reach discerning buyers across the globe
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {exportDestinations.map((country, index) => (
                <Card key={index} className="p-4 text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-0">
                    <p className="font-medium" style={{ color: '#2E2E2E' }}>{country}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-gray-700 mb-6">
                Looking to import to a country not listed? We're always expanding our global reach.
              </p>
              <Button
                size="lg"
                onClick={() => window.location.href = '/contact'}
                className="bg-[#4E7C43] hover:bg-[#3d6335] text-white px-8 py-6"
              >
                Discuss Your Requirements
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Partners */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#EBD9B4' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Strategic Port Access
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Located in Bengaluru, we have excellent connectivity to major Indian export ports including Chennai, Mangalore, and Kochi. This strategic positioning ensures efficient, cost-effective shipping to all international destinations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our partnerships with leading freight forwarders and customs clearance agencies ensure smooth, timely exports with full documentation and compliance support.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#7B4A2E] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Become a Partner
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Ready to start importing premium organic products from India? Let's discuss how we can serve your market.
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-[#7B4A2E] hover:bg-gray-100 px-8 py-6 text-base"
          >
            Contact Our Export Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Export;