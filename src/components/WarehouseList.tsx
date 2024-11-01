import React from 'react';

export default function WarehouseList({ warehouses, onSelectWarehouse }) {
    return (
        <div className="w-1/4 bg-white rounded-lg shadow-md p-4">
            <h2 className="text-lg font-semibold mb-4">Warehouses</h2>
            <ul className="space-y-4">
                {warehouses.map((warehouse) => (
                    <li
                        key={warehouse.id}
                        className="p-4 border border-gray-200 rounded-md cursor-pointer hover:bg-gray-50"
                        onClick={() => onSelectWarehouse(warehouse)}
                    >
                        {warehouse.name}
                    </li>
                ))}
            </ul>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                +
            </button>
        </div>
    );
}