import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Globe, Heart, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, productCategories, testimonials, impactMetrics } from '../mock';

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[600px] lg:h-[700px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1753652735948-47b47c1d5713?auto=format?w=1920&h=1080&fit=crop"
            alt="Spice farm"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white fade-in-up">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 text-[#fff]" style={{ fontFamily: 'Playfair Display, serif' }}>
              {companyInfo.tagline}
            </h1>
            <p className="text-lg lg:text-xl mb-8 text-gray-200">
              Premium organic spices, coffee, tea, and eco-friendly handmade products from southern India to global markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/products">
                <Button
                  size="lg"
                  className="bg-[#4E7C43] hover:bg-[#3d6335] text-white px-8 py-6 text-base"
                >
                  Explore Our Exports
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#4E7C43] px-8 py-6 text-base"
                >
                  Partner With Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Company Snapshot */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Connecting Tradition with Global Markets
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              {companyInfo.about}
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {impactMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold mb-2" style={{ color: '#C1A35E' }}>
                    {metric.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Export Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Premium quality products sourced directly from farmers and artisans
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <Card key={category.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 card">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-3" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {category.description}
                  </p>
                  <Link to="/products">
                    <Button variant="link" className="p-0 text-[#4E7C43] hover:text-[#7B4A2E]">
                      View Products <ArrowRight className="ml-2" size={16} />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Ethical Sourcing */}
      <section className="py-16 lg:py-24 bg-[#EBD9B4]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                Ethical Sourcing, Global Impact
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We partner directly with farmers and artisans across Karnataka and southern India, ensuring fair compensation and sustainable practices. Our supply chain is built on transparency, quality, and respect for traditional craftsmanship.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center flex-shrink-0">
                    <Leaf className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>100% Organic</h4>
                    <p className="text-gray-600">All products certified organic and sustainably sourced</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center flex-shrink-0">
                    <Heart className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>Fair Trade</h4>
                    <p className="text-gray-600">Direct partnerships ensuring fair prices for producers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-full bg-[#4E7C43] flex items-center justify-center flex-shrink-0">
                    <Award className="text-white" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>Premium Quality</h4>
                    <p className="text-gray-600">International standards with traditional authenticity</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1640551724267-9b84c715aa35?w=800&h=1000&fit=crop"
                alt="Farmers working"
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <Globe className="mx-auto mb-6" size={64} style={{ color: '#4E7C43' }} />
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
            Global Export Presence
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Our products reach 15+ countries across North America, Europe, Asia, and beyond. We maintain the highest quality standards from farm to international markets.
          </p>
          <Link to="/export">
            <Button size="lg" className="bg-[#7B4A2E] hover:bg-[#5f3a24] text-white px-8 py-6">
              View Export Capabilities
            </Button>
          </Link>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#F5F3F0' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Trusted by Global Partners
            </h2>
            <p className="text-lg text-gray-600">
              What our international clients say about us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-[#C1A35E] text-xl">★</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>
                  <div className="border-t pt-4">
                    <div className="font-semibold" style={{ color: '#2E2E2E' }}>{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.company}</div>
                    <div className="text-sm" style={{ color: '#4E7C43' }}>{testimonial.country}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#4E7C43] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Let's Build Global Connections
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Partner with us to bring premium organic products and sustainable crafts to your market
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-white text-[#4E7C43] hover:bg-gray-100 px-8 py-6 text-base"
            >
              Get In Touch
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;