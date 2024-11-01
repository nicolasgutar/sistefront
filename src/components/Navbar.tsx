import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-gray-800 p-4 shadow-lg">
            <ul className="flex justify-center space-x-8">
                <li>
                    <Link href="/" className="text-white hover:text-gray-300 font-semibold">
                        Warehouses
                    </Link>
                </li>
                <li>
                    <Link href="/suppliers" className="text-white hover:text-gray-300 font-semibold">
                        Suppliers
                    </Link>
                </li>
            </ul>
        </nav>
    );
}
