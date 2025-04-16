'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Courses() {
  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">
            Our Courses
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            At Dovepeak Institute of Technology, we offer a wide range of courses designed to equip you with the skills and knowledge needed to excel in the tech industry. Explore our programs and find the one that suits your career goals.
          </p>
        </div>
      </section>

      {/* Courses List Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">Our Popular Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Course 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src="/images/web-development.jpg"
                alt="Web Development"
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-4">
                Learn the latest web technologies to build responsive and interactive websites. This course covers HTML, CSS, JavaScript, and popular frameworks.
              </p>
              <Link
                href="/courses/web-development"
                className="inline-block text-blue-700 font-medium hover:text-blue-800"
              >
                Learn More
              </Link>
            </div>

            {/* Course 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src="/images/data-science.jpg"
                alt="Data Science"
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Data Science</h3>
              <p className="text-gray-600 mb-4">
                Dive into the world of data analysis and machine learning. Learn Python, data visualization, and how to extract meaningful insights from large datasets.
              </p>
              <Link
                href="/courses/data-science"
                className="inline-block text-blue-700 font-medium hover:text-blue-800"
              >
                Learn More
              </Link>
            </div>

            {/* Course 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src="/images/cyber-security.jpg"
                alt="Cyber Security"
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Cyber Security</h3>
              <p className="text-gray-600 mb-4">
                Understand the fundamentals of protecting systems and networks. This course covers cryptography, ethical hacking, and risk management strategies.
              </p>
              <Link
                href="/courses/cyber-security"
                className="inline-block text-blue-700 font-medium hover:text-blue-800"
              >
                Learn More
              </Link>
            </div>

            {/* Course 4 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src="/images/mobile-app.jpg"
                alt="Mobile App Development"
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Mobile App Development</h3>
              <p className="text-gray-600 mb-4">
                Learn how to create mobile applications for Android and iOS. Master key technologies like React Native and Flutter to build cross-platform apps.
              </p>
              <Link
                href="/courses/mobile-app-development"
                className="inline-block text-blue-700 font-medium hover:text-blue-800"
              >
                Learn More
              </Link>
            </div>

            {/* Course 5 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src="/images/artificial-intelligence.jpg"
                alt="Artificial Intelligence"
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Artificial Intelligence</h3>
              <p className="text-gray-600 mb-4">
                Explore the world of AI and machine learning. This course covers the fundamentals of AI algorithms, neural networks, and deep learning.
              </p>
              <Link
                href="/courses/artificial-intelligence"
                className="inline-block text-blue-700 font-medium hover:text-blue-800"
              >
                Learn More
              </Link>
            </div>

            {/* Course 6 */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <Image
                src="/images/cloud-computing.jpg"
                alt="Cloud Computing"
                width={350}
                height={200}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Cloud Computing</h3>
              <p className="text-gray-600 mb-4">
                Learn about cloud infrastructures, services, and platforms. Understand how to leverage cloud computing for scalable and cost-effective solutions.
              </p>
              <Link
                href="/courses/cloud-computing"
                className="inline-block text-blue-700 font-medium hover:text-blue-800"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Faculty Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Meet Our Experienced Faculty</h2>
          <p className="text-lg text-gray-700 mb-10">
            Our instructors are industry experts with real-world experience. They are dedicated to providing hands-on training and guidance to ensure students succeed in their careers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
            {/* Faculty 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/faculty-1.jpg"
                alt="Faculty Member"
                width={150}
                height={150}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Dr. John Doe</h3>
              <p className="text-gray-600">Senior Web Developer and Instructor</p>
            </div>

            {/* Faculty 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/faculty-2.jpg"
                alt="Faculty Member"
                width={150}
                height={150}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Prof. Jane Smith</h3>
              <p className="text-gray-600">Data Science and AI Expert</p>
            </div>

            {/* Faculty 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src="/images/faculty-3.jpg"
                alt="Faculty Member"
                width={150}
                height={150}
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-700 mb-2">Dr. Emily Lee</h3>
              <p className="text-gray-600">Cyber Security Specialist</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
