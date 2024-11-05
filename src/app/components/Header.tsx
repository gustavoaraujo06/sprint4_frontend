'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-sky-500 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">
          <Link href="/">
            Mecatus
          </Link>
        </h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="/">
                <span className="hover:underline">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/gerenciar/clientes">
                <span className="hover:underline">Gerenciar</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
