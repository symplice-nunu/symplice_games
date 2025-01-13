import React from 'react'

export default function Home() {
    return (
        <div className="min-h-screen flex">
          {/* Sidebar */}
          <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2">
            <div className="text-center">
              <h2 className="text-3xl font-semibold">Admin</h2>
            </div>
            <nav>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Dashboard
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Users
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Settings
              </a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700">
                Logout
              </a>
            </nav>
          </div>
    
          {/* Main Content */}
          <div className="flex-1 bg-gray-100 p-10">
            <header className="flex justify-between items-center mb-10">
              <h1 className="text-2xl font-bold text-gray-700">Dashboard</h1>
              <div>
                <input
                  type="search"
                  placeholder="Search..."
                  className="px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-600"
                />
              </div>
            </header>
    
            <main className="grid grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Card 1</h3>
                <p className="text-gray-600">This is a simple card with some placeholder content.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Card 2</h3>
                <p className="text-gray-600">This is a simple card with some placeholder content.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Card 3</h3>
                <p className="text-gray-600">This is a simple card with some placeholder content.</p>
              </div>
            </main>
          </div>
        </div>
      );
    }

