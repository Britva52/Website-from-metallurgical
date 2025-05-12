import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import "./App.css";

// Layout Components
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

// Page Sections
import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import ProductsSection from "./components/sections/ProductsSection";
import ManufacturingSection from "./components/sections/ManufacturingSection";
import QualitySection from "./components/sections/QualitySection";
import ContactSection from "./components/sections/ContactSection";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-neutral-dark"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                className="w-16 h-16 border-4 border-t-accent border-neutral-light rounded-full mx-auto mb-4"
              ></motion.div>
              <h2 className="text-2xl font-heading font-bold text-white">ПрофМетал</h2>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ManufacturingSection />
        <QualitySection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
