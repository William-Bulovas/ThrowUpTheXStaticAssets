import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { MatchupOverview, MatchupRecord, MatchupsApiFp, MatchupTeamOverview } from '../../client';
import { MatchupHistoryRow } from '../Matchup/MatchupHistoryRow';
import { MatchupRecordsDiffRow } from './MatchupRecordsDiffRow';

export enum Type {
    HIGHEST = 'Highest',
    LOWEST =  'Lowest'
}

interface Props {
    type: Type
}

export const MatchupRecordsDiff = (props: Props) => {
    const [matchupData, setMatchupData] = useState<MatchupOverview[]>([]);

    useEffect(() => {
        MatchupsApiFp().matchupDiffRecord(props.type)()
          .then(matchups => {
              setMatchupData(matchups)
          })
    }, [props.type]);
    
    return (
        <table className="table table-dark table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Week</th>
                    <th scope="col">Winner</th>
                    <th scope="col">Winner's Points</th>
                    <th scope="col">Loser</th>
                    <th scope="col">Loser's Points</th>
                </tr>
            </thead>
            <tbody>
                {matchupData.map(matchup => <MatchupRecordsDiffRow matchup={matchup}/>)}
            </tbody>
        </table>
    );
}