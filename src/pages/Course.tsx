import { useEffect } from "react";
import PromoModal from "../components/PromoBanner";
import Navbar from "../components/Navbar";

function Course() {
  useEffect(() => {
    document.title = 'Algoritmos e Lógica de Programação - O Curso COMPLETO';
  }, []);

  return (
    <div style={{ backgroundColor: "#2d2f48" }}>
      <PromoModal></PromoModal>
      <Navbar></Navbar>
      <h1>Hello world!</h1>
    </div>
  );
}

export default Course;