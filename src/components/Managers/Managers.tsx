import React, { useEffect, useState } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { StandingsApiFp, HistoricalStanding } from '../../client';
import { ManagerDetails } from './ManagerDetails';
import { ManagersSideBar } from './ManagersSideBar';

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
                    <div className="col-sm-2">
                        <ManagersSideBar overallStandings={standings}/>
                    </div>
                    <div className="col-sm-10">
                        <Switch>
                            {standings.map(standing => 
                                <Route path={path + '/' + standing.manager}>
                                        <ManagerDetails standing={standing}/>
                                </Route>
                            )}
                            <Route path='/'>
                                    <h4>Manager</h4>
                            </Route>
                        </Switch>
                    </div>
            </div>
        </div>
    );
}