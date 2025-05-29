import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search, Filter, X } from 'lucide-react';
import { getProducts, getProductsByCategory, searchProducts, getCategories, Product } from '../services/productService';
import ProductCard from '../components/ui/ProductCard';
import Button from '../components/ui/Button';

const ProductsPage: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const categoryParam = queryParams.get('category');
  
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(categoryParam);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 20000]);
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);
  
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const [productData, categoryData] = await Promise.all([
          getProducts(),
          getCategories()
        ]);
        setProducts(productData);
        setFilteredProducts(productData);
        setCategories(categoryData);
      } catch (error) {
        console.error('Error loading products data:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadData();
  }, []);
  
  // Apply category filter from URL parameter
  useEffect(() => {
    setSelectedCategory(categoryParam);
  }, [categoryParam]);
  
  // Apply all filters
  useEffect(() => {
    const applyFilters = async () => {
      setIsLoading(true);
      
      try {
        let filtered: Product[] = [];
        
        // If search query exists, use search endpoint
        if (searchQuery.trim()) {
          filtered = await searchProducts(searchQuery);
        } 
        // If category is selected, use category endpoint
        else if (selectedCategory) {
          filtered = await getProductsByCategory(selectedCategory);
        } 
        // Otherwise use all products
        else {
          filtered = [...products];
        }
        
        // Filter by price range
        filtered = filtered.filter(product => 
          product.price >= priceRange[0] && product.price <= priceRange[1]
        );
        
        setFilteredProducts(filtered);
      } catch (error) {
        console.error('Error applying filters:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    if (products.length > 0) {
      applyFilters();
    }
  }, [searchQuery, selectedCategory, priceRange, products]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // The search is already applied via the useEffect
  };
  
  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category);
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>, index: 0 | 1) => {
    const newValue = parseInt(e.target.value);
    const newRange = [...priceRange] as [number, number];
    newRange[index] = newValue;
    setPriceRange(newRange);
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setPriceRange([0, 20000]);
  };
  
  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };
  
  return (
    <div className="bg-neutral-50 min-h-screen pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-poppins font-bold text-neutral-900">Our Handcrafted Collection</h1>
          <p className="mt-2 text-neutral-600">
            Browse our selection of unique, handmade crafts created by skilled artisans
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter sidebar - Mobile toggle */}
          <div className="lg:hidden flex justify-between items-center mb-4">
            <Button
              variant="outline"
              onClick={toggleFilter}
              className="flex items-center"
            >
              <Filter size={18} className="mr-2" />
              {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            </Button>
            
            <div>
              <span className="text-sm text-neutral-600">
                {filteredProducts.length} products
              </span>
            </div>
          </div>
          
          {/* Filter sidebar */}
          <div className={`lg:block ${isFilterOpen ? 'block' : 'hidden'} lg:w-1/4`}>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold">Filters</h2>
                <button 
                  onClick={clearFilters}
                  className="text-sm text-primary-600 hover:text-primary-700"
                >
                  Clear All
                </button>
              </div>
              
              {/* Search */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Search</h3>
                <form onSubmit={handleSearch}>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button 
                      type="submit"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-neutral-400 hover:text-neutral-600"
                    >
                      <Search size={18} />
                    </button>
                  </div>
                </form>
              </div>
              
              {/* Categories */}
              <div className="mb-6">
                <h3 className="text-sm font-medium mb-2">Categories</h3>
                <div className="space-y-2">
                  <div 
                    className={`cursor-pointer px-2 py-1 rounded ${
                      selectedCategory === null 
                        ? 'bg-primary-100 text-primary-800' 
                        : 'hover:bg-neutral-100'
                    }`}
                    onClick={() => handleCategorySelect(null)}
                  >
                    All Categories
                  </div>
                  {categories.map(category => (
                    <div 
                      key={category}
                      className={`cursor-pointer px-2 py-1 rounded capitalize ${
                        selectedCategory === category 
                          ? 'bg-primary-100 text-primary-800' 
                          : 'hover:bg-neutral-100'
                      }`}
                      onClick={() => handleCategorySelect(category)}
                    >
                      {category}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Price Range */}
              <div>
                <h3 className="text-sm font-medium mb-2">Price Range</h3>
                <div className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span>NPR {priceRange[0].toLocaleString()}</span>
                    <span>NPR {priceRange[1].toLocaleString()}</span>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="min-price" className="sr-only">Minimum Price</label>
                      <input
                        type="range"
                        id="min-price"
                        min="0"
                        max="20000"
                        value={priceRange[0]}
                        onChange={(e) => handlePriceChange(e, 0)}
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="max-price" className="sr-only">Maximum Price</label>
                      <input
                        type="range"
                        id="max-price"
                        min="0"
                        max="20000"
                        value={priceRange[1]}
                        onChange={(e) => handlePriceChange(e, 1)}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex space-x-4">
                  <div className="w-1/2">
                    <input
                      type="number"
                      min="0"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(e, 0)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                    />
                  </div>
                  <div className="w-1/2">
                    <input
                      type="number"
                      min="0"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(e, 1)}
                      className="w-full px-3 py-2 border border-neutral-300 rounded-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="lg:w-3/4">
            {/* Active filters */}
            {(selectedCategory || searchQuery || priceRange[0] > 0 || priceRange[1] < 20000) && (
              <div className="mb-4 flex flex-wrap gap-2">
                {selectedCategory && (
                  <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                    Category: <span className="font-medium capitalize ml-1">{selectedCategory}</span>
                    <button 
                      onClick={() => setSelectedCategory(null)}
                      className="ml-2 text-primary-700 hover:text-primary-900"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                {searchQuery && (
                  <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                    Search: <span className="font-medium ml-1">"{searchQuery}"</span>
                    <button 
                      onClick={() => setSearchQuery('')}
                      className="ml-2 text-primary-700 hover:text-primary-900"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
                {(priceRange[0] > 0 || priceRange[1] < 20000) && (
                  <div className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm flex items-center">
                    Price: <span className="font-medium ml-1">NPR {priceRange[0].toLocaleString()} - NPR {priceRange[1].toLocaleString()}</span>
                    <button 
                      onClick={() => setPriceRange([0, 20000])}
                      className="ml-2 text-primary-700 hover:text-primary-900"
                    >
                      <X size={14} />
                    </button>
                  </div>
                )}
              </div>
            )}
            
            {/* Product count - Desktop */}
            <div className="hidden lg:flex justify-between mb-4">
              <h2 className="text-lg font-medium">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
              </h2>
              <div>
                <select className="border border-neutral-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Sort by: Featured</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest First</option>
                </select>
              </div>
            </div>
            
            {isLoading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="bg-neutral-100 rounded-lg shadow-sm h-80 animate-pulse"></div>
                ))}
              </div>
            ) : (
              <>
                {filteredProducts.length === 0 ? (
                  <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                    <h3 className="text-xl font-medium mb-2">No products found</h3>
                    <p className="text-neutral-600 mb-4">
                      Try adjusting your filters or search criteria.
                    </p>
                    <Button variant="primary" onClick={clearFilters}>
                      Clear All Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProducts.map(product => (
                      <ProductCard key={product.id} product={product} />
                    ))}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;