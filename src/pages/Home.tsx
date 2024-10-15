import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to Our Online Store</h1>
      <p className="text-xl mb-8">Discover amazing products at great prices!</p>
      <Link to="/shop" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition-colors">
        Start Shopping
      </Link>
    </div>
  );
};

export default Home;