import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Content from './components/Content';
import NavMenu from './components/NavMenu';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';
import './App.scss';

function App() {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
      setActive(!isActive);
  };

  return (
    <Router>
      <Header
        handleToggle={handleToggle}
        isActive={isActive}
      />
      <NavMenu
        isActive={isActive}
      />
      <Content>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
        </Routes>
      </Content>
    </Router>
  );
}

export default App;
