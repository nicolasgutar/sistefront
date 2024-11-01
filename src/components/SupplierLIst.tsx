// src/components/SupplierList.tsx
import React, { useState } from 'react';
import SupplierContainer from './SupplierContainer';

type Supplier = {
    id: number;
    name: string;
    direction: string;
    email: string;
};

type SupplierListProps = {
    toggleForm: () => void;
};

export default function SupplierList({ toggleForm }: SupplierListProps) {
    const [suppliers, setSuppliers] = useState<Supplier[]>([
        { id: 1, name: 'Supplier X', direction: '123 Main St', email: 'email@example.com' },
        { id: 2, name: 'Supplier Y', direction: '456 Elm St', email: 'contact@example.com' },
    ]);

    // Delete supplier function
    const handleDelete = (id: number) => {
        setSuppliers((prevSuppliers) => prevSuppliers.filter((supplier) => supplier.id !== id));
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center border-b pb-3">Suppliers</h2>
            <ul className="space-y-4">
                {suppliers.map((supplier) => (
                    <li key={supplier.id}>
                        <SupplierContainer supplier={supplier} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
            <button
                onClick={toggleForm}
                className="mt-6 w-full py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
            >
                Add Supplier
            </button>
        </div>
    );
}
