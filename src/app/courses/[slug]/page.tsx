import { courses, Course } from '@/constants/courses';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return courses.map((course) => ({ slug: course.slug }));
}

export const generateMetadata = ({ params }: Params): Metadata => {
  const course = courses.find((c) => c.slug === params.slug);
  if (!course) return {};
  return {
    title: `${course.title} | Dovepeak`,
    description: course.description,
  };
};

export default function CoursePage({ params }: Params) {
  const course: Course | undefined = courses.find((c) => c.slug === params.slug);
  if (!course) return notFound();

  return (
    <>
      {/* Top Banner */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-14 px-6 text-center">
        <h1 className="text-5xl font-extrabold drop-shadow-md">{course.module}</h1>
        <p className="mt-3 text-lg max-w-2xl mx-auto font-light drop-shadow-sm">{course.description}</p>
      </section>

      <main className="max-w-5xl mx-auto px-6 py-20">
        {/* Header */}
        <header className="mb-12 border-b border-blue-200 pb-6">
          <h2 className="text-4xl font-bold text-blue-900 mb-3">{course.title} <span className="text-xl">{course.icon}</span></h2>
          <p className="text-lg italic text-gray-600 max-w-3xl">{course.focus}</p>
        </header>

        {/* Technologies */}
        <section className="mb-12">
          <h3 className="text-2xl font-semibold text-blue-700 mb-5 border-b border-blue-100 pb-2">Technologies Covered</h3>
          <div className="flex flex-wrap gap-4">
            {course.technologies.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold select-none shadow-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Course Overview */}
        <section className="mb-12 max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-100 pb-2">Course Overview</h3>
          <p className="text-gray-700 leading-relaxed">{course.description}</p>
        </section>

        {/* Details Grid */}
        <section className="grid sm:grid-cols-2 gap-x-10 gap-y-8 mb-16 max-w-3xl bg-blue-50 rounded-lg p-8 shadow-inner">
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Duration</h4>
            <p className="text-gray-800">{course.duration}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Study Mode</h4>
            <p className="text-gray-800">{course.studyMode}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Hours Per Day</h4>
            <p className="text-gray-800">{course.hoursPerDay}</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-blue-700 mb-2">Price</h4>
            <p className="text-xl font-extrabold text-gray-900">{course.price}</p>
          </div>
        </section>

        {/* Who Can Apply */}
        <section className="mb-12 max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-100 pb-2">Who Can Apply</h3>
          <p className="text-gray-700 leading-relaxed">
            {course.targetAudience ||
              'This course warmly welcomes anyone eager to learn and grow — whether you are a beginner, looking to switch careers, or want to deepen your knowledge. We believe learning is for everyone, and we’re here to support your journey.'}
          </p>
        </section>

        {/* Requirements */}
        <section className="mb-12 max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-100 pb-2">Requirements</h3>
          <p className="text-gray-700 leading-relaxed">
            {course.requirements || 'No prior experience required. Just bring your enthusiasm and commitment to learning.'}
          </p>
        </section>

        {/* Learning Outcomes */}
        <section className="mb-12 max-w-3xl">
          <h3 className="text-2xl font-semibold text-blue-700 mb-6 border-b border-blue-100 pb-2">Learning Outcomes</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg leading-relaxed">
            {course.outcomes.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>

        {/* Additional Info Section */}
        <section className="mb-12 max-w-3xl bg-white border border-blue-200 rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold text-blue-700 mb-4 border-b border-blue-100 pb-2">Additional Information</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-800">
            <li><strong>Certification:</strong> Certificate will be issued upon successful completion.</li>
            <li><strong>Employment:</strong> Graduates may be absorbed to work at <span className="font-semibold text-blue-800">Dovepeak Digital Solutions</span>.</li>
            <li><strong>Course Schedule:</strong> The course runs 4 days a week (Monday to Friday), highly interactive and practical.</li>
            <li><strong>Upcoming Intakes:</strong> July Intake, August Intake, September Intake.</li>
          </ul>
        </section>

        {/* Call to Action Buttons */}
        {course.ctas.length > 0 && (
          <section className="mt-12 flex flex-col sm:flex-row gap-5 max-w-3xl">
            {course.ctas.map((cta, idx) => (
              <Link
                key={idx}
                href={`/apply?course=${course.slug}`}
                className="inline-flex items-center justify-center gap-3 bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-lg text-base font-semibold transition-shadow shadow-md hover:shadow-lg"
              >
                {cta} <ArrowRight className="w-5 h-5" />
              </Link>
            ))}
          </section>
        )}
      </main>
    </>
  );
}
