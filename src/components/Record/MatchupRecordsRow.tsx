import React, { useState } from 'react';
import { MatchupRecord } from '../../client';
import { MatchupDetails } from '../Matchup/MatchupDetails';

interface Props {
    matchup: MatchupRecord,
}

export const MatchupRecordsRow = (props: Props) => {
    const [expand, setExpand] = useState(false);

    const getWeek = (matchup: MatchupRecord) => {
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
        <>
            <tr onClick={() => setExpand(!expand)}>
                    <th rowSpan={2}>{props.matchup.year}</th>
                    <th>{getWeek(props.matchup)}</th>
                    <th>{props.matchup.recordManager}</th>
                    <th>{props.matchup.recordPoints}</th>
            </tr>   
            <tr>
                {expand ? 
                    <th colSpan={4}>
                        <MatchupDetails managerIdA={props.matchup.teamA.managerId} managerIdB={props.matchup.teamB.managerId}
                                    managerNameA={props.matchup.teamA.manager} managerNameB={props.matchup.teamB.manager}
                                    year={props.matchup.year} week={props.matchup.week}/>
                    </th> : 
                    <div/> 
                }
            </tr>
        </>
    );
}
