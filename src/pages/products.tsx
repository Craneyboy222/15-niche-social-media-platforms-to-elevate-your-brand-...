import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

const ProductsPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching products
    setTimeout(() => {
      setLoading(false);
      setProducts([
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
      ]);
    }, 1000);
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Products</h1>
      <ul>
        {products.map(product => (
          <li key={product.id} className="mb-4">
            <Link href={`/products/${product.id}`}><a className="text-blue-500">{product.name}</a></Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default ProductsPage;