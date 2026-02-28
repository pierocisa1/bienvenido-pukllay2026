import React from "react";
import { motion } from "framer-motion";

const WelcomeSection: React.FC = () => {
  const handleExplore = () => {
    const el = document.getElementById("pukllay");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="home"
      className="h-screen relative flex items-center justify-center bg-gradient-to-b from-amber-50 to-white"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 overflow-hidden"
      >
        <img
          src="/images/pukllay-hero.jpg"
          alt="Pukllay"
          className="w-full h-full object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-200/10 to-amber-100/60" />
      </motion.div>

      <div className="relative z-10 px-6 text-center max-w-xl">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-6xl font-extrabold text-amber-900 leading-tight"
        >
          Pukllay — Fiesta de vida
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-4 text-amber-800/90 text-lg sm:text-xl"
        >
          Rituales, música y colores que cuentan la memoria de Andahuaylas.
        </motion.p>

        <motion.button
          onClick={handleExplore}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-flex items-center gap-3 bg-amber-700 text-white py-3 px-6 rounded-full shadow-lg"
        >
          Explorar
        </motion.button>
      </div>
    </section>
  );
};

export default WelcomeSection;
