import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, ShoppingBag, Check, Star } from 'lucide-react';
import { getProductById, getProductsByCategory, Product } from '../services/productService';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';
import ProductCard from '../components/ui/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { items, addItem } = useCart();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeImage, setActiveImage] = useState<string>('');
  const [addedToCart, setAddedToCart] = useState<boolean>(false);
  
  const isInCart = items.some(item => item.id === Number(id));
  
  useEffect(() => {
    const loadProduct = async () => {
      setIsLoading(true);
      try {
        if (id) {
          const productData = await getProductById(Number(id));
          if (productData) {
            setProduct(productData);
            setActiveImage(productData.image);
            
            // Load related products from same category
            const related = await getProductsByCategory(productData.category);
            setRelatedProducts(related.filter(p => p.id !== productData.id).slice(0, 4));
          }
        }
      } catch (error) {
        console.error('Error loading product:', error);
      } finally {
        setIsLoading(false);
      }
    };
    
    loadProduct();
  }, [id]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };
  
  const incrementQuantity = () => {
    setQuantity(prev => prev + 1);
  };
  
  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image
        });
      }
      setAddedToCart(true);
      setTimeout(() => setAddedToCart(false), 2000);
    }
  };
  
  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-20">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-6 bg-neutral-200 rounded w-1/4 mb-4"></div>
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-1/2 h-96 bg-neutral-200 rounded"></div>
              <div className="md:w-1/2">
                <div className="h-8 bg-neutral-200 rounded w-3/4 mb-4"></div>
                <div className="h-6 bg-neutral-200 rounded w-1/4 mb-6"></div>
                <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                <div className="h-4 bg-neutral-200 rounded mb-2"></div>
                <div className="h-4 bg-neutral-200 rounded mb-6 w-3/4"></div>
                <div className="h-10 bg-neutral-200 rounded w-1/3 mb-4"></div>
                <div className="h-12 bg-neutral-200 rounded mb-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return (
      <div className="min-h-screen bg-neutral-50 pt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <h1 className="text-2xl font-medium mb-4">Product Not Found</h1>
          <p className="mb-6">Sorry, we couldn't find the product you're looking for.</p>
          <Link to="/products">
            <Button variant="primary">
              <ArrowLeft size={18} className="mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link to="/" className="text-neutral-600 hover:text-primary-600 text-sm">
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-neutral-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <Link to="/products" className="text-neutral-600 hover:text-primary-600 text-sm">
                    Products
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg className="w-3 h-3 text-neutral-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                  <span className="text-neutral-500 text-sm truncate max-w-[200px]">
                    {product.name}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Product Images */}
          <div className="md:w-1/2">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-4 h-96">
              <img 
                src={activeImage} 
                alt={product.name} 
                className="w-full h-full object-contain"
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              <div 
                className={`cursor-pointer rounded-md overflow-hidden border-2 ${
                  activeImage === product.image ? 'border-primary-600' : 'border-transparent'
                }`}
                onClick={() => setActiveImage(product.image)}
              >
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-20 object-cover"
                />
              </div>
              {/* Additional product images would be displayed here */}
            </div>
          </div>
          
          {/* Product Info */}
          <div className="md:w-1/2">
            <div className="mb-2">
              <Link 
                to={`/products?category=${product.category}`}
                className="text-sm bg-primary-100 text-primary-800 px-3 py-1 rounded-full capitalize"
              >
                {product.category}
              </Link>
            </div>
            
            <h1 className="text-3xl font-poppins font-bold text-neutral-900 mb-2">
              {product.name}
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={18} 
                    fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} 
                    className={i < Math.floor(product.rating) ? 'text-accent-400' : 'text-neutral-300'} 
                  />
                ))}
              </div>
              <span className="text-sm text-neutral-600">
                {product.rating} ({Math.floor(product.rating * 10)} reviews)
              </span>
            </div>
            
            <div className="text-2xl font-semibold text-neutral-900 mb-4">
              ${product.price.toFixed(2)}
            </div>
            
            <div className="mb-6">
              <p className="text-neutral-700">
                {product.description}
              </p>
            </div>
            
            <div className="mb-6">
              <div className="flex items-center text-sm text-neutral-700 mb-2">
                <div className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                  {product.stock > 0 ? (
                    <div className="flex items-center">
                      <Check size={16} className="mr-1" />
                      In Stock
                    </div>
                  ) : 'Out of Stock'}
                </div>
                {product.stock > 0 && (
                  <span className="ml-2">
                    ({product.stock} available)
                  </span>
                )}
              </div>
            </div>
            
            {/* Quantity Selector */}
            {product.stock > 0 && (
              <div className="mb-6">
                <label htmlFor="quantity" className="block text-sm font-medium text-neutral-700 mb-2">
                  Quantity
                </label>
                <div className="flex w-32">
                  <button 
                    onClick={decrementQuantity}
                    className="flex-none bg-neutral-100 text-neutral-600 hover:bg-neutral-200 px-3 py-2 rounded-l-md border border-neutral-300"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    id="quantity"
                    value={quantity}
                    onChange={handleQuantityChange}
                    min="1"
                    max={product.stock}
                    className="flex-1 text-center border-y border-neutral-300 focus:outline-none focus:ring-0 focus:border-neutral-300"
                  />
                  <button 
                    onClick={incrementQuantity}
                    className="flex-none bg-neutral-100 text-neutral-600 hover:bg-neutral-200 px-3 py-2 rounded-r-md border border-neutral-300"
                  >
                    +
                  </button>
                </div>
              </div>
            )}
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="primary"
                size="lg"
                fullWidth
                onClick={handleAddToCart}
                disabled={product.stock === 0}
                className="relative overflow-hidden"
              >
                {addedToCart ? (
                  <span className="flex items-center">
                    <Check size={18} className="mr-2" />
                    Added to Cart
                  </span>
                ) : (
                  <span className="flex items-center">
                    <ShoppingCart size={18} className="mr-2" />
                    {isInCart ? 'Add More to Cart' : 'Add to Cart'}
                  </span>
                )}
              </Button>
              
              <Button 
                variant="accent"
                size="lg"
                fullWidth
                disabled={product.stock === 0}
              >
                <ShoppingBag size={18} className="mr-2" />
                Buy Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Product Details Tabs - Would be expanded in a full implementation */}
        <div className="mt-12">
          <div className="border-b border-neutral-300">
            <div className="flex space-x-8">
              <button className="px-4 py-2 border-b-2 border-primary-600 font-medium text-primary-600">
                Description
              </button>
              <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
                Reviews
              </button>
              <button className="px-4 py-2 text-neutral-600 hover:text-neutral-900">
                Shipping
              </button>
            </div>
          </div>
          <div className="py-6">
            <h3 className="text-lg font-medium mb-4">Product Details</h3>
            <p className="text-neutral-700 mb-4">
              {product.description}
            </p>
            <p className="text-neutral-700">
              Each piece is handcrafted with attention to detail and may have slight variations in color and texture, making your item truly one of a kind. All our products are made using sustainable materials and ethical practices.
            </p>
          </div>
        </div>
        
        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-poppins font-bold text-neutral-900 mb-6">
              You might also like
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;