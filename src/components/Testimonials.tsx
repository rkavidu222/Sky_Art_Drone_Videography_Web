import React from 'react';
export function Testimonials() {
  const testimonials = [{
    id: 1,
    name: 'Sarah Johnson',
    role: 'Real Estate Agent',
    content: 'The aerial footage John captured of our luxury properties completely transformed our marketing strategy. The quality and professionalism exceeded our expectations.',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80'
  }, {
    id: 2,
    name: 'Michael Torres',
    role: 'Event Coordinator',
    content: "Having drone footage of our outdoor festival gave us perspectives we never imagined possible. The videos helped us triple our ticket sales for next year's event!",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1287&q=80'
  }, {
    id: 3,
    name: 'Emily Chen',
    role: 'Marketing Director',
    content: "Working with this drone service for our company's promotional video was seamless. The team was professional, creative, and delivered stunning footage on time.",
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=1061&q=80'
  }];
  return <section id="testimonials" className="py-24 bg-gradient-to-b from-teal-900 to-teal-800 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Client Testimonials
          </h2>
          <p className="text-teal-100 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say
            about my drone videography services.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-300 mx-auto mt-4"></div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map(testimonial => <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg text-white relative transform transition-transform duration-300 hover:-translate-y-2">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 rounded-full overflow-hidden border-4 border-teal-600 shadow-lg">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-center pt-6 mb-6">
                <h3 className="font-bold text-xl">{testimonial.name}</h3>
                <p className="text-teal-200">{testimonial.role}</p>
              </div>
              <div className="text-center mb-4">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-teal-300/40 mx-auto">
                  <path d="M9.17 6C7.4 7.26 6.03 9.08 5.34 11.12C4.99 12.32 4.99 13.58 5 14.84C5.01 16.03 5.95 17 7.14 17H9C10.1 17 11 16.1 11 15V13C11 11.9 10.1 11 9 11H7.5C7.5 9 8.5 7.5 10 6.5M19.17 6C17.4 7.26 16.03 9.08 15.34 11.12C14.99 12.32 14.99 13.58 15 14.84C15.01 16.03 15.95 17 17.14 17H19C20.1 17 21 16.1 21 15V13C21 11.9 20.1 11 19 11H17.5C17.5 9 18.5 7.5 20 6.5" fill="currentColor" />
                </svg>
              </div>
              <p className="text-teal-100 text-center leading-relaxed">
                {testimonial.content}
              </p>
            </div>)}
        </div>
      </div>
    </section>;
}