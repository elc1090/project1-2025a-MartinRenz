import { BrowserRouter, Route, Routes } from "react-router-dom";
import Course from "./pages/Course";

function App() {
  return (
    <BrowserRouter basename="/project1-2025a-MartinRenz/">
      <Routes>
        <Route path="/" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;