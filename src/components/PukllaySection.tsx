import React from "react";
import { motion } from "framer-motion";
import { historia } from "../data/content";

const blocks = [
  { title: "Historia", text: historia.text, image: historia.image },
  {
    title: "Significado",
    text: "Celebración de identidad y cosecha.",
    image: "/images/pukllay2026.jpg",
  },
  {
    title: "Comparsas",
    text: "Grupos, música y trajes coloridos.",
    image: "/images/pukllay.jpg",
  },
];

const PukllaySection: React.FC = () => {
  return (
    <section id="pukllay" className="py-20 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-amber-900 mb-8">
          Sobre el Pukllay
        </h2>

        <div className="space-y-12">
          {blocks.map((b, i) => (
            <motion.article
              key={b.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="grid gap-6 grid-cols-1 md:grid-cols-2 items-center bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={b.image}
                alt={b.title}
                className="w-full h-56 object-cover md:h-72"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800">
                  {b.title}
                </h3>
                <p className="mt-3 text-amber-700/90">{b.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PukllaySection;
