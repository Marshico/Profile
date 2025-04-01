'use client'

import Link from 'next/link';

const Nav = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 96; // Height of the navbar (h-24 = 96px)
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-white/95 to-white/90 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex-shrink-0">
            <button onClick={() => scrollToSection('experience')} className="text-3xl font-bold text-gray-900 hover:text-blue-800 transition-colors duration-300">
              RB
            </button>
          </div>
          <div className="hidden sm:flex sm:space-x-8">
            <button onClick={() => scrollToSection('experience')} className="text-xl font-bold text-gray-900 hover:text-blue-800 transition-colors duration-300">
              Experience
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-xl font-bold text-gray-900 hover:text-blue-800 transition-colors duration-300">
              Skills
            </button>
            <button onClick={() => scrollToSection('education')} className="text-xl font-bold text-gray-900 hover:text-blue-800 transition-colors duration-300">
              Education
            </button>
            <button onClick={() => scrollToSection('tech-stack')} className="text-xl font-bold text-gray-900 hover:text-blue-800 transition-colors duration-300">
              Tech Stack
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
