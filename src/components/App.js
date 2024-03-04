// App.js
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import UserDetails from './UserDetails';

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/user/:id" component={UserDetails} />
    </Router>
  );
};

export default App;
