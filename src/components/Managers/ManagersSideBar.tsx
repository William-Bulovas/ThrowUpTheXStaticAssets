import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
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
                            <Link to={url + '/' + standing.manager} className='nav-link'>
                                {standing.manager}
                            </Link>
                        </li>
                )
            }
        </ul>
    );
}
