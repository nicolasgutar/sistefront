"use client";

import { useState } from 'react';
import WarehouseList from '../components/WarehouseList';
import WarehouseDetail from '../components/WarehouseDetail';

export default function HomePage() {
    const [selectedWarehouse, setSelectedWarehouse] = useState(null);

    const warehouses = [
        { id: 1, name: 'Warehouse A', location: 'CC Santa FE', details: 'Details about Warehouse A' },
        { id: 2, name: 'Warehouse B', location: 'CC Mayorca', details: 'Details about Warehouse B' },
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-[calc(100vh-4rem)] h-[calc(100vh-4rem)] flex space-x-6">
            {/* Left Column: Warehouse List */}
            <WarehouseList
                warehouses={warehouses}
                onSelectWarehouse={setSelectedWarehouse}
            />

            {/* Right Column: Warehouse Details */}
            <div className="w-3/4 bg-white rounded-lg shadow-md p-6"> {/* Adjusted to 3/4 width (75%) */}
                <WarehouseDetail warehouse={selectedWarehouse} />
            </div>
        </div>
    );
}
