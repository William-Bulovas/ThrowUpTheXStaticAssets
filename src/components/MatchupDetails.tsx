import React, { useEffect, useLayoutEffect, useState } from 'react';
import { MatchupDetail, MatchupsApiFp } from '../client';

interface Props {
    managerIdA: string,
    managerNameA: string,
    managerIdB: string,
    managerNameB: string,
    week: number,
    year: string
}

export const MatchupDetails = (props: Props) => {
    const  [matchupsTeamA, setMatchupsA] = useState<MatchupDetail[]>([]);
    const  [matchupsTeamB, setMatchupsB] = useState<MatchupDetail[]>([]);

    useLayoutEffect(() => {
        MatchupsApiFp().matchupDetails(
            props.managerIdA, 
            props.managerIdB, 
            props.year, 
            props.week)()
            .then(matchups => {
                setMatchupsA(matchups.filter(matchup => matchup.managerId == props.managerIdA).sort(detailSorter))
                setMatchupsB(matchups.filter(matchup => matchup.managerId == props.managerIdB).sort(detailSorter))
            });
    }, [props.managerIdA, props.managerIdB]);

    return (
        <div className="row">
            <div className="col">
                <div className="row"><h5>{props.managerNameA} :</h5></div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Player</th>
                            <th scope="col">Pos</th>
                            <th scope="col">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matchupsTeamA.map(matchup => 
                            <tr>
                                <th>{matchup.playerName}</th>
                                <th>{matchup.selectedPosition}</th>
                                <th>{matchup.points}</th>
                            </tr>                
                        )}
                    </tbody>
                </table>
            </div>
            <div className="col">
                <div className="row"><h5>{props.managerNameB} :</h5></div>
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">Points</th>
                            <th scope="col">Pos</th>
                            <th scope="col">Player</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matchupsTeamB.map(matchup => 
                            <tr>
                                <th>{matchup.playerName}</th>
                                <th>{matchup.selectedPosition}</th>
                                <th>{matchup.points}</th>
                            </tr>                
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

const detailSorter = (detail1: MatchupDetail, detail2: MatchupDetail) => {
    if (detail1.selectedPosition == 'QB') {
        return -1;
    }

    if (detail2.selectedPosition == 'QB') {
        return 1;
    }

    if (detail1.selectedPosition == 'RB') {
        return -1;
    }

    if (detail2.selectedPosition == 'RB') {
        return 1;
    }

    if (detail1.selectedPosition == 'WR') {
        return -1;
    }

    if (detail2.selectedPosition == 'WR') {
        return 1;
    }

    if (detail1.selectedPosition == 'W/R/T') {
        return -1;
    }

    if (detail2.selectedPosition == 'W/R/T') {
        return 1;
    }

    if (detail1.selectedPosition == 'TE') {
        return -1;
    }

    if (detail2.selectedPosition == 'TE') {
        return 1;
    }

    if (detail1.selectedPosition == 'K') {
        return -1;
    }

    if (detail2.selectedPosition == 'K') {
        return 1;
    }
    
    if (detail1.selectedPosition == 'DEF') {
        return -1;
    }

    if (detail2.selectedPosition == 'DEF') {
        return 1;
    }

    if (detail1.selectedPosition == 'BN') {
        return -1;
    }

    if (detail2.selectedPosition == 'BN') {
        return 1;
    }

    return 0;
}