import React, { useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Services } from "./components/Services";
import { Portfolio } from "./components/Portfolio";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export function App() {
  useEffect(() => {
    // Smooth scroll
    document.documentElement.style.scrollBehavior = "smooth";

    // Section-title mapping
    const sectionMeta = {
      home: { title: "Home | Drone Services", url: "/home" },
      about: { title: "About Us | Drone Services", url: "/about" },
      services: { title: "Services | Drone Services", url: "/services" },
      portfolio: { title: "Portfolio | Drone Services", url: "/portfolio" },
      testimonials: { title: "Testimonials | Drone Services", url: "/testimonials" },
      contact: { title: "Contact | Drone Services", url: "/contact" },
    };

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sections = Object.keys(sectionMeta);

      for (let id of sections) {
        const section = document.getElementById(id);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollY >= offsetTop - 100 && scrollY < offsetTop + offsetHeight) {
            const { title, url } = sectionMeta[id];

            if (document.title !== title) {
              document.title = title;
            }

            // Change URL without reloading
            if (window.location.pathname !== url) {
              window.history.pushState({}, "", url);
            }
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run on load

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="font-sans text-gray-800">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="portfolio">
          <Portfolio />
        </section>
        <section id="testimonials">
          <Testimonials />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}
