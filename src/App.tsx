import { Routes, Route } from "react-router-dom";
import Course from "./pages/Course";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Course />} />
    </Routes>
  );
}

export default App;