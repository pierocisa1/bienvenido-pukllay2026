import React from "react";
import { motion } from "framer-motion";

interface Dish {
  id: string;
  name: string;
  image: string;
  ingredients: string;
  description: string;
}

interface Props {
  dishes: Dish[];
}

const PlatosGrid: React.FC<Props> = ({ dishes }) => {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {dishes.map((dish) => (
          <motion.div
            key={dish.id}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 relative">
              <h4 className="text-xl font-semibold mb-1">{dish.name}</h4>
              <p className="text-sm text-gray-600 mb-2">{dish.ingredients}</p>
              <p className="text-sm text-gray-700">{dish.description}</p>
              <div className="absolute top-2 right-2 w-6 h-6 bg-yellow-300 rounded-full" />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PlatosGrid;
