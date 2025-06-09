'use client';

import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="bg-blue-700 py-12 px-4 text-white text-center -mb-10">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
        <p className="mb-6">
          Enroll at DIT and gain the skills you need to succeed in today’s digital world.
        </p>
        <Link
          href="/courses"
          className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100 transition-colors duration-200"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
}
