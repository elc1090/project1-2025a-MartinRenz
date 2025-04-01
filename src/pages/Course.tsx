import { useEffect } from "react";

function Course() {
  useEffect(() => {
    document.title = 'Algoritmos e Lógica de Programação - O Curso COMPLETO';
  }, []);

  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
}

export default Course;