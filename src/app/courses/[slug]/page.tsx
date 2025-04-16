import Image from 'next/image';
import Link from 'next/link';
import { GetStaticPropsContext, GetStaticPaths } from 'next';

interface Course {
  name: string;
  description: string;
  image: string;
  topics: string[];
}

interface CourseProps {
  course: Course | null;
}

// Dummy data
const dummyCourses: Record<string, Course> = {
  'web-development': {
    name: 'Web Development Bootcamp',
    description: 'Learn how to build modern websites using HTML, CSS, JavaScript, and React.',
    image: '/images/web-development.jpg',
    topics: [
      'HTML & CSS Basics',
      'JavaScript Fundamentals',
      'Responsive Design',
      'React.js & Components',
      'Project Deployment'
    ],
  },
  'data-science': {
    name: 'Data Science Fundamentals',
    description: 'A comprehensive course on data analysis, Python, and machine learning.',
    image: '/images/data-science.jpg',
    topics: [
      'Python for Data Analysis',
      'Pandas & Numpy',
      'Data Visualization',
      'Intro to Machine Learning',
      'Capstone Project'
    ],
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(dummyCourses).map((slug) => ({
    params: { slug },
  }));
  return { paths, fallback: false };
};

export async function getStaticProps(context: GetStaticPropsContext): Promise<{ props: CourseProps }> {
  const slug = context.params?.slug as string;
  const course = dummyCourses[slug] || null;
  return { props: { course } };
}

const CourseDetails = ({ course }: CourseProps) => {
  if (!course) {
    return <div>Course not found!</div>;
  }

  return (
    <div className="mt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 to-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800 mb-6">{course.name}</h1>
          <p className="text-lg text-gray-700 mb-8">{course.description}</p>
        </div>
      </section>

      {/* Course Content Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-blue-800 mb-12">Course Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <Image
                src={course.image}
                alt={course.name}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">What You Will Learn</h3>
              <ul className="list-disc pl-6 text-gray-600">
                {course.topics.map((topic, index) => (
                  <li key={index}>{topic}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enrollment Section */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Enroll Now</h2>
          <p className="text-lg text-gray-700 mb-10">
            Take the first step toward advancing your career. Enroll in {course.name} today and gain the skills needed to succeed.
          </p>
          <Link
            href="/apply"
            className="inline-block text-white bg-blue-700 font-medium px-8 py-4 rounded-lg hover:bg-blue-800"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CourseDetails;
