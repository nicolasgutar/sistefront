import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const productData = [
    { name: 'Producto A', value: 40004 },
    { name: 'Producto B', value: 36993 },
    { name: 'Producto C', value: 37033 },
    { name: 'Producto D', value: 32674 },
];

const paymentData = [
    { name: 'Credit Card', value: 600 },
    { name: 'Cash', value: 400 },
];

const storeData = [
    { name: 'Store A', value: 750 },
    { name: 'Store B', value: 250 },
];

const PRODUCT_COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042']; // Colors for product chart
const PAYMENT_COLORS = ['#4CAF50', '#FFC107']; // Green for CC, Yellow for Cash
const STORE_COLORS = ['#2196F3', '#FF5722']; // Blue for Store A, Orange for Store B

export default function InsightsContent() {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
            <h1 className="text-2xl font-bold mb-6">Insights</h1>
            <div className="flex justify-center items-center space-x-8">
                {/* Product Distribution Pie Chart */}
                <div>
                    <h2 className="text-lg font-semibold text-center mb-4">Product Distribution</h2>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={productData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {productData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={PRODUCT_COLORS[index % PRODUCT_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                {/* Payment Method Pie Chart */}
                <div>
                    <h2 className="text-lg font-semibold text-center mb-4">Payment Method</h2>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={paymentData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {paymentData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={PAYMENT_COLORS[index % PAYMENT_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>

                {/* Store Location Pie Chart */}
                <div>
                    <h2 className="text-lg font-semibold text-center mb-4">Store Locations</h2>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={storeData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                            outerRadius={150}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {storeData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={STORE_COLORS[index % STORE_COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </div>
            </div>
        </div>
    );
}