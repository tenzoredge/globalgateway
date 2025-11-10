import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Badge } from '../components/ui/badge';
import { spiceProducts, coffeeTeaProducts, handmadeProducts, certifications } from '../mock';
import RequestCatalogModal from '../components/RequestCatalogModal';
import { Mail, Award } from 'lucide-react';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('spices');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleRequestCatalog = (productName) => {
    setSelectedProduct(productName);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const renderProductGrid = (products) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 card">
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#2E2E2E' }}>
              {product.name}
            </h3>
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {product.description}
            </p>
            <Button
              size="sm"
              onClick={() => handleRequestCatalog(product.name)}
              className="w-full bg-[#4E7C43] hover:bg-[#3d6335] text-white"
            >
              <Mail size={16} className="mr-2" />
              Request Catalog
            </Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1731246033536-63ff24f591be?w=1920&h=400&fit=crop"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#FFFFFF]" style={{ fontFamily: 'Playfair Display, serif' }}>
              Our Products
            </h1>
            <p className="text-xl text-gray-200">
              Premium organic exports from India to the world
            </p>
          </div>
        </div>
      </section>

      {/* Product Tabs */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Tabs defaultValue="spices" className="w-full" onValueChange={setSelectedCategory}>
            <div className="flex justify-center mb-12">
              <TabsList className="bg-[#F5F3F0] p-2 rounded-lg">
                <TabsTrigger
                  value="spices"
                  className="px-6 py-3 data-[state=active]:bg-[#4E7C43] data-[state=active]:text-white transition-colors"
                >
                  Organic Spices
                </TabsTrigger>
                <TabsTrigger
                  value="coffee-tea"
                  className="px-6 py-3 data-[state=active]:bg-[#4E7C43] data-[state=active]:text-white transition-colors"
                >
                  Coffee & Tea
                </TabsTrigger>
                <TabsTrigger
                  value="handmade"
                  className="px-6 py-3 data-[state=active]:bg-[#4E7C43] data-[state=active]:text-white transition-colors"
                >
                  Jute & Handmade
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="spices" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                  Organic Spices
                </h2>
                <p className="text-lg text-gray-600">
                  Premium quality organic spices sourced directly from southern Indian farms. Each spice is carefully selected, processed, and certified to meet international organic standards.
                </p>
              </div>
              {renderProductGrid(spiceProducts)}
            </TabsContent>

            <TabsContent value="coffee-tea" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                  Coffee & Tea
                </h2>
                <p className="text-lg text-gray-600">
                  Estate-grown, single-origin organic coffee and tea varieties from Karnataka's finest plantations. Experience the authentic taste of Indian coffee and tea culture.
                </p>
              </div>
              {renderProductGrid(coffeeTeaProducts)}
            </TabsContent>

            <TabsContent value="handmade" className="mt-8">
              <div className="mb-8">
                <h2 className="text-2xl lg:text-3xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
                  Jute & Handmade Products
                </h2>
                <p className="text-lg text-gray-600">
                  Eco-friendly handcrafted items including jute bags, bamboo baskets, and woven crafts. Each piece showcases traditional craftsmanship and sustainable materials.
                </p>
              </div>
              {renderProductGrid(handmadeProducts)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 lg:py-24" style={{ backgroundColor: '#FAF9F7' }}>
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Award className="mx-auto mb-4" size={48} style={{ color: '#C1A35E' }} />
            <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif', color: '#4E7C43' }}>
              Certifications & Quality Standards
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to quality is backed by international certifications
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <Badge
                key={index}
                variant="outline"
                className="px-6 py-3 text-base border-[#4E7C43] text-[#4E7C43] bg-white hover:bg-[#4E7C43] hover:text-white transition-colors"
              >
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-[#7B4A2E] text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
            Interested in Bulk Orders?
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto mb-8">
            Get in touch with us for detailed product catalogs, pricing, and export information
          </p>
          <Button
            size="lg"
            onClick={() => window.location.href = '/contact'}
            className="bg-white text-[#7B4A2E] hover:bg-gray-100 px-8 py-6 text-base"
          >
            Contact Us for Pricing
          </Button>
        </div>
      </section>

      {/* Request Catalog Modal */}
      <RequestCatalogModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        productName={selectedProduct}
      />
    </div>
  );
};

export default Products;