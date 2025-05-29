import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const AdminDashboard: React.FC = () => {
  const { user } = useAuth();

  if (!user || user.role !== 'ADMIN') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-neutral-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-poppins font-bold text-neutral-900 mb-6">
          Admin Dashboard
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Products</h2>
            <p className="text-neutral-600 mb-4">
              Manage your product inventory, add new items, and update existing ones.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Manage Products →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Orders</h2>
            <p className="text-neutral-600 mb-4">
              View and process customer orders, track shipments, and manage returns.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              View Orders →
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Users</h2>
            <p className="text-neutral-600 mb-4">
              Manage user accounts, view customer profiles, and handle support requests.
            </p>
            <button className="text-primary-600 hover:text-primary-700 font-medium">
              Manage Users →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;