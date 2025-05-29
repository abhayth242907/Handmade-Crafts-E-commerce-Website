import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import Button from '../components/ui/Button';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart, total } = useCart();
  
  const handleQuantityChange = (id: number, quantity: number) => {
    updateQuantity(id, quantity);
  };
  
  // Calculate subtotal, shipping, and taxes
  const subtotal = total;
  const shipping = subtotal > 0 ? 200.00 : 0; // NPR 200 shipping
  const tax = subtotal * 0.13; // 13% VAT
  const orderTotal = subtotal + shipping + tax;
  
  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-poppins font-bold text-neutral-900 mb-6">Your Cart</h1>
        
        {items.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="flex justify-center mb-4">
              <ShoppingBag size={64} className="text-neutral-400" />
            </div>
            <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
            <p className="text-neutral-600 mb-6">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <Button variant="primary">
                Continue Shopping
              </Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Cart items */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg font-medium">
                      Cart Items ({items.length})
                    </h2>
                    <button 
                      onClick={clearCart}
                      className="text-sm text-red-600 hover:text-red-700 flex items-center"
                    >
                      <Trash2 size={16} className="mr-1" />
                      Clear Cart
                    </button>
                  </div>
                  
                  <div className="divide-y divide-neutral-200">
                    {items.map(item => (
                      <div key={item.id} className="py-4 flex flex-col sm:flex-row">
                        <div className="sm:w-24 h-24 bg-neutral-100 rounded-md overflow-hidden mb-4 sm:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        
                        <div className="sm:ml-4 flex-1">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <div>
                              <h3 className="text-lg font-medium text-neutral-800">
                                {item.name}
                              </h3>
                              <p className="text-sm text-neutral-500 mb-2">
                                Unit Price: NPR {item.price.toLocaleString()}
                              </p>
                            </div>
                            
                            <div className="text-lg font-medium text-neutral-800">
                              NPR {(item.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                          
                          <div className="flex justify-between items-center mt-2">
                            <div className="flex items-center">
                              <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                                className="text-neutral-600 hover:text-neutral-800 p-1"
                              >
                                <Minus size={16} />
                              </button>
                              <span className="mx-2 w-8 text-center">
                                {item.quantity}
                              </span>
                              <button 
                                onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                                className="text-neutral-600 hover:text-neutral-800 p-1"
                              >
                                <Plus size={16} />
                              </button>
                            </div>
                            
                            <button 
                              onClick={() => removeItem(item.id)}
                              className="text-red-600 hover:text-red-700"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="mt-6 flex flex-col sm:flex-row justify-between gap-4">
                <Link to="/products">
                  <Button variant="outline">
                    Continue Shopping
                  </Button>
                </Link>
                
                <Link to="/checkout">
                  <Button variant="primary">
                    Proceed to Checkout
                  </Button>
                </Link>
              </div>
            </div>
            
            {/* Order summary */}
            <div className="lg:w-1/3">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-lg font-medium mb-4">Order Summary</h2>
                
                <div className="space-y-3">
                  <div className="flex justify-between text-neutral-600">
                    <span>Subtotal</span>
                    <span>NPR {subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>Shipping</span>
                    <span>NPR {shipping.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-neutral-600">
                    <span>VAT (13%)</span>
                    <span>NPR {tax.toLocaleString()}</span>
                  </div>
                  
                  <div className="border-t border-neutral-200 pt-3 mt-3">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>NPR {orderTotal.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Link to="/checkout">
                    <Button variant="accent" fullWidth>
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
                
                <div className="mt-4">
                  <p className="text-xs text-neutral-500 text-center">
                    Shipping & taxes calculated at checkout
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;