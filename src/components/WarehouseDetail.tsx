import { useState } from 'react';
import GraphComponent from "./GraphComponent";
import productData from '../data/sales_data.json';
import forecastData from '../data/pron_data.json';

const products = [
    { id: 1, name: 'Product A', stock: 100 },
    { id: 2, name: 'Product B', stock: 50 },
    { id: 3, name: 'Product C', stock: 75 },
    { id: 4, name: 'Product D', stock: 30 },
];

export default function WarehouseDetail({ warehouse }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDetail, setShowDetail] = useState(false); // Toggle for detailed view

    const toggleDetail = () => setShowDetail((prev) => !prev);

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

                {/* Toggle Button */}
                <button
                    onClick={toggleDetail}
                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
                >
                    {!showDetail ? 'Ver Menos' : 'Ver Detalle'}
                </button>

                {/* Products List with Scroll */}
                <h3 className="text-lg font-semibold mt-6 text-gray-700">Products</h3>
                <ul className="mt-2 space-y-2 h-40 overflow-y-auto border p-2 rounded-md">
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
                        productData[selectedProduct.name] ? (
                            <GraphComponent
                                data1={showDetail ? productData[selectedProduct.name] : productData[selectedProduct.name].slice(-80)}
                                data2={forecastData[selectedProduct.name]}
                            />
                        ) : (
                            <p>Data for {selectedProduct.name} not available.</p>
                        )
                    ) : (
                        <p>Select a product to see its sales graph.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
