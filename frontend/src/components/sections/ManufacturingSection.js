import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { FiCheck } from 'react-icons/fi';

const ManufacturingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stages = [
    {
      number: "01",
      title: "Проектирование",
      description: "Создание точных чертежей и 3D-моделей будущих инструментов с учетом всех технических требований и эргономики"
    },
    {
      number: "02",
      title: "Заготовка",
      description: "Подготовка заготовок из высококачественной медицинской стали марок 40Х13, 95Х18 и других специальных сплавов"
    },
    {
      number: "03",
      title: "Обработка",
      description: "Точная механическая обработка на современных станках с ЧПУ для создания основной формы инструментов"
    },
    {
      number: "04",
      title: "Термообработка",
      description: "Закалка и отпуск для придания инструментам необходимой твердости, упругости и других физических свойств"
    },
    {
      number: "05",
      title: "Финишная обработка",
      description: "Шлифовка, полировка и другие методы обработки поверхности для достижения идеального качества и блеска"
    },
    {
      number: "06",
      title: "Контроль качества",
      description: "Многоступенчатый контроль на всех этапах производства с финальной проверкой каждого инструмента"
    },
  ];

  const benefits = [
    "Современное оборудование с ЧПУ",
    "Высококачественные материалы",
    "Контроль качества на каждом этапе",
    "Опытные инженеры и технологи",
    "Строгое соответствие стандартам",
    "Соблюдение технологических процессов"
  ];

  return (
    <section id="manufacturing" className="section py-24 bg-neutral-dark text-white" ref={ref}>
      <div className="container">
        <SectionTitle
          title="Производственный процесс"
          subtitle="Многоступенчатый процесс производства с использованием современного оборудования и строгим контролем качества"
          titleClassName="text-white"
          subtitleClassName="text-neutral-light/80"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6 font-heading">Высокотехнологичное производство</h3>
            <p className="mb-6">
              Наше предприятие оснащено современным оборудованием от ведущих мировых производителей, 
              что позволяет добиваться высочайшей точности обработки металла и соответствия всем техническим требованиям.
            </p>
            <p className="mb-8">
              Мы используем только высококачественные материалы, одобренные для использования в медицине, 
              и строго соблюдаем все технологические процессы на каждом этапе производства.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center"
                >
                  <FiCheck className="text-accent mr-2 flex-shrink-0" />
                  <span className="text-neutral-light">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-xl overflow-hidden h-[400px]"
          >
            <img
              src="https://images.unsplash.com/photo-1717386255785-59c670564341"
              alt="Производственный цех"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-dark/80 to-transparent"></div>
            <div className="absolute bottom-6 left-6 bg-accent p-3 rounded-lg">
              <p className="font-bold">Современный цех</p>
            </div>
          </motion.div>
        </div>

        {/* Manufacturing Stages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {stages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-accent mb-3 font-heading">{stage.number}</div>
              <h4 className="text-xl font-bold mb-3">{stage.title}</h4>
              <p className="text-neutral-light/80">{stage.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSection;