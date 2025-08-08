import Link from 'next/link';

export default function Custom404() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
        <p className="mb-4">Sorry, the page you are looking for does not exist.</p>
        <Link href="/">
          <a className="text-blue-500 underline">Go back to Home</a>
        </Link>
      </div>
    </div>
  );
}
