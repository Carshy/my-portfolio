import './App.css';
import Navigation from './components/header/Navigation';
import Introduction from './components/Portfolio/Introduction';
import { ProjectProvider } from './components/Portfolio/ProjectListContext';
import Portfolios from './components/Portfolio/Portfolios';

function App() {
  return (
    <ProjectProvider>
      <div className="App">
        <Navigation />
        <Introduction />
        <Portfolios />
      </div>
    </ProjectProvider>
  );
}

export default App;
