// WarehouseDetail.jsx
import { useState } from 'react';
import GraphComponent from "./GraphComponent";

const products = [
    { id: 1, name: 'Product A', stock: 100 },
    { id: 2, name: 'Product B', stock: 50 },
    { id: 3, name: 'Product C', stock: 75 },
    { id: 4, name: 'Product D', stock: 30 },
];

const productData = {
    'Product A': [
        { date: '2023-01-01', amount: 4000 },
        { date: '2023-02-01', amount: 3000 },
        { date: '2023-03-01', amount: 5000 },
        { date: '2023-04-01', amount: 7000 },
        { date: '2023-05-01', amount: 6000 },
        { date: '2023-06-01', amount: 8000 },
        { date: '2023-07-01', amount: 9000 },
        { date: '2023-08-01', amount: 10000 },
        { date: '2023-09-01', amount: 8500 },
        { date: '2023-10-01', amount: 9500 },
        { date: '2023-11-01', amount: 7500 },
        { date: '2023-12-01', amount: 11000 },
    ],
    'Product B': [
        { date: '2023-01-01', amount: 2500 },
        { date: '2023-02-01', amount: 2700 },
        { date: '2023-03-01', amount: 2600 },
        { date: '2023-04-01', amount: 2800 },
        { date: '2023-05-01', amount: 3000 },
        { date: '2023-06-01', amount: 3200 },
        { date: '2023-07-01', amount: 3500 },
        { date: '2023-08-01', amount: 3700 },
        { date: '2023-09-01', amount: 3900 },
        { date: '2023-10-01', amount: 4100 },
        { date: '2023-11-01', amount: 4300 },
        { date: '2023-12-01', amount: 4500 },
    ],
    'Product C': [
        { date: '2023-01-01', amount: 5500 },
        { date: '2023-02-01', amount: 5700 },
        { date: '2023-03-01', amount: 5900 },
        { date: '2023-04-01', amount: 6100 },
        { date: '2023-05-01', amount: 6300 },
        { date: '2023-06-01', amount: 6500 },
        { date: '2023-07-01', amount: 6700 },
        { date: '2023-08-01', amount: 6900 },
        { date: '2023-09-01', amount: 7100 },
        { date: '2023-10-01', amount: 7300 },
        { date: '2023-11-01', amount: 7500 },
        { date: '2023-12-01', amount: 7700 },
    ],
    'Product D': [
        { date: '2023-01-01', amount: 1800 },
        { date: '2023-02-01', amount: 1900 },
        { date: '2023-03-01', amount: 2000 },
        { date: '2023-04-01', amount: 2100 },
        { date: '2023-05-01', amount: 2200 },
        { date: '2023-06-01', amount: 2300 },
        { date: '2023-07-01', amount: 2400 },
        { date: '2023-08-01', amount: 2500 },
        { date: '2023-09-01', amount: 2600 },
        { date: '2023-10-01', amount: 2700 },
        { date: '2023-11-01', amount: 2800 },
        { date: '2023-12-01', amount: 2900 },
    ],
};


export default function WarehouseDetail({ warehouse }) {
    const [selectedProduct, setSelectedProduct] = useState(null);

    if (!warehouse) {
        return (
            <h2 className="text-xl font-semibold text-gray-400 text-center mt-10">
                Select a warehouse to see more information
            </h2>
        );
    }

    return (
        <div className="flex space-x-6 bg-white p-6 rounded-lg shadow-md">
            <div className="w-1/3">
                {/* Warehouse Details */}
                <h2 className="text-2xl font-semibold text-gray-800">{warehouse.name}</h2>
                <p className="text-gray-500 mt-2">
                    Location: <span className="text-gray-700">{warehouse.location}</span>
                </p>

                {/* Products List */}
                <h3 className="text-lg font-semibold mt-6 text-gray-700">Products</h3>
                <ul className="mt-2 space-y-2">
                    {products.map((product) => (
                        <li
                            key={product.id}
                            className={`flex justify-between items-center border p-3 rounded-md cursor-pointer ${
                                selectedProduct?.id === product.id ? 'bg-blue-100' : 'bg-gray-50'
                            }`}
                            onClick={() => setSelectedProduct(product)}
                        >
                            <span className="text-gray-700 font-medium">{product.name}</span>
                            <span className="text-gray-500">Stock: {product.stock}</span>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Graph Component */}
            <div className="w-2/3">
                <div className="bg-gray-50 p-4 rounded-md shadow-sm h-full">
                    {selectedProduct ? (
                        <GraphComponent data={productData[selectedProduct.name]} />
                    ) : (
                        <p>Select a product to see its sales graph.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
