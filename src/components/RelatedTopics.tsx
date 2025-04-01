import "./RelatedTopics.css";

const RelatedTopics = () => {
  return (
    <div className="related-topics">
      <h2 className="header">Explorar temas relacionados</h2>
      <div className="button-container">
        {["Algoritmos", "Mais opções em TI e software", "TI e software"].map((text, index) => (
          <button key={index} className="topic-button">{text}</button>
        ))}
      </div>
    </div>
  );
};

export default RelatedTopics;