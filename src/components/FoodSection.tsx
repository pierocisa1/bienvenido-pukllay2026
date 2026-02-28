import React from "react";
import { gastronomia } from "../data/content";
import { motion } from "framer-motion";

const FoodSection: React.FC = () => {
  return (
    <section id="comidas" className="py-12 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-2xl font-bold text-amber-900 mb-4">
          Platos Típicos
        </h2>

        <div className="relative">
          <div className="flex gap-6 overflow-x-auto py-4 snap-x snap-mandatory scrollbar-hide -mx-4 px-4">
            {gastronomia.map((item) => (
              <motion.div
                key={item.id}
                className="snap-center min-w-[78%] sm:min-w-[45%] md:min-w-[30%] bg-amber-50 rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-amber-900 text-lg">
                    {item.name}
                  </h3>
                  <p className="text-sm text-amber-800/80 mt-1">
                    {item.ingredients}
                  </p>
                  <p className="text-sm text-amber-700 mt-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSection;
