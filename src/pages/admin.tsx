import Link from 'next/link';

const AdminDashboard = () => {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Admin Dashboard</h1>
      <ul className="list-disc pl-5">
        <li><Link href="/admin/users"><a>Users Management</a></Link></li>
        <li><Link href="/admin/products"><a>Products Management</a></Link></li>
        <li><Link href="/admin/orders"><a>Orders Management</a></Link></li>
        <li><Link href="/admin/analytics"><a>Analytics</a></Link></li>
      </ul>
    </div>
  );
};

export default AdminDashboard;