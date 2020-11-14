import React, { useState } from 'react';
import { MatchupOverview } from '../../client';
import { MatchupDetails } from '../Matchup/MatchupDetails';

interface Props {
    matchup: MatchupOverview,
}

export const MatchupRecordsDiffRow = (props: Props) => {
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
                    <th>{getWinnerName(props.matchup)}</th>
                    <th>{getWinnerPointTotal(props.matchup)}</th>
                    <th>{getLoserName(props.matchup)}</th>
                    <th>{getLoserPointTotal(props.matchup)}</th>
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

const getWinnerName = (matchup: MatchupOverview) => {
    return matchup.winnerName;
}

const getWinnerPointTotal = (matchup:MatchupOverview) => {
    return matchup.teamA.teamPoints > matchup.teamB.teamPoints
         ? matchup.teamA.teamPoints : matchup.teamB.teamPoints;
}

const getLoserName = (matchup: MatchupOverview) => {
    return matchup.teamA.teamPoints < matchup.teamB.teamPoints
         ? matchup.teamA.manager : matchup.teamB.manager;
}

const getLoserPointTotal = (matchup:MatchupOverview) => {
    return matchup.teamA.teamPoints < matchup.teamB.teamPoints
         ? matchup.teamA.teamPoints : matchup.teamB.teamPoints;
}
