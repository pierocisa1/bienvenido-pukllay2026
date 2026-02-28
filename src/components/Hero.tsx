import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-black">
      {/* imagen o video de fondo */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/portada.jpg')` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, repeat: Infinity, yoyo: true }}
      />

      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold drop-shadow-lg">
          Bienvenidos al Pukllay de Andahuaylas
        </h1>
        <p className="mt-4 text-yellow-300 text-lg md:text-xl">
          Sumérgete en la fiesta, la historia y el sabor andino
        </p>
        <a
          href="#pukllay"
          className="inline-block mt-8 px-6 py-3 bg-red-600 text-white rounded-full text-sm font-semibold shadow-lg hover:bg-red-700 transition"
        >
          Explorar
        </a>
      </div>

      <div className="absolute bottom-6 z-10 animate-bounce">
        <span className="block w-6 h-6 border-b-2 border-r-2 border-white rotate-45" />
      </div>
    </section>
  );
};

export default Hero;
