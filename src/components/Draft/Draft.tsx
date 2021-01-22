import React, { useEffect, useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DraftResult, DraftResultsApiFp, Standing } from '../../client';
import { FullDraft } from './FullDraft';
import { PerManagerDraft } from './PerManagerDraft';

enum View {
    FULL = 'All Picks',
    PERMANAGER = 'Per Manager Picks'
}

export const Draft = () => {
    const [draftResults, setDraft] = useState<DraftResult[]>([]);
    const [season, setSeason] = useState("2015");
    const [view, setView] = useState(View.FULL);

    useEffect(() => {
        DraftResultsApiFp().draftResultForYear(season)()
            .then(draft => setDraft(draft));
    }, [season]);

    return (
        <div className="container mt-3">
            <h3>Drafts</h3>

            <div className="mb-3 d-flex justify-content-end">
                <Dropdown className="mr-3">
                    <Dropdown.Toggle id="dropdown-basic">
                        {season}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {["2015", "2016", "2017", "2018", "2019", "2020"].map(season => 
                            <Dropdown.Item onClick={() => setSeason(season)}>{season}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-basic">
                        {view}
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {[View.FULL, View.PERMANAGER].map(view => 
                            <Dropdown.Item onClick={() => setView(view)}>{view}</Dropdown.Item>
                        )}
                    </Dropdown.Menu>
                </Dropdown>
            </div>


            { view == View.FULL ? 
                <FullDraft draftResults={draftResults}/>
                : <PerManagerDraft draftResults={draftResults}/>
            }
        </div>
    )
}