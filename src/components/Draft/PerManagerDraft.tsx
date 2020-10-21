import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DraftResult, DraftResultsApiFp, Standing } from '../../client';

interface Props {
    draftResults: DraftResult[]
}

export const PerManagerDraft = (props: Props) => {
    const managerIds = Array.from(new Set(props.draftResults.map(draft => draft.managerId)));

    return (
        <div>
            {
                managerIds.map(managerId => 
                    <div>
                        <h4>
                            { props.draftResults
                                    .filter(draftResult => draftResult.managerId === managerId)
                                    [0].manager }
                        </h4>

                        <table className="table table-striped table-dark table-hover table-responsive-sm mb-3">
                            <thead>
                                <tr>
                                    <th scope="col">Round</th>
                                    <th scope="col">Pick</th>
                                    <th scope="col">Player</th>
                                    <th scope="col">Pos</th>
                                    <th scope="col">Season Points</th>
                                </tr>
                            </thead>
                            <tbody>
                                { props.draftResults
                                    .filter(draftResult => draftResult.managerId === managerId)
                                    .map(draftResult => 
                                        <tr>
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
                )
            }

        </div>
    )
}