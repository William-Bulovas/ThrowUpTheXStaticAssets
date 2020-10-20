import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { StandingsApiFp, HistoricalStanding } from '../client';

enum StandingsView {
    AGGREGATE,
    AVERAGE
}

export const HistoricalStandings = () => {
    const [standings, setStandings] = useState<HistoricalStanding[]>([]);
    const [view, setView] = useState(StandingsView.AVERAGE);

    useEffect(() => {
        StandingsApiFp().historicalStandings()()
          .then(standings => setStandings(standings))
    }, []);
    
    return (
        <div className="container mt-3">
            <h3>Historical Standings</h3>

            <Dropdown className="mb-3 d-flex justify-content-end">
                <Dropdown.Toggle id="dropdown-basic">
                    {view == StandingsView.AGGREGATE ? 'Aggregate' : 'Average'}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                    <Dropdown.Item onClick={() => setView(StandingsView.AVERAGE)}>Average</Dropdown.Item>
                    <Dropdown.Item onClick={() => setView(StandingsView.AGGREGATE)}>Aggregate</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <table className="table table-striped table-dark table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Manager</th>
                        <th scope="col">Years Played</th>
                        { view == StandingsView.AGGREGATE ? 
                        <>
                            <th scope="col">Total Wins</th>
                            <th scope="col">Total Losses</th>
                            <th scope="col">Total Points For</th>
                            <th scope="col">Total Points Against</th>
                            <th scope="col">Playoffs Made</th>
                            <th scope="col">First Places</th>
                            <th scope="col">Seconds Places</th>
                            <th scope="col">Third Places</th>
                        </>
                        :
                        <>
                            <th scope="col">Average Rank</th>
                            <th scope="col">Average Wins</th>
                            <th scope="col">Average Losses</th>
                            <th scope="col">Average Points For</th>
                            <th scope="col">Average Points Against</th>
                        </>
                        }
                    </tr>
                </thead>
                <tbody>
                    { standings.map(standing => 
                        <tr>
                            <th>{standing.manager}</th>
                            <th>{standing.yearsPlayed}</th>
                            { view == StandingsView.AGGREGATE ? 
                            <>
                                <th>{standing.totalWins}</th>
                                <th>{standing.totalLosses}</th>
                                <th>{standing.totalPointsFor.toFixed(2)}</th>
                                <th>{standing.totalPointsAgainst.toFixed(2)}</th>
                                <th>{standing.playoffsMade}</th>
                                <th>{standing.firstPlaces}</th>
                                <th>{standing.secondPlaces}</th>
                                <th>{standing.thirdPlaces}</th>
                            </>
                            :
                            <>
                                <th>{standing.averageRank.toFixed(2)}</th>
                                <th>{standing.averageWins.toFixed(2)}</th>
                                <th>{standing.averageLosses.toFixed(2)}</th>
                                <th>{standing.averagePointsFor.toFixed(2)}</th>
                                <th>{standing.averagePointsAgainst.toFixed(2)}</th>
                            </>
                            }
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}