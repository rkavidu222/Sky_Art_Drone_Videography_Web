import React, { useEffect, useState } from "react";

export function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=2070&q=80",
  ];

  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => prev + 1);
      setIsTransitioning(true);
    }, 5000); // 5 seconds per slide
    return () => clearInterval(interval);
  }, []);

  const handleTransitionEnd = () => {
    // When reaching the clone (last index)
    if (current === images.length) {
      setIsTransitioning(false); // disable animation
      setCurrent(0); // reset to first real image
    }
  };

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Sliding Background */}
      <div
        className={`absolute inset-0 flex ${isTransitioning ? "transition-transform duration-[2000ms] ease-in-out" : ""}`}
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
        {/* Clone of first image for smooth looping */}
        <img
          src={images[0]}
          alt="Slide clone"
          className="w-full h-full object-cover flex-shrink-0"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
          Capturing Life From Above
        </h1>
        <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto">
          Professional drone videography and photography services for breathtaking aerial perspectives.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            href="#services"
            className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white font-medium py-3 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="bg-transparent hover:bg-white/20 text-white border-2 border-white font-medium py-3 px-8 rounded-full transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  );
}
