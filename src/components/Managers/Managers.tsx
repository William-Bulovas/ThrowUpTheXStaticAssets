import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { StandingsApiFp, HistoricalStanding } from '../../client';
import { ManagerDetails } from './ManagerDetails';
import { ManagersSideBar } from './ManagersSideBar';
import { MobileManagerSelector } from './MobileManagerSelector';

enum StandingsView {
    AGGREGATE,
    AVERAGE
}

export const Managers = () => {
    const [standings, setStandings] = useState<HistoricalStanding[]>([]);
    const { path, url } = useRouteMatch();

    useEffect(() => {
        StandingsApiFp().historicalStandings()()
          .then(standings => setStandings(standings))
    }, []);
    
    return (
        <div className="container-fluid mt-3">
            <div className="row">
                <div className="bg-light d-none d-sm-block col-md-2">
                    <ManagersSideBar overallStandings={standings}/>
                </div>
                <div className="col-md-10">
                    <Switch>
                        {standings.map(standing => 
                            <Route path={path + '/' + standing.managerId}>
                                    <MobileManagerSelector standings={standings} 
                                        selectedManagerName={standing.manager}/>
                                    <ManagerDetails standing={standing}/>
                            </Route>
                        )}
                        <Route path='/'>
                                <MobileManagerSelector standings={standings} 
                                        selectedManagerName="Select Manager"/>
                                <h4 className="d-none d-sm-block">Manager</h4>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    );
}