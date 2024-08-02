import "./App.css";
import { useEffect } from "react";
import Header from "./components/Header";
import HeroImageSection from "./components/HeroImageSection";
import NewArrivalsSection from "./components/NewArrivalsSection";

export default function App() {
  return (
    <main>
      <Header />
      <HeroImageSection />
      <NewArrivalsSection />
    </main>
  );
}
