import React from 'react';
import { Menu, X, BookOpen } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-dark-100/80 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <BookOpen className="h-8 w-8 text-accent-500" />
            <span className="ml-2 text-xl font-bold gradient-text">SkillSwap</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-300 hover:text-accent-400 transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-300 hover:text-accent-400 transition-colors">How it Works</a>
            <a href="#community" className="text-gray-300 hover:text-accent-400 transition-colors">Community</a>
            <button className="btn-primary">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-300">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-100 border-b border-gray-800">
            <a href="#features" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Features</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-300 hover:text-accent-400">How it Works</a>
            <a href="#community" className="block px-3 py-2 text-gray-300 hover:text-accent-400">Community</a>
            <button className="w-full text-left px-3 py-2 text-accent-400 font-medium">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}