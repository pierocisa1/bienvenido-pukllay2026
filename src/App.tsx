import Hero from "./components/Hero";
import PukllaySection from "./components/PukllaySection";
import FoodSection from "./components/FoodSection";
import CharactersSection from "./components/CharactersSection";
import PlacesSection from "./components/PlacesSection";
import BottomNav from "./components/BottomNav";

function App() {
  return (
    <div className="relative font-sans text-gray-900">
      <Hero />
      <PukllaySection />
      <FoodSection />
      <PlacesSection />
      <CharactersSection />

      <BottomNav />
    </div>
  );
}

export default App;
