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
      href="/apply"
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

      {/* Enhanced Web Development Tracks */}
<section className="py-20 px-4 bg-gray-50">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">Explore Our Specialized Web Development Tracks</h2>
    <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
      Whether you&apos;re diving into frontend design, mastering backend logic, or building full-stack apps with Django or Next.js — our curated tracks are tailored to give you practical, real-world skills.
    </p>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        {
          title: 'Frontend Development with React',
          duration: '6 Weeks',
          price: 'KES 10,000',
          focus: 'Interactive UI Design & State Management',
          icon: '🎨',
          technologies: ['HTML5', 'CSS3', 'JavaScript ES6+', 'React.js', 'TailwindCSS', 'GitHub'],
        },
        {
          title: 'Backend Development with Django',
          duration: '6 Weeks',
          price: 'KES 12,000',
          focus: 'Robust Backend Apps & REST APIs',
          icon: '🛠️',
          technologies: ['Python', 'Django Framework', 'Django REST Framework', 'PostgreSQL', 'Authentication', 'API Testing'],
        },
        {
          title: 'Full-Stack Web Dev with Next.js & Django',
          duration: '10 Weeks',
          price: 'KES 18,000',
          focus: 'Modern Full-Stack Applications',
          icon: '🌐',
          technologies: ['Next.js (React)', 'TailwindCSS', 'Django REST API', 'Supabase/PostgreSQL', 'JWT Auth', 'Vercel Deployment'],
        },
        {
          title: 'Freelance Developer Launchpad',
          duration: '4 Weeks',
          price: 'KES 8,000',
          focus: 'Real Projects & Client Skills',
          icon: '💼',
          technologies: ['Portfolio Setup', 'GitHub Pages', 'Client Briefs', 'Project Tools (Trello, Notion)', 'Invoicing', 'Time Tracking'],
        },
        {
          title: 'UI/UX Design & Web Prototyping',
          duration: '3 Weeks',
          price: 'KES 6,000',
          focus: 'Beautiful, User-Friendly Interfaces',
          icon: '🧠',
          technologies: ['Figma', 'Color Theory', 'Wireframing', 'Prototyping', 'UX Research', 'Accessibility'],
        },
        {
          title: 'Website Management with WordPress',
          duration: '2 Weeks',
          price: 'KES 5,000',
          focus: 'Launch & Maintain Websites Easily',
          icon: '🔧',
          technologies: ['WordPress', 'Elementor', 'SEO Basics', 'Hosting & Domains', 'Backup & Security', 'Google Indexing'],
        },
      ].map((course) => (
        <div key={course.title} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="text-4xl mb-4">{course.icon}</div>
          <h3 className="text-xl font-semibold text-blue-700 mb-1">{course.title}</h3>
          <p className="text-gray-600 italic mb-1">{course.focus}</p>
          <p className="text-gray-600 text-sm mb-3">Duration: {course.duration}</p>
          <ul className="text-sm text-gray-700 list-disc list-inside mb-4 space-y-1">
            {course.technologies.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
          <p className="text-lg font-bold text-gray-800 mb-4">{course.price}</p>
          <Link
            href="/courses"
            className="inline-block bg-blue-700 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-800 transition"
          >
            View Details
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
