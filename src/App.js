// import './App.css';
import Homepage from './pages/homepage/homepage.component.jsx';
import { Route } from 'react-router-dom';
const HatsPage = () => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/hats" component={HatsPage} />
    </div>
  );
}

export default App;
