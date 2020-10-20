import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';
import { StandingsApiFp, HistoricalStanding } from '../client';
import { MatchupHistory } from './MatchupHistory';

export const Matchup = () => {
    const [standings, setStandings] = useState<HistoricalStanding[]>([]);
    const [team1, setTeam1] = useState<string | undefined>(undefined);
    const [team1Name, setTeam1Name] = useState<string | undefined>(undefined);
    const [team2, setTeam2] = useState<string | undefined>(undefined);
    const [team2Name, setTeam2Name] = useState<string | undefined>(undefined);

    useEffect(() => {
        StandingsApiFp().historicalStandings()()
          .then(standings => setStandings(standings))
    }, []);
    
    return (
        <div className="container mt-3">
            <h3>Matchups</h3>
            <div className="row d-flex justify-content-center mb-3">
                <DropdownButton title={team1Name == undefined ? 'Team 1' : team1Name}>
                    { standings.map(standing => 
                        <Dropdown.Item onClick={() => {
                            setTeam1(standing.managerId)
                            setTeam1Name(standing.manager)
                        }}>
                            {standing.manager}
                        </Dropdown.Item>
                    ) }
                </DropdownButton>

                <h4 className="mx-3">vs</h4>

                <DropdownButton title={team2Name == undefined ? 'Team 2' : team2Name}>
                    { standings.map(standing => 
                        <Dropdown.Item onClick={() => {
                            setTeam2(standing.managerId)
                            setTeam2Name(standing.manager)
                        }}>      
                            {standing.manager}
                        </Dropdown.Item>
                    )}
                </DropdownButton>
            </div>

            <MatchupHistory managerId1={team1} managerId2={team2} managerName1={team1Name} managerName2={team2Name}/>
        </div>
    );
}