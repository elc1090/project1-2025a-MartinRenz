import { useEffect } from "react";
import PromoModal from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";

function Course() {
  useEffect(() => {
    document.title = 'Algoritmos e Lógica de Programação - O Curso COMPLETO';
  }, []);

  return (
    <div style={{ backgroundColor: "#2d2f48" }}>
      <PromoModal></PromoModal>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
    </div>
  );
}

export default Course;