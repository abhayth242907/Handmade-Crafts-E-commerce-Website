import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const UserDashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-poppins font-bold text-neutral-900 mb-6">
          My Account
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">My Orders</h2>
            <p className="text-neutral-600 mb-4">
              View your order history and track current orders.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View Orders →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <p className="text-neutral-600 mb-4">
              Update your personal information and preferences.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Edit Profile →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Saved Items</h2>
            <p className="text-neutral-600 mb-4">
              View and manage your wishlist and saved products.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View Wishlist →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;