import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Users, Heart, Sprout, TrendingUp } from 'lucide-react';
import { impactMetrics } from '../mock';

const FarmersArtisans = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1920&h=600&fit=crop"
            alt="Farmers and artisans"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Empowering Communities
            </h1>
            <p className="text-xl text-gray-200">
              Connecting Local Hands to Global Markets
            </p>
          </div>
        </div>
      </section>

      {/* Empowerment Philosophy */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Empowerment Philosophy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Global Gateway, we believe that sustainable export success starts at the grassroots. Our model is built on direct partnerships with farmers and artisans, ensuring they receive fair compensation, access to global markets, and support for sustainable practices.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We don't just buy products—we invest in communities. Through training programs, quality control support, and transparent pricing, we help our partners build long-term prosperity while preserving traditional methods and environmental sustainability.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#EBD9B4' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Impact
            </h2>
            <p className="text-lg text-gray-700">
              Real numbers, real change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <Card key={index} className="text-center p-8 bg-white hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="text-5xl font-bold mb-3" style={{ color: '#C1A35E' }}>
                    {metric.value}
                  </div>
                  <div className="text-lg font-medium" style={{ color: '#2E2E2E' }}>
                    {metric.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Profiles Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Users className="mx-auto mb-4" size={48} style={{ color: '#4E7C43' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Meet Our Partners
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stories from the farmers and artisans who make our exports possible
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=600&h=450&fit=crop"
                  alt="Farmer Rajesh"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Rajesh Kumar
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#4E7C43' }}>Organic Spice Farmer, Coorg</p>
                <p className="text-gray-600">
                  "Working with Global Gateway has transformed my farm. Fair prices and direct export opportunities have allowed me to invest in organic certification and expand my cultivation."
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=600&h=450&fit=crop"
                  alt="Artisan Lakshmi"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Lakshmi Devi
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#4E7C43' }}>Jute Artisan, Mysuru</p>
                <p className="text-gray-600">
                  "My handwoven jute bags now reach customers across the world. This partnership has provided steady income and recognition for our traditional craftsmanship."
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=450&fit=crop"
                  alt="Coffee farmer Arjun"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Arjun Shetty
                </h3>
                <p className="text-sm font-medium mb-3" style={{ color: '#4E7C43' }}>Coffee Estate Owner, Chikmagalur</p>
                <p className="text-gray-600">
                  "Global Gateway's commitment to quality has helped our estate gain international recognition. Our organic Arabica now has customers in multiple countries."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sustainability Promise */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5F3F0' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Sprout className="mx-auto mb-4" size={48} style={{ color: '#4E7C43' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Sustainability Promise
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center mb-4">
                  <Sprout className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Organic Practices
                </h3>
                <p className="text-gray-600">
                  We support farmers in transitioning to and maintaining organic certification, promoting chemical-free agriculture that protects soil health and biodiversity.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center mb-4">
                  <Heart className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Fair Pricing
                </h3>
                <p className="text-gray-600">
                  Transparent pricing models ensure farmers and artisans receive fair compensation that reflects the true value of their work and products.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-0">
                <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center mb-4">
                  <TrendingUp className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                  Community Programs
                </h3>
                <p className="text-gray-600">
                  Training workshops, quality improvement programs, and financial literacy initiatives help our partners build sustainable, prosperous futures.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 lg:py-24 bg-[#4E7C43] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Partner With Purpose
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            When you work with Global Gateway, you're not just importing products—you're supporting sustainable livelihoods and preserving traditional craftsmanship.
          </p>
        </div>
      </section>
    </div>
  );
};

export default FarmersArtisans;