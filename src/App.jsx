import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./components/Calculator/Calculator";
import Results from "./components/Results/Results";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Calculator />} />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </Router>
  );
}

export default App;
