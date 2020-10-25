import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HistoricalStanding } from '../../client';

interface Props {
    standings: HistoricalStanding[],
    selectedManagerName: string
}

export const MobileManagerSelector = (props: Props) => {
    return (
        <div className="d-block d-sm-none">
            <Dropdown className="mb-3 w-100">
                <Dropdown.Toggle id="dropdown-basic" className="w-100">
                    {props.selectedManagerName}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {props.standings.map(standing => 
                            <Dropdown.Item as={Link} to={'/Managers/' + standing.managerId}>{standing.manager}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}


