// src/components/SupplierProductCont.tsx
import React, { useState, useEffect } from 'react';
import { FaTrash } from 'react-icons/fa';

type Product = {
    id: number;
    name: string;
};

type SupplierProductContProps = {
    supplier: { id: number; name: string; products: Product[] };
    onClose: () => void;
};

const fictionalProducts: Product[] = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
];

export default function SupplierProductCont({ supplier, onClose }: SupplierProductContProps) {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // Simulate fetching products from a data array
        setProducts(fictionalProducts);
    }, []);

    const handleDeleteProduct = (id: number) => {
        setProducts((prevProducts) => prevProducts.filter((product) => product.id !== id));
    };

    const handleAddProduct = () => {
        // Logic to add a new product
        // For now, just log the action
        console.log('Add new product');
    };

    return (
        <div>
            <h2 className="text-xl font-semibold mb-4">Products of {supplier.name}</h2>
            <ul className="space-y-4">
                {products.map((product) => (
                    <li key={product.id} className="flex justify-between items-center border p-3 rounded-md">
                        <span className="text-gray-700 font-medium">{product.name}</span>
                        <button
                            onClick={() => handleDeleteProduct(product.id)}
                            className="text-red-500 hover:text-red-700 p-2 rounded-full transition-colors duration-200"
                            aria-label="Delete Product"
                        >
                            <FaTrash />
                        </button>
                    </li>
                ))}
            </ul>
            <button
                onClick={handleAddProduct}
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
                Add Product
            </button>
            <button
                onClick={onClose}
                className="mt-4 w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
            >
                Close
            </button>
        </div>
    );
}