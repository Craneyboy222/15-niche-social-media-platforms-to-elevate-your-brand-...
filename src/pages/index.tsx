import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

const HomePage: React.FC = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our App</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><Link href="/login"><a className="text-blue-500">Login</a></Link></li>
          <li><Link href="/register"><a className="text-blue-500">Register</a></Link></li>
          <li><Link href="/dashboard"><a className="text-blue-500">Dashboard</a></Link></li>
        </ul>
      </nav>
    </main>
  );
};

export default HomePage;