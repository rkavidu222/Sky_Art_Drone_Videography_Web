import React, { useState } from 'react';
import { PhoneIcon, MailIcon, MapPinIcon, SendIcon } from 'lucide-react';
export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: 'Basic Package'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({
    type: '',
    text: ''
  });
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: 'success',
        text: "Thank you! Your message has been sent. I'll get back to you soon."
      });
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        service: 'Basic Package'
      });
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage({
          type: '',
          text: ''
        });
      }, 5000);
    }, 1500);
  };
  return <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Get In Touch
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to capture stunning aerial footage? Contact me to discuss your
            project or book a service package.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mt-4"></div>
        </div>
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/3">
            <div className="bg-gradient-to-br from-teal-50 to-white rounded-xl p-8 shadow-lg h-full border border-teal-100/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h3>
              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <PhoneIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <MailIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Email</h4>
                    <p className="text-gray-600">contact@skyviewdrone.com</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-gradient-to-r from-teal-500 to-teal-600 p-3 rounded-full text-white mr-4 shadow-md">
                    <MapPinIcon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Location</h4>
                    <p className="text-gray-600">San Francisco, California</p>
                    <p className="text-gray-600">
                      Available for travel nationwide
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <h4 className="font-bold mb-4 text-gray-800">Follow Me</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors shadow-sm" aria-label="Facebook">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors shadow-sm" aria-label="Instagram">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a href="#" className="bg-gray-100 p-3 rounded-full text-teal-600 hover:bg-teal-600 hover:text-white transition-colors shadow-sm" aria-label="YouTube">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                Send a Message
              </h3>
              {submitMessage.text && <div className={`p-4 mb-6 rounded-lg ${submitMessage.type === 'success' ? 'bg-teal-50 text-teal-700 border border-teal-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                  {submitMessage.text}
                </div>}
              <form onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 mb-2 font-medium">
                      Full Name
                    </label>
                    <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors" placeholder="John Doe" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 mb-2 font-medium">
                      Email Address
                    </label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="phone" className="block text-gray-700 mb-2 font-medium">
                      Phone Number
                    </label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors" placeholder="(555) 123-4567" />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-gray-700 mb-2 font-medium">
                      Interested In
                    </label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors" required>
                      <option value="Basic Package">Basic Package</option>
                      <option value="Premium Package">Premium Package</option>
                      <option value="Professional Package">
                        Professional Package
                      </option>
                      <option value="Custom Quote">Custom Quote</option>
                    </select>
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="message" className="block text-gray-700 mb-2 font-medium">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-colors" rows={5} placeholder="Tell me about your project..." required></textarea>
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center w-full md:w-auto">
                  {isSubmitting ? <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span> : <span className="flex items-center">
                      Send Message
                      <SendIcon size={18} className="ml-2" />
                    </span>}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}