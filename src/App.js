import './App.css';
import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom"
import Home from "./pages/Home";
import ProjectDisplay from "./pages/ProjectDisplay";
import {useLayoutEffect} from 'react';
import TimelineSequence from "./components/TimelineSequence";

const Wrapper = ({children}) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children
}

function App() {
  return (
    <div className="App">
        <Router>
        <TimelineSequence />
            <Wrapper >
            <main className="mainPage">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/project/:id" element={<ProjectDisplay />} />
              </Routes>
            </main>
            </Wrapper>
          </Router>
    </div>
  );
}

export default App;
