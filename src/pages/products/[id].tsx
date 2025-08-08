import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

const ProductDetailPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    if (id) {
      // Simulate fetching product details
      setTimeout(() => {
        setLoading(false);
        setProduct({ id, name: `Product ${id}`, description: `Description for product ${id}` });
      }, 1000);
    }
  }, [id]);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
      <p>{product.description}</p>
    </main>
  );
};

export default ProductDetailPage;