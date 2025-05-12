import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import Button from '../ui/Button';

const ProductsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'Все категории' },
    { id: 'scalpels', name: 'Скальпели' },
    { id: 'forceps', name: 'Зажимы' },
    { id: 'scissors', name: 'Ножницы' },
    { id: 'retractors', name: 'Ретракторы' },
  ];

  const products = [
    {
      id: 1,
      name: 'Скальпель хирургический СХ-1',
      category: 'scalpels',
      image: 'https://images.unsplash.com/photo-1555085575-47bd89db1be4',
      description: 'Скальпель хирургический общего назначения с эргономичной ручкой и высокоточным лезвием из нержавеющей стали',
    },
    {
      id: 2,
      name: 'Зажим кровоостанавливающий 3В-1',
      category: 'forceps',
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933',
      description: 'Зажим для остановки кровотечения с атравматичными браншами и надежным механизмом фиксации',
    },
    {
      id: 3,
      name: 'Ножницы хирургические тупоконечные НХ-2',
      category: 'scissors',
      image: 'https://images.unsplash.com/photo-1555085575-47bd89db1be4',
      description: 'Тупоконечные ножницы для общей хирургии с прецизионной заточкой и удобными кольцами',
    },
    {
      id: 4,
      name: 'Ретрактор хирургический РХ-3',
      category: 'retractors',
      image: 'https://images.unsplash.com/photo-1606206886378-e49a19ad0933',
      description: 'Ретрактор для расширения операционного поля с атравматичными крючками и удобной рукояткой',
    },
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section id="products" className="section py-24 bg-neutral-light" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Наша продукция"
          subtitle="Широкий ассортимент высококачественных хирургических инструментов для различных областей медицины"
        />

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-white text-neutral-dark hover:bg-primary/10'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </motion.button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="h-full flex flex-col">
                <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-neutral flex-grow mb-4">{product.description}</p>
                <Button variant="primary" className="w-full">Подробнее</Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Посмотреть весь каталог
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;