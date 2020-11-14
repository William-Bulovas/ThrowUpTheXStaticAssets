import React, { useEffect, useState } from 'react';
import { NavLink, Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import { MatchupRecords, Type } from './MatchupRecords';
import { MatchupRecordsDiff } from './MatchupRecordsDiff';

export const Records = () => {    
    const { path, url } = useRouteMatch();

    return (
        <div className="container mt-3">
            <h3>Records</h3>

            <ul className="nav nav-tabs mt-3">
                <NavLink activeClassName="active" to={url + '/HighestScoring'} className='nav-link'>
                    Most Points Scored
                </NavLink>
                <NavLink activeClassName="active" to={url + '/LowestScoring'} className='nav-link'>
                    Least Points Scored
                </NavLink>
                <NavLink activeClassName="active" to={url + '/LargeMargin'} className='nav-link'>
                    Largest Margin of Victory
                </NavLink>
                <NavLink activeClassName="active" to={url + '/SmallMargin'} className='nav-link'>
                    Smallest Margin of Victory
                </NavLink>
            </ul>

            <div className="mt-3">
                <Switch>
                    <Route path={path + '/HighestScoring'}>
                        <MatchupRecords type={Type.HIGHEST}/>
                    </Route>
                    <Route path={path + '/LowestScoring'}>
                        <MatchupRecords type={Type.LOWEST}/>
                    </Route>
                    <Route path={path + '/LargeMargin'}>
                        <MatchupRecordsDiff type={Type.HIGHEST}/>
                    </Route>
                    <Route path={path + '/SmallMargin'}>
                        <MatchupRecordsDiff type={Type.LOWEST}/>
                    </Route>
                    <Route path={path + '/'}>
                        <Redirect to={path + '/HighestScoring'} />
                    </Route>
                </Switch>
            </div>
        </div>
    );
}