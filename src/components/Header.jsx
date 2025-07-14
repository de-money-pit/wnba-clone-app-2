import React, { useState, useEffect } from 'react';
import { Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Games', href: '#games' },
    { name: 'Teams', href: '#teams' },
    { name: 'Players', href: '#players' },
    { name: 'Stats', href: '#stats' },
    { name: 'News', href: '#news' },
    { name: 'Video', href: '#video' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2"
          >
            <img
              src="https://cdn.prod.website-files.com/6855a75e01536cdaa2507be2/685ecd2c23fd218e1f1ace74_star.avif"
              alt="WNBA Logo"
              className="h-8 w-8"
            />
            <span className={`text-2xl font-black font-wnba ${
              isScrolled ? 'text-wnba-orange' : 'text-white'
            }`}>
              WNBA
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`font-semibold transition-colors duration-300 hover:text-wnba-orange ${
                  isScrolled ? 'text-gray-800' : 'text-white'
                }`}
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* Search and User Icons */}
          <div className="hidden lg:flex items-center space-x-4">
            <button className={`p-2 rounded-full transition-colors duration-300 hover:bg-wnba-orange hover:text-white ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <Search size={20} />
            </button>
            <button className={`p-2 rounded-full transition-colors duration-300 hover:bg-wnba-orange hover:text-white ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}>
              <User size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden p-2 rounded-md transition-colors duration-300 ${
              isScrolled ? 'text-gray-800' : 'text-white'
            }`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="py-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-6 py-3 text-gray-800 font-semibold hover:bg-wnba-orange hover:text-white transition-colors duration-300"
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex items-center justify-center space-x-4 mt-4 px-6">
                  <button className="p-2 rounded-full text-gray-800 hover:bg-wnba-orange hover:text-white transition-colors duration-300">
                    <Search size={20} />
                  </button>
                  <button className="p-2 rounded-full text-gray-800 hover:bg-wnba-orange hover:text-white transition-colors duration-300">
                    <User size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;