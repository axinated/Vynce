import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0">
                            <h1 className="text-2xl font-bold">Lusive</h1>
                        </div>
                        <nav className="hidden md:flex space-x-4">
                            <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Features</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Pricing</a>
                            <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>
                        </nav>
                    </div>
                    <div className="hidden md:flex items-center">
                        <a href="#" className="text-gray-700 hover:text-gray-900">Login</a>
                        <a href="#" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded">Sign Up</a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;