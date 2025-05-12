import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navigation = [
    { name: 'Главная', href: '/' },
    { name: 'О нас', href: '#about' },
    { name: 'Продукция', href: '#products' },
    { name: 'Производство', href: '#manufacturing' },
    { name: 'Контакты', href: '#contact' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-soft py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <span className="font-heading font-bold text-2xl text-primary">ПрофМетал</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-neutral-dark hover:text-primary transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="btn btn-primary py-2"
          >
            Связаться с нами
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden rounded-md p-2 text-neutral-dark"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full left-0 right-0 bg-white shadow-soft py-4 px-4 md:hidden"
        >
          <nav className="flex flex-col space-y-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-medium text-neutral-dark hover:text-primary px-3 py-2 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="btn btn-primary"
              onClick={() => setIsOpen(false)}
            >
              Связаться с нами
            </a>
          </nav>
        </motion.div>
      )}
    </header>
  );
};

export default Header;