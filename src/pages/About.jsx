import React from 'react';
import { Target, Eye, Award } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { companyInfo, coreValues } from '../mock';

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1920&h=600&fit=crop"
            alt="Team"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]" style={{ fontFamily: 'Playfair Display, serif' }}>
              About Global Gateway
            </h1>
            <p className="text-xl text-gray-200">
              Empowering communities through ethical trade
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Global Gateway was born from a vision to bridge the gap between India's rich agricultural heritage and global markets. Based in Bengaluru, the heart of India's innovation ecosystem, we recognized an opportunity to connect the exceptional products of southern Indian farmers and artisans with discerning international buyers.
              </p>
              <p>
                Our journey began with a simple yet powerful idea: that premium organic products and traditional craftsmanship deserve a global platform. We started by partnering with a handful of organic spice farmers in Karnataka, learning their processes, understanding their challenges, and building relationships based on trust and mutual respect.
              </p>
              <p>
                Today, Global Gateway works with over 200 farmers and 50 artisans across southern India, exporting to 15+ countries worldwide. Every product we export carries with it the dedication of the hands that grew, harvested, or crafted it—along with our commitment to fair trade, sustainability, and quality excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#4E7C43] flex items-center justify-center mb-6">
                  <Target className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                  Our Mission
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {companyInfo.mission}
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-[#7B4A2E] flex items-center justify-center mb-6">
                  <Eye className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#7B4A2E' }}>
                  Our Vision
                </h3>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {companyInfo.vision}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-4" size={48} style={{ color: '#C1A35E' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="text-center p-8 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-[#EBD9B4]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Leadership & Team
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Our leadership team brings together decades of experience in agriculture, international trade, and sustainable business practices. Combined with our passionate on-ground team, we ensure every export meets the highest standards of quality and ethical sourcing.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              From our sourcing managers who work directly with farmers to our quality control experts and logistics coordinators, every team member is committed to our mission of connecting rural communities with global opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Our Journey
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 text-right">
                <div className="text-2xl font-bold" style={{ color: '#C1A35E' }}>2022</div>
              </div>
              <div className="flex-1 border-l-2 border-[#4E7C43] pl-6 pb-8">
                <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>Foundation</h4>
                <p className="text-gray-600">Global Gateway founded in Bengaluru with partnerships with 20 organic spice farmers</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 text-right">
                <div className="text-2xl font-bold" style={{ color: '#C1A35E' }}>2023</div>
              </div>
              <div className="flex-1 border-l-2 border-[#4E7C43] pl-6 pb-8">
                <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>Expansion</h4>
                <p className="text-gray-600">Expanded to coffee, tea, and handmade products. Reached 10 export countries</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 text-right">
                <div className="text-2xl font-bold" style={{ color: '#C1A35E' }}>2024</div>
              </div>
              <div className="flex-1 border-l-2 border-[#4E7C43] pl-6 pb-8">
                <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>Global Recognition</h4>
                <p className="text-gray-600">Achieved organic certifications, partnered with 200+ farmers and 50+ artisans, serving 15+ countries</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-20 flex-shrink-0 text-right">
                <div className="text-2xl font-bold" style={{ color: '#C1A35E' }}>2025</div>
              </div>
              <div className="flex-1 border-l-2 border-[#4E7C43] pl-6">
                <h4 className="text-xl font-semibold mb-2" style={{ color: '#2E2E2E' }}>Future Growth</h4>
                <p className="text-gray-600">Expanding product lines and reaching new international markets while deepening community impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;