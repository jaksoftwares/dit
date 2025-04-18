'use client';

import Link from 'next/link';
import { ArrowLeftCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-white">
      <div className="max-w-md">
        <h1 className="text-6xl font-bold text-blue-800 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 text-base mb-6">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="inline-flex items-center text-white bg-blue-700 hover:bg-blue-800 px-6 py-3 rounded-xl text-sm font-medium transition-all shadow"
        >
          <ArrowLeftCircle className="w-5 h-5 mr-2" />
          Back to Homepage
        </Link>
      </div>
    </div>
  );
}
