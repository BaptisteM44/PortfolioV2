import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProjectDisplay from "./pages/ProjectDisplay";

function App() {
  return (
    <div className="App">
        <Router>
          <main className="mainPage">
          <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDisplay />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          <Footer />
          </main>
        </Router>
      
    </div>
  );
}

export default App;
