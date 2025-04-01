import React from "react";
import "./IntroSection.css"; // Adicionando o arquivo de estilos

const IntroSection = () => {
  return (
    <section className="intro-section">
      <div className="intro-container">
        <p style={{ color: "#c0c4fc" }}>
          <strong>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              TI e Software
            </a>
          </strong>{" "}
          &gt;{" "}
          <strong>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Mais opções em TI e Software
            </a>
          </strong>{" "}
          &gt;{" "}
          <strong>
            <a href="#" style={{ textDecoration: "none", color: "inherit" }}>
              Algoritmos
            </a>
          </strong>
        </p>
        <h1>Algoritmos e Lógica de Programação - O Curso COMPLETO</h1>
        <h3>
          O curso definitivo de Lógica de Programação. Do VisualG às principais
          linguagens do mercado: C, C++, Python, C# e Java
        </h3>
        <div className="classification-container">
          <p className="classification"><strong>Classificação mais alta</strong></p>
          <p className="students-count">108.761 alunos</p>
        </div>
        <p>Criado por Nelio Alves</p>
        <p>Última atualização em 06/2024 Português Português [Automático]</p>
      </div>
    </section>
  );
};

export default IntroSection;