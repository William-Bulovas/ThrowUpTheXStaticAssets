import React from 'react';
import { HistoricalStandings } from './components/HistoricalStandings';
import 'bootstrap/dist/css/bootstrap.css';
import { Matchup } from './components/Matchup/Matchup';
import { Draft } from './components/Draft/Draft';
import { NavBar } from './components/NavBar';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { Standings } from './components/Standings';
import { About } from './components/About';
import { Managers } from './components/Managers/Managers';
import { MatchupRecords } from './components/Record/MatchupRecords';
import { Records } from './components/Record/Records';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route path="/Matchups">
          <Matchup/>
        </Route>
        <Route path="/Historical">
          <HistoricalStandings/>
        </Route>
        <Route path="/Managers">
          <Managers/>
        </Route>
        <Route path="/Drafts">
          <Draft/>
        </Route>
        <Route path="/Standings">
          <Standings/>
        </Route>
        <Route path="/About">
          <About/>
        </Route>
        <Route path="/Records">
          <Records/>
        </Route>
        <Route path="/">
          <HistoricalStandings/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
