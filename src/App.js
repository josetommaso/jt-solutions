import { Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
