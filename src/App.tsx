import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CharactersListPage from './pages/CharactersListPage';
import CharacterDetailsPage from './pages/CharacterDetailsPage';
import { CharacterResponse } from './types/CharacterResponse';
import Header from './components/Header';
import FavoritesList from './components/FavoritesList';

function App() {
  const [favorites, setFavorites] = useState<CharacterResponse[]>([]);

  function handleFavoriteToggle(character: CharacterResponse) {
    if (favorites.includes(character)) {
      setFavorites(favorites.filter(f => f.id !== character.id));
    } else {
      setFavorites([...favorites, character]);
    }
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={<CharactersListPage favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />}
        />
        <Route path="/personagens/:id" element={<CharacterDetailsPage />} />
        <Route path="/favoritos" element={<FavoritesList favorites={favorites} onFavoriteToggle={handleFavoriteToggle} />} />
      </Routes>
    </Router>
  );
}

export default App;