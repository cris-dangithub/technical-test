import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/shared/Footer';

// ROUTE COMPONENTS
import AppRouter from './routes/AppRouter';
function App() {
  const { favorites } = useSelector(state => state);

  return (
    <div className="App">
      {/* Routes */}
      <AppRouter />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
