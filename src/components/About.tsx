import React from 'react';
export function About() {
  return <section id="about" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight ">
            About Me
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mx-auto"></div>
        </div>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-teal-100 rounded-full -z-10"></div>
              <img src="https://www.shutterstock.com/image-photo/young-man-operating-flying-drone-260nw-684125701.jpg" alt="Drone Videographer" className="rounded-lg shadow-xl w-full h-auto object-cover transform transition-transform duration-500 hover:scale-[1.02]" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-teal-50 rounded-full -z-10"></div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-gray-800">
              Isuka Tehan
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Isuka, a skilled drone pilot from Monaragala, Sri Lanka, brings 7 years of experience in drone flying and aerial videography.
              With extensive expertise in capturing stunning aerial footage, Isuka combines technical proficiency with creative vision to deliver exceptional visual content.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              I'm FAA licensed and fully insured, specializing in real estate,
              events, commercial projects, and creative storytelling through
              aerial cinematography. My goal is to provide you with exceptional
              quality footage that exceeds your expectations.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-3 text-teal-700">
                  Equipment
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    DJI Mavic 3 Pro
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    DJI Air 2S
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    4K & 8K Cameras
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    Advanced Stabilization
                  </li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <h4 className="font-bold text-lg mb-3 text-teal-700">
                  Expertise
                </h4>
                <ul className="text-gray-700 space-y-2">
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    Real Estate
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    Events & Weddings
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    Commercial Projects
                  </li>
                  <li className="flex items-center">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-500 mr-2"></span>
                    Landscape Photography
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}