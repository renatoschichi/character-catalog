import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<CharactersListPage />} />
      <Route path="/character/:id" element={<CharacterDetailsPage />} />
    </Routes>
  </Router>
  );
}

export default App;
