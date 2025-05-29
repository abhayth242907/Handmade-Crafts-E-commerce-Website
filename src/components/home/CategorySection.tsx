import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/productService';

interface CategoryCard {
  name: string;
  image: string;
  count: number;
}

const categoryImages: Record<string, string> = {
  wood: "https://images.pexels.com/photos/6438989/pexels-photo-6438989.jpeg",
  ceramic: "https://images.pexels.com/photos/4992451/pexels-photo-4992451.jpeg",
  textile: "https://images.pexels.com/photos/4207708/pexels-photo-4207708.jpeg",
  glass: "https://images.pexels.com/photos/1690342/pexels-photo-1690342.jpeg",
  paper: "https://images.pexels.com/photos/7319347/pexels-photo-7319347.jpeg",
  home: "https://images.pexels.com/photos/2395249/pexels-photo-2395249.jpeg"
};

const categoryCounts: Record<string, number> = {
  wood: 16,
  ceramic: 24,
  textile: 18,
  glass: 12,
  paper: 9,
  home: 21
};

const CategorySection: React.FC = () => {
  const [categories, setCategories] = useState<CategoryCard[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  useEffect(() => {
    const loadCategories = async () => {
      try {
        const categoryNames = await getCategories();
        const categoryCards = categoryNames.map(name => ({
          name,
          image: categoryImages[name] || "https://images.pexels.com/photos/1639729/pexels-photo-1639729.jpeg",
          count: categoryCounts[name] || 10
        }));
        setCategories(categoryCards);
      } catch (error) {
        console.error('Error loading categories:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadCategories();
  }, []);
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-poppins font-bold text-neutral-900">Shop by Category</h2>
          <p className="mt-2 text-neutral-600 max-w-2xl mx-auto">
            Explore our collection of handcrafted items organized by category
          </p>
        </div>
        
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-neutral-100 rounded-lg shadow-sm h-48 animate-pulse"></div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map(category => (
              <Link 
                key={category.name}
                to={`/products?category=${category.name}`}
                className="group relative h-48 overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-semibold text-white capitalize">
                    {category.name}
                  </h3>
                  <p className="text-neutral-200 text-sm">
                    {category.count} products
                  </p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CategorySection;