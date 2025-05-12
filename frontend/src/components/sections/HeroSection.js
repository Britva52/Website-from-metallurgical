import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1511454493857-0a29f2c023c7" 
          alt="Металлообработка" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-neutral-dark/70"></div>
      </div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-4 text-xl text-accent font-heading font-semibold"
          >
            Профессиональное металлопроизводство
          </motion.span>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 font-heading leading-tight"
          >
            Производство хирургических <span className="text-gradient">инструментов</span> высочайшего качества
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-xl mb-8 max-w-2xl"
          >
            Современное оборудование, передовые технологии и высокое качество каждого инструмента — залог успеха ваших хирургических операций
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="accent" size="lg">
              Наша продукция
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-neutral-dark">
              Связаться с нами
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll down indicator */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white flex flex-col items-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.5 }}
      >
        <p className="mb-2 text-sm font-medium">Узнать больше</p>
        <motion.div 
          animate={{ y: [0, 10, 0] }} 
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-5 h-10 border-2 border-white rounded-full flex justify-center items-start p-1"
        >
          <motion.div 
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }} 
            className="w-1 h-3 bg-white rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;