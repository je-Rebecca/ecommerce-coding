import './App.css';

import ShopPage from './pages/shop/shop.components';
import Homepage from './pages/homepage/homepage.component.jsx';
import Header from './components/header/header.component';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
