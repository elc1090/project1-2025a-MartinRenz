import { useEffect } from "react";
import PromoModal from "../components/PromoBanner";
import Navbar from "../components/Navbar";
import IntroSection from "../components/IntroSection";
import LearningBox from "../components/LearningBox";
import RelatedTopics from "../components/RelatedTopics";

function Course() {
  useEffect(() => {
    document.title = 'Algoritmos e Lógica de Programação - O Curso COMPLETO';
  }, []);

  return (
    <div>
      <PromoModal></PromoModal>
      <Navbar></Navbar>
      <IntroSection></IntroSection>
      <LearningBox></LearningBox>
      <RelatedTopics></RelatedTopics>
    </div>
  );
}

export default Course;