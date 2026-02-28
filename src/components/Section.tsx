import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  id?: string;
  title?: string;
  imageUrl: string;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ id, title, imageUrl, children }) => {
  return (
    <section id={id} className="relative w-full py-16">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <motion.div
        className="relative max-w-3xl mx-auto px-4 text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {title && (
          <h2 className="text-2xl md:text-4xl font-bold mb-4">{title}</h2>
        )}
        <div className="prose prose-lg text-center mx-auto">{children}</div>
      </motion.div>
    </section>
  );
};

export default Section;
