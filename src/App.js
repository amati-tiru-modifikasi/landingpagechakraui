import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// komponen
import Landing from './pages/Landing';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
