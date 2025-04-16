'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What courses do you offer?",
    answer: "We offer a range of IT-focused courses including Full Stack Web Development, Cybersecurity, Data Science, Digital Marketing, and more. You can check our Courses page for full details.",
  },
  {
    question: "Do you offer both online and physical classes?",
    answer: "Yes, Dovepeak offers hybrid learning. Students can choose between online, in-person, or blended classes depending on their preferences and availability.",
  },
  {
    question: "How do I apply for a course?",
    answer: "Simply navigate to the course you're interested in, click the 'Apply Now' button, and fill in the application form. Our admissions team will follow up with you shortly.",
  },
  {
    question: "What is the duration of your programs?",
    answer: "Our programs typically run between 6 weeks and 6 months depending on the course level and intensity. Each course page outlines its specific duration.",
  },
  {
    question: "Do I get a certificate after completing a course?",
    answer: "Absolutely. All students who successfully complete a course receive a verifiable certificate from Dovepeak Institute of Technology.",
  },
  {
    question: "Are there any entry requirements?",
    answer: "Most of our entry-level courses require only basic computer literacy. Advanced courses may require prior knowledge or experience.",
  },
  {
    question: "How can I contact Dovepeak?",
    answer: "You can reach out via our Contact page, call us, or send us a message on WhatsApp. We are always happy to help!",
  },
];

const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-10 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Frequently Asked Questions</h1>
          <p className="mt-4 text-gray-600 text-lg">
            Find answers to the most common questions about our courses, application process, and learning experience.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl p-5 shadow-sm transition-all bg-gray-50">
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left focus:outline-none"
              >
                <span className="text-lg font-medium text-gray-800">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-blue-600" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-blue-600" />
                )}
              </button>
              {openIndex === index && (
                <div className="mt-4 text-gray-700 leading-relaxed text-base">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          Didn’t find your question? <a href="/contact" className="text-blue-600 hover:underline">Contact us here</a>.
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
