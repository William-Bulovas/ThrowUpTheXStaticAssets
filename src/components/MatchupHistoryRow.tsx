import React, { useState } from 'react';
import { MatchupOverview } from '../client';
import { MatchupDetails } from './MatchupDetails';

interface Props {
    matchup: MatchupOverview,
}

export const MatchupHistoryRow = (props: Props) => {
    const [expand, setExpand] = useState(false);

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
        <>
            <tr onClick={() => setExpand(!expand)}>
                    <th rowSpan={2}>{props.matchup.year}</th>
                    <th>{getWeek(props.matchup)}</th>
                    <th>{props.matchup.winnerName}</th>
                    <th>{props.matchup.teamA.teamPoints}</th>
                    <th>{props.matchup.teamB.teamPoints}</th>
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