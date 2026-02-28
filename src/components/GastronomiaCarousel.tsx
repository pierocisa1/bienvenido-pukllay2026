import React from "react";
import { motion } from "framer-motion";

interface Item {
  id: string;
  name: string;
  image: string;
  ingredients: string;
  description: string;
}

interface CarouselProps {
  items: Item[];
}

const GastronomiaCarousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <div className="relative w-full overflow-x-auto py-8">
      <div className="flex space-x-4 px-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="min-w-[80%] md:min-w-[40%] bg-white rounded-xl shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-1">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.ingredients}</p>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GastronomiaCarousel;
