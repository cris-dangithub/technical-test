import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

// ROUTE COMPONENTS
import AppRouter from './routes/AppRouter';

function App() {
  // Traernos los personajes de la API
  const [characters, setCharacters] = useState();
  const [pageCharacter, setPageCharacter] = useState(1);

  useEffect(() => {
    const URL = `https://rickandmortyapi.com/api/character`;
    axios
      .get(URL)
      .then(res => setCharacters(res.data))
      .catch(err => console.log(err));
  }, []);
  return (
    <div className="App">
      {/* Header */}
      <h2>*HEADER COMPONENT (creo que esto no irá)*</h2>
      {/* Routes */}
      <AppRouter />
      {/* Footer */}
      <h2>*FOOTER COMPONENT*</h2>
    </div>
  );
}

export default App;
