import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import Button from '../ui/Button';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted:', formData);
    alert('Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <FaPhone className="h-5 w-5 text-accent" />,
      title: "Телефон",
      details: "+7 (495) 123-45-67",
    },
    {
      icon: <FaEnvelope className="h-5 w-5 text-accent" />,
      title: "Email",
      details: "info@profmetal.ru",
    },
    {
      icon: <FaMapMarkerAlt className="h-5 w-5 text-accent" />,
      title: "Адрес",
      details: "г. Москва, ул. Промышленная, 12, строение 3",
    },
    {
      icon: <FaClock className="h-5 w-5 text-accent" />,
      title: "Режим работы",
      details: "Пн-Пт: 9:00-18:00",
    },
  ];

  return (
    <section id="contact" className="section py-24 bg-neutral-light" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Связаться с нами"
          subtitle="Есть вопросы о нашей продукции или хотите сделать заказ? Свяжитесь с нами удобным для вас способом"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-soft">
              <h3 className="text-2xl font-bold mb-6 font-heading">Отправить сообщение</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-neutral mb-1">Ваше имя *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Введите ваше имя"
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral mb-1">Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Введите email"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-neutral mb-1">Телефон</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="+7 (___) ___-__-__"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-neutral mb-1">Сообщение *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-secondary/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Опишите ваш запрос"
                  ></textarea>
                </div>
                
                <Button type="submit" variant="primary" className="w-full">
                  Отправить сообщение
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex flex-col justify-between"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6 font-heading">Контактная информация</h3>
              <p className="mb-8">
                Вы можете связаться с нами по телефону, электронной почте или посетить наш офис. 
                Наши специалисты готовы ответить на все ваши вопросы о продукции и помочь с выбором.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                    className="flex items-start"
                  >
                    <div className="mr-3 p-3 bg-primary/10 rounded-lg">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-neutral">{item.title}</h4>
                      <p className="font-medium">{item.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Map */}
            <div className="mt-auto rounded-xl overflow-hidden h-64 shadow-soft">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2246.4089613893307!2d37.61841611564304!3d55.74977697989747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2sMoscow%2C%20Russia!5e0!3m2!1sen!2sus!4v1620584408410!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Company Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;