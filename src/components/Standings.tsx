import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Standing, StandingsApiFp } from '../client';

export const Standings = () => {
    const [standings, setStandings] = useState<Standing[]>([]);
    const [season, setSeason] = useState("2015");

    useEffect(() => {
        StandingsApiFp().standings(season)()
            .then(standings => setStandings(standings));
    }, [season]);

    return (
        <div className="container mt-3">
            <h3>Standings</h3>

            <Dropdown className="mb-3 d-flex justify-content-end">
                <Dropdown.Toggle id="dropdown-basic">
                    {season}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    {["2015", "2016", "2017", "2018", "2019", "2020", "2021"].map(season => 
                        <Dropdown.Item onClick={() => setSeason(season)}>{season}</Dropdown.Item>
                    )}
                </Dropdown.Menu>
            </Dropdown>

            <table className="table table-striped table-dark table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Place</th>
                        <th scope="col">Manager</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Losses</th>
                        <th scope="col">Points For</th>
                        <th scope="col">Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    { standings.map(standing=> 
                        <tr>
                            <th>{standing.rank}</th>
                            <th>{standing.manager}</th>
                            <th>{standing.teamName}</th>
                            <th>{standing.wins}</th>
                            <th>{standing.losses}</th>
                            <th>{parseFloat(standing.pointsFor).toFixed(2)}</th>
                            <th>{parseFloat(standing.pointsAgainst).toFixed(2)}</th>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}