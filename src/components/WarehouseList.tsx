import React, { useState } from 'react';

export default function WarehouseList({ warehouses, onSelectWarehouse }) {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [newWarehouse, setNewWarehouse] = useState({ name: '', direction: '' });

    const handleAddWarehouse = () => {
        // Logic to add the new warehouse
        // For now, just log the new warehouse details
        console.log(newWarehouse);
        setIsPopupOpen(false);
    };

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
            <button
                className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                onClick={() => setIsPopupOpen(true)}
            >
                +
            </button>

            {isPopupOpen && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-start">
                    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md mx-auto my-auto">
                        <h2 className="text-xl font-semibold mb-4">Add New Warehouse</h2>
                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleAddWarehouse();
                            }}
                        >
                            <div className="mb-4">
                                <label className="block text-gray-700">Name</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={newWarehouse.name}
                                    onChange={(e) => setNewWarehouse({ ...newWarehouse, name: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Direction</label>
                                <input
                                    type="text"
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={newWarehouse.direction}
                                    onChange={(e) => setNewWarehouse({ ...newWarehouse, direction: e.target.value })}
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-4">
                                <button
                                    type="button"
                                    className="py-2 px-4 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                                    onClick={() => setIsPopupOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}