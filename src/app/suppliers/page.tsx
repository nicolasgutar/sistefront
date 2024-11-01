"use client"

// src/app/suppliers/page.tsx
import React, { useState } from 'react';
import SupplierList from '../../components/SupplierLIst';
import AddSupplier from '../../components/AddSupplier';

export default function SuppliersPage() {
    const [showForm, setShowForm] = useState(false);

    const toggleForm = () => setShowForm((prev) => !prev);

    return (
        <div className="flex p-6 space-x-6">
            {/* Supplier List Section */}
            <div className="w-1/2">
                <SupplierList toggleForm={toggleForm} />
            </div>

            {/* Add Supplier Form Section */}
            <div className={`w-1/2 transition-opacity duration-300 ${showForm ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                {showForm && <AddSupplier />}
            </div>
        </div>
    );
}
