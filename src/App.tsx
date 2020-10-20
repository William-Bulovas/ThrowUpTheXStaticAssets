import React from 'react';
import { HistoricalStandings } from './components/HistoricalStandings';
import 'bootstrap/dist/css/bootstrap.css';
import { Matchup } from './components/Matchup';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Standings } from './components/Standings';
import { About } from './components/About';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/Matchups">
          <Matchup/>
        </Route>
        <Route path="/Managers">
          <div/>
        </Route>
        <Route path="/Drafts">
          <div/>
        </Route>
        <Route path="/Standings">
          <Standings/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/">
          <HistoricalStandings/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
