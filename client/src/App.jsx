import React from 'react';
import { AppContextProvider } from './context/AppContext';
import './App.css';
import Produce from './pages/ProducePage';
import Navbar from './components/Header/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Account from './components/Account';
import Farms from './components/Farms';
import IdProduct from './pages/IdProductPage'

const App = () => {
  return (
    <Router>
      <AppContextProvider>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/produce" component={Produce} />
          <Route exact path="/produce/:id" component={IdProduct} />
          <Route exact path="/farms" component={Farms} />
          <Route exact path="/account" component={Account} />
          {/* <Home /> */}
        </Switch>
      </AppContextProvider>
    </Router>
  );
};

export default App;
