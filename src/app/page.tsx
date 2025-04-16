'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LaptopIcon, Users, Globe, BookOpenText } from 'lucide-react';

export default function Home() {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
              Welcome to Dovepeak Institute of Technology (DIT)
            </h1>
            <p className="text-gray-700 mb-6">
              Build a strong foundation in technology and innovation with our industry-focused IT programs.
              Hybrid classes. Certified trainers. Affordable packages.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md shadow hover:bg-blue-800 transition"
            >
              Apply Now
            </Link>
          </div>
          <div className="md:w-1/2">
            <Image
              src="/hero-bg.jpg"
              alt="Students Learning"
              width={500}
              height={400}
              className="rounded-xl shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Why DIT */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Why Choose DIT?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
              <LaptopIcon size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Practical Training</h3>
              <p className="text-gray-600 text-sm">Hands-on projects and real-world applications.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
              <Users size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Experienced Tutors</h3>
              <p className="text-gray-600 text-sm">Learn from industry experts and certified professionals.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
              <Globe size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Hybrid Learning</h3>
              <p className="text-gray-600 text-sm">Choose between online and in-person classes.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-lg shadow-sm">
              <BookOpenText size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Affordable Courses</h3>
              <p className="text-gray-600 text-sm">Professional training at student-friendly rates.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">Our Web Development Packages</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { title: 'Beginner Web Dev', duration: '4 Weeks', price: 'KES 8,000' },
              { title: 'Intermediate Web Dev', duration: '6 Weeks', price: 'KES 12,000' },
              { title: 'Full-Stack Bootcamp', duration: '10 Weeks', price: 'KES 18,000' },
            ].map((course) => (
              <div key={course.title} className="bg-white p-6 rounded-lg shadow hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-700">{course.title}</h3>
                <p className="text-gray-600 text-sm my-2">Duration: {course.duration}</p>
                <p className="text-gray-800 font-bold mb-3">{course.price}</p>
                <Link
                  href="/courses"
                  className="inline-block text-blue-700 hover:underline text-sm"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-700 py-12 px-4 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
          <p className="mb-6">
            Enroll at DIT and gain the skills you need to succeed in today’s digital world.
          </p>
          <Link
            href="/apply"
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
