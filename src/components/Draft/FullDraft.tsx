import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DraftResult, DraftResultsApiFp, Standing } from '../../client';

interface Props {
    draftResults: DraftResult[]
}

export const FullDraft = (props: Props) => {
    return (
        <table className="table table-striped table-dark table-hover table-responsive-sm">
            <thead>
                <tr>
                    <th scope="col">Round</th>
                    <th scope="col">Pick</th>
                    <th scope="col">Manager</th>
                    <th scope="col">Player</th>
                    <th scope="col">Pos</th>
                    <th scope="col">Season Points</th>
                </tr>
            </thead>
            <tbody>
                { props.draftResults.map(draftResult=> 
                    <tr>
                        <th>{draftResult.round}</th>
                        <th>{draftResult.pick}</th>
                        <th>{draftResult.manager}</th>
                        <th>{draftResult.playerName}</th>
                        <th>{draftResult.playerPosition}</th>
                        <th>{draftResult.pointsScored}</th>
                    </tr>
                )}
            </tbody>
        </table>
    )
}