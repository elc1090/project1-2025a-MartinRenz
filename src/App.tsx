import { HashRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Course />} />
        <Route path="/project1-2025a-MartinRenz/" element={<Course />} />
      </Routes>
    </HashRouter>
  );
}

export default App;