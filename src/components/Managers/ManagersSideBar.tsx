import React from 'react';
import { Link, NavLink, useRouteMatch } from 'react-router-dom';
import { HistoricalStanding } from '../../client';

interface Props {
    overallStandings: HistoricalStanding[],
}

export const ManagersSideBar = (props: Props) => {
    const { path, url } = useRouteMatch();

    return (
        <ul className='nav nav-pills flex-column'>
            {
                props.overallStandings.map(
                    standing => 
                        <li className='nav-item'>
                            <NavLink activeClassName="active" to={url + '/' + standing.managerId} className='nav-link'>
                                {standing.manager}
                            </NavLink>
                        </li>
                )
            }
        </ul>
    );
}
