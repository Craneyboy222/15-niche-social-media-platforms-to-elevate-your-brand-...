import React, { useState, useEffect } from 'react';
import { Spinner } from '../components/Spinner';
import { Error } from '../components/Error';

const OrdersPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [orders, setOrders] = useState<any[]>([]);

  useEffect(() => {
    // Simulate fetching orders
    setTimeout(() => {
      setLoading(false);
      setOrders([
        { id: 1, status: 'Shipped', total: '$100.00' },
        { id: 2, status: 'Processing', total: '$50.00' },
      ]);
    }, 1000);
  }, []);

  if (loading) return <Spinner />;
  if (error) return <Error message={error} />;

  return (
    <main className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-8">Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id} className="mb-4">
            <div className="bg-white p-4 rounded-md shadow-md">
              <h2 className="text-2xl font-semibold">Order #{order.id}</h2>
              <p>Status: {order.status}</p>
              <p>Total: {order.total}</p>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default OrdersPage;