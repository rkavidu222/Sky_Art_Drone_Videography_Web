import React from 'react';

export function Services() {
  const packages = [
    {
      title: 'Basic Package',
      features: [
        '30 minutes of flight time',
        '5 edited photos',
        '1-minute highlight video',
        '1 location',
        'Basic color grading',
        'Delivery within 5 days',
      ],
    },
    {
      title: 'Premium Package',
      features: [
        '1 hour of flight time',
        '15 edited photos',
        '3-minute cinematic video',
        '2 locations',
        'Advanced color grading',
        'Custom music selection',
        'Delivery within 3 days',
      ],
    },
    {
      title: 'Professional Package',
      features: [
        '2 hours of flight time',
        '25 edited photos',
        '5-minute cinematic video',
        'Multiple locations',
        'Professional color grading',
        'Custom music selection',
        'Raw footage included',
        'Delivery within 48 hours',
      ],
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Services & Packages
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted packages or contact us for a
            custom solution tailored to your specific needs.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border-2 border-teal-500 bg-white"
            >
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-5 text-gray-800">{pkg.title}</h3>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg
                        className="w-5 h-5 text-teal-600 mr-2 mt-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className="block text-center py-3 px-6 rounded-full transition-colors bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white"
                >
                  Get Started
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-6">Need something custom?</h3>
          <a
            href="#contact"
            className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Request Custom Package
          </a>
        </div>
      </div>
    </section>
  );
}
