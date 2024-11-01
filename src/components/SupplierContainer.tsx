// src/components/SupplierContainer.tsx
import React from 'react';
import { FaTrash } from 'react-icons/fa'; // Trash icon from react-icons

type Supplier = {
    id: number;
    name: string;
    direction: string;
    email: string;
};

type SupplierContainerProps = {
    supplier: Supplier;
    onDelete: (id: number) => void;
};

export default function SupplierContainer({ supplier, onDelete }: SupplierContainerProps) {
    return (
        <div className="p-4 border border-gray-200 rounded-md hover:shadow-sm transition-shadow duration-300 ease-in-out flex justify-between items-center">
            <div>
                <p className="font-semibold text-gray-900 mb-1">{supplier.name}</p>
                <p className="text-gray-600 text-sm mb-1">{supplier.direction}</p>
                <p className="text-gray-500 text-sm">{supplier.email}</p>
            </div>
            <button
                onClick={() => onDelete(supplier.id)}
                className="text-red-500 hover:text-red-700 p-2 rounded-full transition-colors duration-200"
                aria-label="Delete Supplier"
            >
                <FaTrash />
            </button>
        </div>
    );
}
