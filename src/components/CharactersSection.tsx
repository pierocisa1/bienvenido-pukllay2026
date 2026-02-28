import React from "react";
import { personajes } from "../data/content";
import { motion } from "framer-motion";

const CharactersSection: React.FC = () => {
  return (
    <section id="personajes" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">Personajes</h2>
        <div className="space-y-6">
          {personajes.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-amber-50 rounded-2xl overflow-hidden shadow-md flex flex-col md:flex-row items-center"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full md:w-48 h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-900">
                  {p.name}
                </h3>
                <p className="mt-2 text-amber-700">{p.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CharactersSection;
