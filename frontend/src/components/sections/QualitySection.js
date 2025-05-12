import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { FaMedal, FaClipboardCheck, FaUserMd, FaSearch } from 'react-icons/fa';
import Card from '../ui/Card';

const QualitySection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const qualityFeatures = [
    {
      icon: <FaMedal className="h-10 w-10 text-accent" />,
      title: "Высшие стандарты",
      description: "Соответствие российским и международным стандартам качества для медицинских изделий"
    },
    {
      icon: <FaClipboardCheck className="h-10 w-10 text-accent" />,
      title: "Сертификация",
      description: "Все наши инструменты имеют необходимые сертификаты и разрешительную документацию"
    },
    {
      icon: <FaUserMd className="h-10 w-10 text-accent" />,
      title: "Консультации с врачами",
      description: "Разработка инструментов совместно с практикующими хирургами для максимального удобства"
    },
    {
      icon: <FaSearch className="h-10 w-10 text-accent" />,
      title: "Строгий контроль",
      description: "Многоступенчатая система контроля качества на всех этапах производства"
    }
  ];

  return (
    <section id="quality" className="section py-24 bg-white" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Гарантия качества"
          subtitle="Мы гарантируем высочайшее качество наших хирургических инструментов, соответствующее современным требованиям медицины"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {qualityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="text-center h-full">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-neutral">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Quality Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative rounded-xl overflow-hidden"
        >
          <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1581090122319-8fab9528eaaa" 
              alt="Качество производства" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-primary/70"></div>
          </div>
          
          <div className="relative z-10 p-12 md:p-16 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6 font-heading">Наши инструменты — ваша уверенность</h3>
            <p className="text-xl max-w-2xl mb-8">
              Мы понимаем, что качество хирургических инструментов напрямую влияет на результаты операций 
              и здоровье пациентов. Именно поэтому мы не идем на компромиссы в вопросах качества.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-4xl font-bold text-white mb-1">100%</div>
                <p>Контроль качества каждого изделия</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-4xl font-bold text-white mb-1">5 лет</div>
                <p>Гарантия на все наши инструменты</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-4xl font-bold text-white mb-1">0.01 мм</div>
                <p>Точность обработки поверхностей</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualitySection;