import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

// ROUTE COMPONENTS
import AppRouter from './routes/AppRouter';
import Server from './server/server';

function App() {
  
  return (
    <div className="App">
      {/* Routes */}
      <AppRouter />
      {/* Footer */}
      <h2>*FOOTER COMPONENT*</h2>
    </div>
  );
}

export default App;
