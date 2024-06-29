import React from 'react';
import Portfolio from './components/Portfolio/Portfolio';
import ComicComponent from './components/Comic/Comic';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App: React.FC = () => {
  return (
        <Router>
          <Routes>
            <Route path="/" element={<Portfolio />} />
            <Route path="/comic" element={<ComicComponent />} />
          </Routes>
        </Router>
      );
    };
  
  export default App;
