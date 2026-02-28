import React from "react";
import { motion } from "framer-motion";

interface Character {
  id: string;
  name: string;
  image: string;
  bio: string;
}

interface Props {
  characters: Character[];
}

const PersonajesSection: React.FC<Props> = ({ characters }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        {characters.map((char) => (
          <motion.article
            key={char.id}
            className="mb-12 flex flex-col md:flex-row items-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={char.image}
              alt={char.name}
              className="w-full md:w-1/3 rounded-lg shadow-lg mb-4 md:mb-0"
            />
            <div className="md:ml-8">
              <h3 className="text-2xl font-bold mb-2">{char.name}</h3>
              <p className="text-gray-700 leading-relaxed">{char.bio}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default PersonajesSection;
