import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { StandingsApiFp, HistoricalStanding, Standing, DraftResultsApiFp, DraftResult } from '../../client';

interface Props {
    standing: HistoricalStanding
}

export const ManagerDetails = (props: Props) => {
    const [seasonResults, setSeasonResults] = useState<Standing[]>([]);
    const [draftResults, setDraftResults] = useState<DraftResult[]>([]);
    const [draftSeason, setDraftSeason] = useState(0);

    useEffect(() => {
        StandingsApiFp().standingsForManager(props.standing.managerId)()
            .then(results => setSeasonResults(results));
    }, [props.standing])

    useEffect(() => {
        DraftResultsApiFp().draftResultForManager(props.standing.managerId)()
            .then(draft => {
                setDraftResults(draft)
                setDraftSeason(draft[0].year)
            });
    }, [props.standing]);

    return (
        <div>
            <h3 className="mb-5">{props.standing.manager}</h3>

            <h5>Stats</h5>
            <table className="table table-striped table-dark table-hover table-responsive-sm mb-0">
                <thead>
                    <tr>
                        <th scope="col">Years Played</th>
                        <th scope="col">Total Wins</th>
                        <th scope="col">Total Losses</th>
                        <th scope="col">Total Points For</th>
                        <th scope="col">Total Points Against</th>
                        <th scope="col">Playoffs Made</th>
                        <th scope="col">First Places</th>
                        <th scope="col">Seconds Places</th>
                        <th scope="col">Third Places</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th>{props.standing.yearsPlayed}</th>
                        <th>{props.standing.totalWins}</th>
                        <th>{props.standing.totalLosses}</th>
                        <th>{props.standing.totalPointsFor.toFixed(2)}</th>
                        <th>{props.standing.totalPointsAgainst.toFixed(2)}</th>
                        <th>{props.standing.playoffsMade}</th>
                        <th>{props.standing.firstPlaces}</th>
                        <th>{props.standing.secondPlaces}</th>
                        <th>{props.standing.thirdPlaces}</th>
                    </tr>
                </tbody>
            </table>

            <table className="table table-striped table-dark table-hover table-responsive-sm mb-5">
                <thead>
                    <tr>
                        <th scope="col">Average Rank</th>
                        <th scope="col">Average Wins</th>
                        <th scope="col">Average Losses</th>
                        <th scope="col">Average Points For</th>
                        <th scope="col">Average Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr>
                        <th>{props.standing.averageRank.toFixed(2)}</th>
                        <th>{props.standing.averageWins.toFixed(2)}</th>
                        <th>{props.standing.averageLosses.toFixed(2)}</th>
                        <th>{props.standing.averagePointsFor.toFixed(2)}</th>
                        <th>{props.standing.averagePointsAgainst.toFixed(2)}</th>
                    </tr>
                </tbody>
            </table>

            <h5>Results</h5>
            <table className="table table-striped table-dark table-hover table-responsive-sm mb-5">
                <thead>
                    <tr>
                        <th scope="col">Season</th>
                        <th scope="col">Place</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Wins</th>
                        <th scope="col">Losses</th>
                        <th scope="col">Points For</th>
                        <th scope="col">Points Against</th>
                    </tr>
                </thead>
                <tbody>
                    { seasonResults.map(standing=> 
                        <tr>
                            <th>{standing.year}</th>
                            <th>{standing.rank}</th>
                            <th>{standing.teamName}</th>
                            <th>{standing.wins}</th>
                            <th>{standing.losses}</th>
                            <th>{parseFloat(standing.pointsFor).toFixed(2)}</th>
                            <th>{parseFloat(standing.pointsAgainst).toFixed(2)}</th>
                        </tr>
                    )}
                </tbody>
            </table>

            <h5>Drafts</h5>

            <div className="mb-3 d-flex justify-content-end">
                <Dropdown className="mr-3">
                    <Dropdown.Toggle id="dropdown-basic">
                        {draftSeason}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {draftResults.map(result => result.year)
                            .filter(onlyUnique)
                            .map(season => 
                                <Dropdown.Item onClick={() => setDraftSeason(season)}>{season}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <table className="table table-striped table-dark table-hover table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Season</th>
                        <th scope="col">Round</th>
                        <th scope="col">Pick</th>
                        <th scope="col">Player</th>
                        <th scope="col">Pos</th>
                        <th scope="col">Season Points</th>
                    </tr>
                </thead>
                <tbody>
                    { draftResults
                        .filter(draftResult => draftResult.year === draftSeason)
                        .map(draftResult => 
                            <tr>
                                <th>{draftResult.year}</th>
                                <th>{draftResult.round}</th>
                                <th>{draftResult.pick}</th>
                                <th>{draftResult.playerName}</th>
                                <th>{draftResult.playerPosition}</th>
                                <th>{draftResult.pointsScored}</th>
                            </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

const onlyUnique = (value: number, index: number, self: number[]) => {
    return self.indexOf(value) === index;
}