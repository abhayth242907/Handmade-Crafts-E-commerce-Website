import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-neutral-900 mb-8">Our Story</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative h-96">
              <img 
                src="https://images.pexels.com/photos/3934623/pexels-photo-3934623.jpeg"
                alt="Artisan crafting"
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6">Preserving Nepali Craftsmanship</h2>
              
              <div className="space-y-6 text-neutral-700">
                <p>
                  Founded in 2020, ArtisanCrafts began with a simple mission: to preserve and promote 
                  Nepal's rich heritage of handmade crafts while providing artisans with a platform 
                  to showcase their exceptional work to a global audience.
                </p>
                
                <p>
                  Our journey started in the heart of Kathmandu Valley, where we witnessed the 
                  incredible skill and dedication of local artisans who have been perfecting their 
                  craft for generations. From intricate woodcarvings to delicate ceramic work, each 
                  piece tells a story of Nepal's cultural heritage.
                </p>
                
                <p>
                  Today, we work directly with over 100 skilled artisans from various regions of 
                  Nepal, ensuring fair compensation and sustainable practices. Every product in our 
                  collection is carefully handcrafted using traditional techniques and locally 
                  sourced materials.
                </p>
                
                <h3 className="text-xl font-semibold pt-4">Our Values</h3>
                
                <ul className="list-disc pl-6 space-y-3">
                  <li>Supporting local artisans and their communities</li>
                  <li>Preserving traditional crafting techniques</li>
                  <li>Promoting sustainable and eco-friendly practices</li>
                  <li>Ensuring fair trade and ethical business operations</li>
                  <li>Delivering authentic, high-quality handcrafted products</li>
                </ul>
                
                <p>
                  When you choose ArtisanCrafts, you're not just buying a product – you're 
                  supporting a tradition, a community, and a sustainable way of life. Each piece 
                  carries with it the pride and passion of its creator, making it truly unique 
                  and special.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;