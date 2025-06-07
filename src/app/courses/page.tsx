import Link from 'next/link';
import { courses } from '@/constants/courses';
import { GraduationCap } from 'lucide-react';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-20 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Explore Our Professional IT Courses</h1>
          <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
            Gain the skills to excel in today’s tech world. Whether you&apos;re a beginner or looking to specialize, we have a course tailored for you.
          </p>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, idx) => (
              <div
                key={idx}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4 text-blue-700">
                    <GraduationCap className="w-6 h-6" />
                    <h2 className="text-xl font-semibold">{course.title}</h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {course.focus.length > 120 ? `${course.focus.slice(0, 120)}...` : course.focus}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-blue-700">
                    {course.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-50 px-2 py-1 rounded-full font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    href={`/courses/${course.slug}`}
                    className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2.5 text-sm rounded-lg font-medium transition"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-20">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Not sure which course to choose?
            </h3>
            <p className="text-gray-600 mb-6">
              Reach out to our academic advisors to help you find the perfect path.
            </p>
            <Link
              href="/contact"
              className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-medium text-sm transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
