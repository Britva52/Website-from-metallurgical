import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaTelegram, FaWhatsapp, FaVk } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-dark text-neutral-light">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-white mb-4">ПрофМетал</h3>
            <p className="mb-6">Профессиональное производство металлических хирургических инструментов высочайшего качества. Соответствие российским и международным стандартам.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaTelegram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-accent transition-colors">
                <FaVk className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-4">Быстрые ссылки</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="hover:text-accent transition-colors">О компании</a>
              </li>
              <li>
                <a href="#products" className="hover:text-accent transition-colors">Продукция</a>
              </li>
              <li>
                <a href="#manufacturing" className="hover:text-accent transition-colors">Производство</a>
              </li>
              <li>
                <a href="#quality" className="hover:text-accent transition-colors">Качество</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent transition-colors">Контакты</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-heading font-bold text-white mb-4">Контактная информация</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="w-5 h-5 mr-3 mt-1 text-accent" />
                <span>г. Москва, ул. Промышленная, 12, строение 3</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="w-5 h-5 mr-3 text-accent" />
                <span>+7 (495) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="w-5 h-5 mr-3 text-accent" />
                <span>info@profmetal.ru</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="bg-black py-4">
        <div className="container text-center text-sm">
          <p>© {currentYear} ПрофМетал. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;