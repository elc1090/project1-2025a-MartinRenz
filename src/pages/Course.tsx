import { useEffect } from "react";
import PromoModal from "../components/PromoBanner";

function Course() {
  useEffect(() => {
    document.title = 'Algoritmos e Lógica de Programação - O Curso COMPLETO';
  }, []);

  return (
    <div>
      <PromoModal></PromoModal>
      <h1>Hello world!</h1>
    </div>
  );
}

export default Course;