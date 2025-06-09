'use client';

import { useParams } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react';
import { courses } from '@/constants/courses';

export default function CourseApplicationForm() {
  const { slug } = useParams();
  const course = courses.find(c => c.slug === slug);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    gender: '',
    dob: '',
    intake: '',
    qualification: '',
    studyingOrWorking: '',
    experience: '',
    motivation: '',
    expectations: '',
    internshipConsent: '',
    heardFrom: '',
    medicalNotes: '',
    confirmInfo: false,
    agreePolicy: false,
    checklist: {
      laptop: false,
      internet: false,
      availability: false,
      commitment: false,
    },
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name in form.checklist) {
        setForm(prev => ({
          ...prev,
          checklist: { ...prev.checklist, [name]: checked },
        }));
      } else {
        setForm(prev => ({ ...prev, [name]: checked }));
      }
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const allChecklistChecked = Object.values(form.checklist).every(Boolean);
    if (!form.confirmInfo || !form.agreePolicy || !allChecklistChecked) {
      alert('Please complete all required checkboxes and confirmations.');
      return;
    }

    // TODO: Send form data to Supabase or backend
    console.log('Form submitted:', form);
    setSubmitted(true);
  };

  if (!course) return <div className="p-6">Course not found.</div>;

  if (submitted)
    return (
      <div className="p-8 max-w-2xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-green-600 mb-2">Application Submitted</h2>
        <p>Thank you for applying for <strong>{course.title}</strong> at Dovepeak Institute of Technology.</p>
        <p>We’ll get in touch with you via email or WhatsApp shortly.</p>
      </div>
    );

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold mb-2">Apply for {course.title}</h1>
      <p className="mb-6 text-gray-600">{course.module} • {course.duration} • {course.price}</p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Personal Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="fullName" required onChange={handleChange} placeholder="Full Name" className="input" />
          <input name="email" type="email" required onChange={handleChange} placeholder="Email Address" className="input" />
          <input name="phone" required onChange={handleChange} placeholder="Phone Number (WhatsApp)" className="input" />
          <select name="gender" required onChange={handleChange} className="input">
            <option value="">Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Prefer not to say</option>
          </select>
          <input name="dob" type="date" required onChange={handleChange} className="input" />
          <select name="intake" required onChange={handleChange} className="input">
            <option value="">Select Intake</option>
            <option>July Intake</option>
            <option>August Intake</option>
            <option>September Intake</option>
          </select>
        </div>

        {/* Education and Motivation */}
        <input name="qualification" required onChange={handleChange} placeholder="Highest Academic Qualification" className="input" />
        <textarea name="studyingOrWorking" onChange={handleChange} placeholder="Are you currently studying or working?" className="input" />
        <select name="experience" required onChange={handleChange} className="input">
          <option value="">Have you done any web dev or programming before?</option>
          <option>Yes</option>
          <option>No</option>
        </select>
        <textarea name="motivation" required onChange={handleChange} placeholder="What motivates you to take this course?" className="input" />

        {/* Checklist */}
        <div>
          <label className="block font-semibold mb-1">Checklist (tick all):</label>
          {['laptop', 'internet', 'availability', 'commitment'].map((item) => (
            <label key={item} className="flex items-center space-x-2 text-sm mb-1">
              <input
                type="checkbox"
                name={item}
                checked={form.checklist[item as keyof typeof form.checklist]}
                onChange={handleChange}
              />
              <span>
                {item === 'laptop' && 'I have access to a laptop/desktop.'}
                {item === 'internet' && 'I have a stable internet connection.'}
                {item === 'availability' && 'I am available 4 hours a day (Mon–Fri).'}
                {item === 'commitment' && 'I am committed to completing the course.'}
              </span>
            </label>
          ))}
        </div>

        {/* Additional & Consent */}
        <textarea name="expectations" required onChange={handleChange} placeholder="What do you expect to achieve by the end of the course?" className="input" />
        <select name="internshipConsent" required onChange={handleChange} className="input">
          <option value="">Are you open to internship or placement at Dovepeak Digital Solutions?</option>
          <option>Yes</option>
          <option>No</option>
          <option>Maybe</option>
        </select>
        <select name="heardFrom" onChange={handleChange} className="input">
          <option value="">How did you hear about us?</option>
          <option>Social Media</option>
          <option>Friend</option>
          <option>Website</option>
          <option>Poster</option>
          <option>Other</option>
        </select>
        <textarea name="medicalNotes" onChange={handleChange} placeholder="Any medical or learning needs? (Optional)" className="input" />

        {/* Final Declaration */}
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" name="confirmInfo" checked={form.confirmInfo} onChange={handleChange} />
          <span>I confirm all the information provided is true.</span>
        </label>
        <label className="flex items-center space-x-2 text-sm">
          <input type="checkbox" name="agreePolicy" checked={form.agreePolicy} onChange={handleChange} />
          <span>I agree to the privacy policy and course expectations.</span>
        </label>

        <button type="submit" className="bg-blue-600 text-white rounded-md px-6 py-2 hover:bg-blue-700">
          Submit Application
        </button>
      </form>
    </div>
  );
}
