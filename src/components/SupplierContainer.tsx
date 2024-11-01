// src/components/SupplierContainer.tsx
import React, { useState } from 'react';
import { FaTrash, FaCog } from 'react-icons/fa';
import SupplierProductCont from './SupplierProductCont';

type Supplier = {
    id: number;
    name: string;
    direction: string;
    email: string;
    products: { id: number; name: string }[];
};

type SupplierContainerProps = {
    supplier: Supplier;
    onDelete: (id: number) => void;
};

export default function SupplierContainer({ supplier }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    return (
        <div className="p-4 border border-gray-200 rounded-md hover:shadow-sm transition-shadow duration-300 ease-in-out flex justify-between items-center">
            <div>
                <p className="font-semibold text-gray-900 mb-1">{supplier.name}</p>
                <p className="text-gray-600 text-sm mb-1">{supplier.direction}</p>
                <p className="text-gray-500 text-sm">{supplier.email}</p>
            </div>
            <div className="flex space-x-2">
                <button
                    onClick={() => setIsPopupOpen(true)}
                    className="text-gray-500 hover:text-gray-700 p-2 rounded-full transition-colors duration-200"
                    aria-label="Settings"
                >
                    <FaCog />
                </button>
                <button
                    className="text-red-500 hover:text-red-700 p-2 rounded-full transition-colors duration-200"
                    aria-label="Delete Supplier"
                >
                    <FaTrash />
                </button>
            </div>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                        <SupplierProductCont
                            supplier={supplier}
                            onClose={() => setIsPopupOpen(false)}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}