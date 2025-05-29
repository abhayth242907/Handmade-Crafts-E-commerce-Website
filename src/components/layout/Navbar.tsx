import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, User } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();
  const { items } = useCart();

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled || location.pathname !== '/' 
        ? 'bg-white shadow-md py-2' 
        : 'bg-transparent py-4'
    }`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-poppins font-bold ${
              isScrolled || location.pathname !== '/' ? 'text-primary-800' : 'text-white'
            }`}>
              ArtisanCrafts
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`font-medium ${
              isScrolled || location.pathname !== '/' ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-neutral-200'
            } transition-colors`}>
              Home
            </Link>
            <Link to="/products" className={`font-medium ${
              isScrolled || location.pathname !== '/' ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-neutral-200'
            } transition-colors`}>
              Products
            </Link>

            <div className="flex items-center space-x-4">
              {user ? (
                <div className="relative group">
                  <button className={`flex items-center space-x-1 font-medium ${
                    isScrolled || location.pathname !== '/' ? 'text-neutral-800' : 'text-white'
                  }`}>
                    <User size={18} />
                    <span>{user.name}</span>
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block">
                    <button 
                      onClick={logout}
                      className="block w-full text-left px-4 py-2 text-sm text-neutral-800 hover:bg-neutral-100"
                    >
                      Sign Out
                    </button>
                  </div>
                </div>
              ) : (
                <Link to="/login" className={`font-medium ${
                  isScrolled || location.pathname !== '/' ? 'text-neutral-800 hover:text-primary-600' : 'text-white hover:text-neutral-200'
                } transition-colors`}>
                  Login
                </Link>
              )}
              
              <Link to="/cart" className="relative">
                <ShoppingCart className={
                  isScrolled || location.pathname !== '/' ? 'text-neutral-800' : 'text-white'
                } />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-4">
            <Link to="/cart" className="relative">
              <ShoppingCart className={
                isScrolled || location.pathname !== '/' ? 'text-neutral-800' : 'text-white'
              } />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
            <button
              onClick={toggleMenu}
              className={isScrolled || location.pathname !== '/' ? 'text-neutral-800' : 'text-white'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-3">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 text-neutral-800 hover:text-primary-600">
                Home
              </Link>
              <Link to="/products" className="py-2 text-neutral-800 hover:text-primary-600">
                Products
              </Link>
              {user ? (
                <>
                  <span className="py-2 text-neutral-800">Welcome, {user.name}</span>
                  <button 
                    onClick={logout}
                    className="py-2 text-left text-neutral-800 hover:text-primary-600"
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link to="/login" className="py-2 text-neutral-800 hover:text-primary-600">
                  Login
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;