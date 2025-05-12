import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import Card from '../ui/Card';
import { FaCheckCircle, FaThumbsUp, FaStar, FaCertificate } from 'react-icons/fa';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: <FaCheckCircle className="w-8 h-8 text-accent" />,
      title: 'Высокое качество',
      description: 'Наша продукция соответствует высочайшим стандартам качества и проходит многоступенчатый контроль',
    },
    {
      icon: <FaThumbsUp className="w-8 h-8 text-accent" />,
      title: 'Надежность',
      description: 'Хирургические инструменты выдерживают интенсивное использование и имеют длительный срок службы',
    },
    {
      icon: <FaStar className="w-8 h-8 text-accent" />,
      title: 'Эргономика',
      description: 'Каждый инструмент разработан с учетом удобства использования для хирургов',
    },
    {
      icon: <FaCertificate className="w-8 h-8 text-accent" />,
      title: 'Сертификация',
      description: 'Вся продукция сертифицирована и соответствует российским и международным стандартам',
    },
  ];

  return (
    <section id="about" className="section py-20 bg-white" ref={ref}>
      <div className="container">
        <SectionTitle
          title="О нашей компании"
          subtitle="Более 15 лет мы производим высококачественные хирургические инструменты из медицинской стали для медицинских учреждений по всей России"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1581090122319-8fab9528eaaa"
              alt="Производство хирургических инструментов"
              className="rounded-xl shadow-soft object-cover h-[400px] w-full"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-white p-4 rounded-lg shadow-soft">
              <p className="text-3xl font-bold">15+</p>
              <p>лет опыта</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 font-heading">Профессиональное металлопроизводство для медицины</h3>
            <p className="mb-6">
              ПрофМетал — ведущий российский производитель хирургических инструментов из высококачественной медицинской стали. 
              Мы сочетаем многолетние традиции металлообработки с современными технологиями производства.
            </p>
            <p className="mb-6">
              Наша миссия — обеспечивать медицинские учреждения надежными, эргономичными и долговечными инструментами, 
              которые помогают хирургам спасать жизни и здоровье пациентов.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div className="mt-1 mr-4">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold mb-1">{feature.title}</h4>
                    <p className="text-sm text-neutral">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;