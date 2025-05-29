import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px] bg-hero-pattern bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-4 animate-fade-in">
            Explore Unique Handcrafted Creations
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-200 mb-8 animate-fade-in-delay">
            Discover the beauty of handmade crafts created with passion and skill by talented artisans from around the world.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <Link to="/products">
              <Button variant="accent" size="lg">
                Shop Now
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:bg-opacity-10">
                Our Story
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
          <path fill="currentColor" fillOpacity="1" d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,213.3C1120,224,1280,224,1360,224L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default HeroSection;