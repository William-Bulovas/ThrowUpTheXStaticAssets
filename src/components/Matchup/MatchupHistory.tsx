import React, { useEffect, useState } from 'react';
import { MatchupOverview, MatchupsApiFp, MatchupTeamOverview } from '../../client';
import { MatchupHistoryRow } from './MatchupHistoryRow';

interface Props {
    managerId1?: string,
    managerName1?: string,
    managerId2?: string,
    managerName2?: string
}

export const MatchupHistory = (props: Props) => {
    const [matchupData, setMatchupData] = useState<MatchupOverview[]>([]);

    useEffect(() => {
        if (props.managerId1 == undefined || props.managerId2 == undefined) return;

        MatchupsApiFp().matchups(props.managerId1, props.managerId2)()
          .then(matchups => {
              console.log(matchups)
              setMatchupData(matchups)
          })
    }, [props.managerId1, props.managerId2]);

    if (props.managerId1 == undefined || props.managerId2 == undefined || 
        props.managerName1 == undefined || props.managerName2 == undefined) {
        return <div>
            Please select 2 distinct managers
        </div>
    }

    const getRecord = (id: string) => {
        return matchupData.map(matchup=> matchup.winnerId)
            .filter(winnerId => winnerId === id)
            .length;
    }
    
    return (
        <div>
            <h5 className="mb-3 d-flex justify-content-center">
                Overall Record: {props.managerName1} {getRecord(props.managerId1)} vs {props.managerName2} {getRecord(props.managerId2)}
            </h5>
            <table className="table table-striped table-dark table-responsive-sm">
                <thead>
                    <tr>
                        <th scope="col">Year</th>
                        <th scope="col">Week</th>
                        <th scope="col">Winner</th>
                        <th scope="col">{props.managerName1}'s Points</th>
                        <th scope="col">{props.managerName2}'s Points</th>
                    </tr>
                </thead>
                <tbody>
                    {matchupData.map(matchup => <MatchupHistoryRow matchup={matchup}/>)}
                </tbody>
            </table>
        </div>
    );
}