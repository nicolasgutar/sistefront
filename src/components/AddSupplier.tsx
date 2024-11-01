// src/components/AddSupplier.tsx
import React from 'react';

export default function AddSupplier() {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Add New Supplier</h3>
            <form className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Supplier Name</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Supplier Name" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Direction</label>
                    <input type="text" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Direction" />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Email</label>
                    <input type="email" className="mt-1 block w-full p-2 border border-gray-300 rounded-md" placeholder="Email" />
                </div>
                <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Submit</button>
            </form>
        </div>
    );
}
