import './App.css';
import Navigation from './components/header/Navigation';
import Introduction from './components/Portfolio/Introduction';
import Portfolio from './components/Portfolio/Portfolio';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Introduction />
      <Portfolio />
    </div>
  );
}

export default App;
