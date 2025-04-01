import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import "./LearningBox.css";

const LearningBox = () => {
  const topics = [
    "Variáveis, entrada, saída, processamento, estrutura sequencial, estrutura condicional, estruturas repetitivas, vetores e matrizes",
    "Você vai aprender de verdade e se tornar um(a) expert em Algoritmos e Lógica de Programação",
    "Você vai aprender a lógica de programação de forma completa, de modo que depois consiga mudar de linguagem com facilidade",
    "Resolver mais de 50 exercícios, desde mais básicos até mais avançados, todos com correção no curso",
    "Aplicar todos conhecimentos e resolver todos exercícios nas linguagens C, C++, Python, C# e Java"
  ];

  return (
    <div className="learning-box">
      <h3 className="header">O que você aprenderá</h3>
      <div className="grid-container">
        {topics.map((topic, index) => (
          <div key={index} className="grid-item">
            <FontAwesomeIcon icon={faCheckCircle} className="icon" />
            <span>{topic}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningBox;