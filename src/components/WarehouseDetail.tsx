import { useState } from 'react';
import GraphComponent from "./GraphComponent";
import productData from '../data/sales_data.json';
import forecastData from '../data/pron_data (4).json';

const products = [
    { id: 1, name: 'Product A', stock: 100 },
    { id: 2, name: 'Product B', stock: 50 },
    { id: 3, name: 'Product C', stock: 75 },
    { id: 4, name: 'Product D', stock: 30 },
];

const demand = {
    'Product A': 788,
    'Product B': 499,
    'Product C': 81,
    'Product D': 601,
};

export default function WarehouseDetail({ warehouse }) {
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showDetail, setShowDetail] = useState(false);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const toggleDetail = () => setShowDetail((prev) => !prev);

    if (!warehouse) {
        return (
            <h2 className="text-xl font-semibold text-gray-400 text-center mt-10">
                Select a warehouse to see more information
            </h2>
        );
    }

    const calculateMissingUnits = (product) => {
        const required = demand[product.name];
        const missing = required - product.stock;
        return missing > 0 ? missing : 0;
    };

    return (
        <div className="flex space-x-6 bg-white p-6 rounded-lg shadow-md">
            <div className="w-1/3">
                <h2 className="text-2xl font-semibold text-gray-800">{warehouse.name}</h2>
                <p className="text-gray-500 mt-2">
                    Location: <span className="text-gray-700">{warehouse.location}</span>
                </p>

                <div className="flex space-x-2 mt-4">
                    <button
                        onClick={toggleDetail}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                    >
                        {!showDetail ? 'Ver Menos' : 'Ver Detalle'}
                    </button>
                    <button
                        onClick={() => setIsPopupOpen(true)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md"
                    >
                        PO Details
                    </button>
                </div>

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
                    <li
                        className="flex justify-center items-center border p-3 rounded-md cursor-pointer bg-gray-50 hover:bg-gray-100"
                        onClick={() => console.log('Add new product')}
                    >
                        <span className="text-gray-500 font-medium">+</span>
                    </li>
                </ul>
            </div>

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

            {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl">
                        <h2 className="text-xl font-semibold mb-4">Stock and Demand Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            {products.map((product) => (
                                <div key={product.id} className="border p-3 rounded-md">
                                    <p className="text-gray-700 font-medium">{product.name}</p>
                                    <p className="text-gray-500">Stock: {product.stock}</p>
                                    <p className="text-gray-500">Required: {demand[product.name]}</p>
                                    <p className="text-gray-500">Missing: {calculateMissingUnits(product)}</p>
                                </div>
                            ))}
                        </div>
                        <button
                            onClick={() => console.log('Generar OC')}
                            className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Generate PO
                        </button>
                        <button
                            onClick={() => setIsPopupOpen(false)}
                            className="mt-4 w-full py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}