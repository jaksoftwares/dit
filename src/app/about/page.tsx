'use client';

import Image from 'next/image';
import CTASection from '@/components/Cta';
import { Building, Users, Globe, ShieldCheck,  } from 'lucide-react';

export default function About() {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-16 px-4">
  <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
    <div className="md:w-1/2">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-800 leading-tight mb-4">
        About Dovepeak Institute of Technology (DIT)
      </h1>
      <p className="text-gray-700 mb-6">
        Dovepeak Institute of Technology (DIT) is a leading institution committed to transforming students into skilled professionals in the world of technology.
        We provide both online and physical classes, empowering students with knowledge and practical skills to thrive in the digital world.
      </p>
    </div>
    <div className="md:w-1/2">
      <Image
        src="/hero-bg.jpg"
        alt="DIT Campus"
        width={500}
        height={400}
        className="w-full h-auto rounded-xl shadow-md" // Ensures the image is responsive
      />
    </div>
  </div>
</section>

      {/* Our Mission and Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Our Mission & Vision</h2>
          <div className="lg:flex lg:justify-between">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Mission</h3>
              <p className="text-gray-600">
                To provide innovative, high-quality education and training that equips students with practical skills for the future. We focus on building the next generation of tech professionals.
              </p>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Vision</h3>
              <p className="text-gray-600">
                To be the leading institution that bridges the gap between education and the ever-evolving tech industry. Our goal is to produce competent, employable, and innovative individuals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <ShieldCheck size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Integrity</h3>
              <p className="text-gray-600 text-sm">We are committed to maintaining high standards of ethics, transparency, and trustworthiness in all our endeavors.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <Users size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Collaboration</h3>
              <p className="text-gray-600 text-sm">We believe in the power of teamwork, both within our institution and in our partnerships with the industry.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <Building size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Excellence</h3>
              <p className="text-gray-600 text-sm">We strive to provide the best educational experience and continuously improve our methods, content, and delivery.</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <Globe size={40} className="text-blue-700 mx-auto mb-4" />
              <h3 className="font-semibold text-lg">Innovation</h3>
              <p className="text-gray-600 text-sm">We foster creativity and innovation to stay ahead of the curve in the ever-evolving world of technology.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Facilities */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-10">State-of-the-Art Facilities</h2>
          <p className="text-gray-700 mb-8">
            DIT provides students with access to cutting-edge technology and learning resources to enhance their educational experience. Our campus features modern classrooms, tech labs, and a fully equipped online learning platform.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <Image
                src="/classrooms.jpg"
                alt="Classroom"
                width={350}
                height={250}
                className="w-full rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-blue-700">Classrooms</h3>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <Image
                src="/tech-classes.jpg"
                alt="Tech Lab"
                width={350}
                height={250}
                className="w-full rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-blue-700">Tech Labs</h3>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <Image
                src="/online.jpg"
                alt="Online Learning"
                width={350}
                height={250}
                className="w-full rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-blue-700">Online Learning</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <CTASection/>
    </div>
  );
}
