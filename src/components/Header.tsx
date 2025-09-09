import React, { useEffect, useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'Home',
    href: '#home'
  }, {
    name: 'About',
    href: '#about'
  }, {
    name: 'Services',
    href: '#services'
  }, {
    name: 'Portfolio',
    href: '#portfolio'
  }, {
    name: 'Reviews',
    href: '#testimonials'
  }, {
    name: 'Contact',
    href: '#contact'
  }];
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-teal-600">
          Sky Art Videography
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map(link => <a key={link.name} href={link.href} className={`font-medium hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
              {link.name}
            </a>)}
        </nav>
        {/* Mobile Navigation Button */}
        <button className={`md:hidden ${isScrolled ? 'text-gray-800' : 'text-white'}`} onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      {/* Mobile Navigation Menu */}
      {isMenuOpen && <div className="md:hidden bg-white/95 backdrop-blur-sm animate-fadeIn">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map(link => <a key={link.name} href={link.href} className="font-medium text-gray-800 hover:text-teal-600 transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {link.name}
                </a>)}
            </nav>
          </div>
        </div>}
    </header>;
}