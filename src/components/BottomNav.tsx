import React, { useEffect, useState } from "react";
import {
  FaHome,
  FaMapSigns,
  FaUtensils,
  FaUsers,
  FaTree,
} from "react-icons/fa";

const items = [
  { id: "home", label: "Inicio", icon: FaHome },
  { id: "pukllay", label: "Pukllay", icon: FaMapSigns },
  { id: "comidas", label: "Platos", icon: FaUtensils },
  { id: "lugares", label: "Lugares", icon: FaTree },
  { id: "personajes", label: "Personajes", icon: FaUsers },
];

const BottomNav: React.FC = () => {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const sections = items
      .map((i) => document.getElementById(i.id))
      .filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.45 },
    );

    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-lg rounded-full shadow-lg px-4 py-2 flex gap-4 z-50">
      {items.map((i) => {
        const Icon = i.icon;
        const isActive = active === i.id;
        return (
          <button
            key={i.id}
            onClick={() => scrollTo(i.id)}
            className={`flex flex-col items-center text-xs ${isActive ? "text-amber-700" : "text-gray-600"}`}
            aria-current={isActive}
          >
            <Icon className="text-lg" />
            <span className="mt-1">{i.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
