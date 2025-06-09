'use client';

import { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const ContactPage = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      // Simulate submission logic
      await new Promise(res => setTimeout(res, 1000));
      setSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Submission failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-800">Contact Us</h1>
          <p className="text-gray-600 text-lg mt-2">We&apos;re here to help! Reach out with any questions or inquiries.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-gray-200">
            {submitted ? (
              <div className="text-center">
                <h2 className="text-2xl font-semibold text-green-700">Message Sent!</h2>
                <p className="text-gray-600 mt-2">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows={5}
                    required
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="text-blue-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Our Location</h3>
                <p className="text-gray-600">Dovepeak Institute of Technology,<br />Nairobi, Kenya</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-blue-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Phone</h3>
                <p className="text-gray-600">+254 115749711</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-blue-700 w-6 h-6 mt-1" />
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">dovepeakdigital@gmail.com</p>
              </div>
            </div>

            {/* Optional: Google Map Embed */}
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-300">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0782087455714!2d37.010848175738786!3d-1.10361193545534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f475f31591ec5%3A0x372bedd06ee6a9ee!2sCk%20plaza!5e0!3m2!1sen!2ske!4v1748710297255!5m2!1sen!2ske" 
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
