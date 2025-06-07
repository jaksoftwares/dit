'use client';

import Link from 'next/link';
import { courses } from '@/constants/courses';
import type { FC } from 'react';
import { motion } from 'framer-motion';

const CourseTracks: FC = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-blue-800 mb-6">
          Web Development Modules at Dovepeak
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-14">
          A carefully structured curriculum — each module building towards your mastery as a full-stack developer.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <motion.div
              key={course.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border border-gray-200"
            >
              <div className="text-5xl mb-4">{course.icon}</div>

              <h3 className="text-xl font-semibold text-blue-700 mb-1">{course.title}</h3>
              <p className="text-sm italic text-gray-600 mb-2">{course.focus}</p>

              <p className="text-sm text-gray-500 mb-1">
                <strong>Duration:</strong> {course.duration}
              </p>
              <p className="text-sm text-gray-500 mb-3">
                <strong>Study Mode:</strong> {course.studyMode}
              </p>

              <ul className="list-disc list-inside text-gray-700 text-sm mb-3 space-y-1">
                {course.technologies.slice(0, 4).map((tech, i) => (
                  <li key={i}>{tech}</li>
                ))}
              </ul>

              <p className="text-sm text-gray-600 mb-3">
                <strong>Who It&apos;s For:</strong> {course.targetAudience.split(',')[0]}...
              </p>

              <p className="text-lg font-bold text-gray-800 mb-5">{course.price}</p>

              <Link
                href={`/courses/${course.slug}`}
                className="inline-block w-full text-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 transition font-medium"
              >
                View Details
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseTracks;
