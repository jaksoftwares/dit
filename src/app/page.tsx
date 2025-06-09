'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LaptopIcon, Users, Globe, BookOpenText } from 'lucide-react';
import CourseTracks from '@/components/CourseTracks';

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
              href="/courses"
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

      {/* About Section */}
<section className="py-16 px-4 bg-gray-50">
  <div className="max-w-5xl mx-auto text-center">
    <h2 className="text-3xl font-bold text-blue-800 mb-6">About Dovepeak Institute of Technology</h2>
    <p className="text-gray-700 text-lg leading-relaxed mb-6">
      Dovepeak Institute of Technology (DIT) is a forward-thinking institution committed to nurturing the next generation of tech professionals. 
      We provide high-quality, accessible, and practical IT education tailored to meet the evolving needs of the digital world. 
      Our mission is to empower learners with relevant skills through flexible hybrid learning models, experienced tutors, and hands-on training.
    </p>
    <Link
      href="/courses"
      className="inline-block bg-blue-700 text-white px-6 py-3 rounded-md shadow hover:bg-blue-800 transition"
    >
      Join DIT Today
    </Link>
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


<CourseTracks />


      {/* CTA Section */}
      <section className="bg-blue-700 py-12 px-4 text-white text-center -mb-10">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Tech Career?</h2>
          <p className="mb-6">
            Enroll at DIT and gain the skills you need to succeed in today’s digital world.
          </p>
          <Link
            href="/courses"
            className="bg-white text-blue-700 px-6 py-3 rounded-md font-medium hover:bg-gray-100"
          >
            Apply Now
          </Link>
        </div>
      </section>
    </div>
  );
}
