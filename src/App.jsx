import './App.css';
import Footer from './components/shared/Footer';

// ROUTE COMPONENTS
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div className="App">
      <div></div>
      {/* Routes */}
      <AppRouter />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
