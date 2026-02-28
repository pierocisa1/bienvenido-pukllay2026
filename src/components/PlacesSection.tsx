import React from "react";
import { motion } from "framer-motion";
import { places } from "../data/content";

const PlacesSection: React.FC = () => {
  return (
    <section id="lugares" className="py-12 bg-amber-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-amber-900 mb-6">
          Lugares Turísticos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {places.map((p) => (
            <motion.article
              key={p.id}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl overflow-hidden shadow-md"
            >
              <img
                src={p.image}
                alt={p.name}
                className="w-full h-44 object-cover"
              />
              <div className="p-4">
                <h3 className="font-semibold text-amber-900">{p.name}</h3>
                <p className="text-sm text-amber-800 mt-2">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlacesSection;
