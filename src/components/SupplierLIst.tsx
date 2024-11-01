export default function SupplierList() {

    const suppliers = [
        { id: 1, name: 'Supplier X', contact: 'email@example.com' },
        { id: 2, name: 'Supplier Y', contact: 'contact@example.com' },
    ];

    return (
        <ul>
            {suppliers.map((supplier) => (
                <li key={supplier.id}>
                    {supplier.name} - {supplier.contact}
                </li>
            ))}
        </ul>
    );
}
