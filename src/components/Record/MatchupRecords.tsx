import React, { useEffect, useState } from 'react';
import { MatchupOverview, MatchupRecord, MatchupsApiFp, MatchupTeamOverview } from '../../client';
import { MatchupRecordsRow } from './MatchupRecordsRow';

export enum Type {
    HIGHEST = 'Highest',
    LOWEST =  'Lowest'
}

interface Props {
    type: Type
}

export const MatchupRecords = (props: Props) => {
    const [matchupData, setMatchupData] = useState<MatchupRecord[]>([]);

    useEffect(() => {
        MatchupsApiFp().matchupsRecord(props.type)()
          .then(matchups => {
              console.log(matchups)
              setMatchupData(matchups)
          })
    }, [props.type]);

    const getWeek = (matchup: MatchupOverview) => {
        if (matchup.finals) {
            return "Finals";
        }

        if (matchup.semi) {
            return "Semi-Finals";
        }

        if (matchup.thirdPlaceGame) {
            return "Consolation Finals";
        }

        return matchup.week;
    }
    
    return (
        <table className="table table-dark table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">Year</th>
                    <th scope="col">Week</th>
                    <th scope="col">Manager</th>
                    <th scope="col">Points</th>
                </tr>
            </thead>
            <tbody>
                {matchupData.map(matchup =>         
                    <MatchupRecordsRow matchup={matchup}/>
                )}
            </tbody>
        </table>
    );
}