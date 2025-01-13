import React from 'react'

export default function Home() {
    return (
        <div className="min-h-screen flex">
              
          {/* Main Content */}
          <div className="flex-1 bg-gray-100 p-10">
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

