import { HashRouter, Routes, Route, } from "react-router-dom";
import Course from "./pages/Course";

function App() {
  return (
    <HashRouter>
      <Route path="/" element={<Course />} />
    </HashRouter>
  );
}

export default App;