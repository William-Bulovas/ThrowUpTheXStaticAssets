/// <reference path="./custom.d.ts" />
// tslint:disable
/**
 * ThrowUpTheX
 * This is the swagger model for the throw up the X Fantasy Football Viewer 
 *
 * OpenAPI spec version: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */


import * as url from "url";
import * as portableFetch from "portable-fetch";
import { Configuration } from "./configuration";

const BASE_PATH = "https://5t0iqo2ct0.execute-api.us-west-2.amazonaws.com/prod".replace(/\/+$/, "");

/**
 *
 * @export
 */
export const COLLECTION_FORMATS = {
    csv: ",",
    ssv: " ",
    tsv: "\t",
    pipes: "|",
};

/**
 *
 * @export
 * @interface FetchAPI
 */
export interface FetchAPI {
    (url: string, init?: any): Promise<Response>;
}

/**
 *
 * @export
 * @interface FetchArgs
 */
export interface FetchArgs {
    url: string;
    options: any;
}

/**
 *
 * @export
 * @class BaseAPI
 */
export class BaseAPI {
    protected configuration: Configuration;

    constructor(configuration?: Configuration, protected basePath: string = BASE_PATH, protected fetch: FetchAPI = portableFetch) {
        if (configuration) {
            this.configuration = configuration;
            this.basePath = configuration.basePath || this.basePath;
        }

        throw new Error();
    }
};

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}

/**
 * 
 * @export
 * @interface DraftResult
 */
export interface DraftResult {
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    managerId?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    manager?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    teamId?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    teamName?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    playerId?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    playerName?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    playerPosition?: string;
    /**
     * 
     * @type {string}
     * @memberof DraftResult
     */
    seasonPoints?: string;
    /**
     * 
     * @type {number}
     * @memberof DraftResult
     */
    pick?: number;
    /**
     * 
     * @type {number}
     * @memberof DraftResult
     */
    round?: number;
    /**
     * 
     * @type {number}
     * @memberof DraftResult
     */
    year?: number;
}

/**
 * 
 * @export
 * @interface HistoricalStanding
 */
export interface HistoricalStanding {
    manager: string,
    managerId: string,
    yearsPlayed: number,
    totalWins: number,
    totalLosses: number,
    winPercentage: number,
    averageWins: number,
    averageLosses: number,
    averageRank: number,
    totalPointsFor: number,
    totalPointsAgainst: number,
    averagePointsFor: number,
    averagePointsAgainst: number,
    playoffsMade: number,
    firstPlaces: number,
    secondPlaces: number,
    thirdPlaces: number,
    rank: number[]
}

/**
 * 
 * @export
 * @interface MatchupDetail
 */
export interface MatchupDetail {
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    managerId?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    manager?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    playerId?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    playerName?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchupDetail
     */
    points?: number;
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    position?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    selectedPosition?: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupDetail
     */
    year?: string;
    /**
     * 
     * @type {number}
     * @memberof MatchupDetail
     */
    week?: number;
}

/**
 * 
 * @export
 * @interface MatchupOverview
 */
export interface MatchupOverview {
    /**
     * 
     * @type {string}
     * @memberof MatchupOverview
     */
    winnerId: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupOverview
     */
    winnerName: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupOverview
     */
    year: string;
    /**
     * 
     * @type {number}
     * @memberof MatchupOverview
     */
    week: number;
    /**
     * 
     * @type {boolean}
     * @memberof MatchupOverview
     */
    semi: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchupOverview
     */
    thirdPlaceGame: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof MatchupOverview
     */
    finals: boolean;
    /**
     * 
     * @type {MatchupTeamOverview}
     * @memberof MatchupOverview
     */
    teamA: MatchupTeamOverview;
    /**
     * 
     * @type {MatchupTeamOverview}
     * @memberof MatchupOverview
     */
    teamB: MatchupTeamOverview;
}

/**
 * 
 * @export
 * @interface MatchupTeamOverview
 */
export interface MatchupTeamOverview {
    /**
     * 
     * @type {string}
     * @memberof MatchupTeamOverview
     */
    teamName: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupTeamOverview
     */
    teamId: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupTeamOverview
     */
    manager: string;
    /**
     * 
     * @type {string}
     * @memberof MatchupTeamOverview
     */
    managerId: string;
    /**
     * 
     * @type {number}
     * @memberof MatchupTeamOverview
     */
    teamPoints: number;
}

/**
 * 
 * @export
 * @interface Standing
 */
export interface Standing {
    /**
     * 
     * @type {string}
     * @memberof Standing
     */
    managerId?: string;
    /**
     * 
     * @type {string}
     * @memberof Standing
     */
    manager?: string;
    /**
     * 
     * @type {string}
     * @memberof Standing
     */
    teamId?: string;
    /**
     * 
     * @type {string}
     * @memberof Standing
     */
    teamName?: string;
    /**
     * 
     * @type {number}
     * @memberof Standing
     */
    rank?: number;
    /**
     * 
     * @type {number}
     * @memberof Standing
     */
    wins?: number;
    /**
     * 
     * @type {number}
     * @memberof Standing
     */
    losses?: number;
    /**
     * 
     * @type {string}
     * @memberof Standing
     */
    pointsFor: string;
    /**
     * 
     * @type {string}
     * @memberof Standing
     */
    pointsAgainst: string;
    /**
     * 
     * @type {number}
     * @memberof Standing
     */
    year?: number;
}


/**
 * DraftResultsApi - fetch parameter creator
 * @export
 */
export const DraftResultsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the draft results for a year and manager
         * @summary Find draft results
         * @param {string} managerId Manager of the draft
         * @param {string} year Fantasy Football year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        draftResult(managerId: string, year: string, options: any = {}): FetchArgs {
            // verify required parameter 'managerId' is not null or undefined
            if (managerId === null || managerId === undefined) {
                throw new RequiredError('managerId','Required parameter managerId was null or undefined when calling draftResult.');
            }
            // verify required parameter 'year' is not null or undefined
            if (year === null || year === undefined) {
                throw new RequiredError('year','Required parameter year was null or undefined when calling draftResult.');
            }
            const localVarPath = `/draft/{year}/{managerId}`
                .replace(`{${"managerId"}}`, encodeURIComponent(String(managerId)))
                .replace(`{${"year"}}`, encodeURIComponent(String(year)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * DraftResultsApi - functional programming interface
 * @export
 */
export const DraftResultsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Returns the draft results for a year and manager
         * @summary Find draft results
         * @param {string} managerId Manager of the draft
         * @param {string} year Fantasy Football year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        draftResult(managerId: string, year: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<DraftResult>> {
            const localVarFetchArgs = DraftResultsApiFetchParamCreator(configuration).draftResult(managerId, year, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * DraftResultsApi - factory interface
 * @export
 */
export const DraftResultsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Returns the draft results for a year and manager
         * @summary Find draft results
         * @param {string} managerId Manager of the draft
         * @param {string} year Fantasy Football year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        draftResult(managerId: string, year: string, options?: any) {
            return DraftResultsApiFp(configuration).draftResult(managerId, year, options)(fetch, basePath);
        },
    };
};

/**
 * DraftResultsApi - object-oriented interface
 * @export
 * @class DraftResultsApi
 * @extends {BaseAPI}
 */
export class DraftResultsApi extends BaseAPI {
    /**
     * Returns the draft results for a year and manager
     * @summary Find draft results
     * @param {string} managerId Manager of the draft
     * @param {string} year Fantasy Football year
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DraftResultsApi
     */
    public draftResult(managerId: string, year: string, options?: any) {
        return DraftResultsApiFp(this.configuration).draftResult(managerId, year, options)(this.fetch, this.basePath);
    }

}

/**
 * MatchupsApi - fetch parameter creator
 * @export
 */
export const MatchupsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Find standings for a given year
         * @summary Get the matchup details
         * @param {string} managerIdA Manager id for the first selected player
         * @param {string} managerIdB Manager id for the second selected player
         * @param {string} year Year of the matchup
         * @param {number} week Year of the matchup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        matchupDetails(managerIdA: string, managerIdB: string, year: string, week: number, options: any = {}): FetchArgs {
            // verify required parameter 'managerIdA' is not null or undefined
            if (managerIdA === null || managerIdA === undefined) {
                throw new RequiredError('managerIdA','Required parameter managerIdA was null or undefined when calling matchupDetails.');
            }
            // verify required parameter 'managerIdB' is not null or undefined
            if (managerIdB === null || managerIdB === undefined) {
                throw new RequiredError('managerIdB','Required parameter managerIdB was null or undefined when calling matchupDetails.');
            }
            // verify required parameter 'year' is not null or undefined
            if (year === null || year === undefined) {
                throw new RequiredError('year','Required parameter year was null or undefined when calling matchupDetails.');
            }
            // verify required parameter 'week' is not null or undefined
            if (week === null || week === undefined) {
                throw new RequiredError('week','Required parameter week was null or undefined when calling matchupDetails.');
            }
            const localVarPath = `/matchupDetail/{managerIdA}/{managerIdB}/{year}/{week}`
                .replace(`{${"managerIdA"}}`, encodeURIComponent(String(managerIdA)))
                .replace(`{${"managerIdB"}}`, encodeURIComponent(String(managerIdB)))
                .replace(`{${"year"}}`, encodeURIComponent(String(year)))
                .replace(`{${"week"}}`, encodeURIComponent(String(week)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            delete localVarUrlObj.search;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },

        /**
         * Find standings for a given year
         * @summary Find standings for a year
         * @param {string} managerIdA Manager id for the first selected player
         * @param {string} managerIdB Manager id for the second selected player
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        matchups(managerIdA: string, managerIdB: string, options: any = {}): FetchArgs {
            // verify required parameter 'managerIdA' is not null or undefined
            if (managerIdA === null || managerIdA === undefined) {
                throw new RequiredError('managerIdA','Required parameter managerIdA was null or undefined when calling matchups.');
            }
            // verify required parameter 'managerIdB' is not null or undefined
            if (managerIdB === null || managerIdB === undefined) {
                throw new RequiredError('managerIdB','Required parameter managerIdB was null or undefined when calling matchups.');
            }
            const localVarPath = `/matchup/{managerIdA}/{managerIdB}`
                .replace(`{${"managerIdA"}}`, encodeURIComponent(String(managerIdA)))
                .replace(`{${"managerIdB"}}`, encodeURIComponent(String(managerIdB)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MatchupsApi - functional programming interface
 * @export
 */
export const MatchupsApiFp = function(configuration?: Configuration) {
    return {
                /**
         * Find standings for a given year
         * @summary Get the matchup details
         * @param {string} managerIdA Manager id for the first selected player
         * @param {string} managerIdB Manager id for the second selected player
         * @param {string} year Year of the matchup
         * @param {number} week Year of the matchup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        matchupDetails(managerIdA: string, managerIdB: string, year: string, week: number, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<MatchupDetail>> {
            const localVarFetchArgs = MatchupsApiFetchParamCreator(configuration).matchupDetails(managerIdA, managerIdB, year, week, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Find standings for a given year
         * @summary Find standings for a year
         * @param {string} managerIdA Manager id for the first selected player
         * @param {string} managerIdB Manager id for the second selected player
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        matchups(managerIdA: string, managerIdB: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<MatchupOverview>> {
            const localVarFetchArgs = MatchupsApiFetchParamCreator(configuration).matchups(managerIdA, managerIdB, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * MatchupsApi - factory interface
 * @export
 */
export const MatchupsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Find standings for a given year
         * @summary Get the matchup details
         * @param {string} managerIdA Manager id for the first selected player
         * @param {string} managerIdB Manager id for the second selected player
         * @param {string} year Year of the matchup
         * @param {number} week Year of the matchup
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        matchupDetails(managerIdA: string, managerIdB: string, year: string, week: number, options?: any) {
            return MatchupsApiFp(configuration).matchupDetails(managerIdA, managerIdB, year, week, options)(fetch, basePath);
        },

        /**
         * Find standings for a given year
         * @summary Find standings for a year
         * @param {string} managerIdA Manager id for the first selected player
         * @param {string} managerIdB Manager id for the second selected player
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        matchups(managerIdA: string, managerIdB: string, options?: any) {
            return MatchupsApiFp(configuration).matchups(managerIdA, managerIdB, options)(fetch, basePath);
        },
    };
};

/**
 * MatchupsApi - object-oriented interface
 * @export
 * @class MatchupsApi
 * @extends {BaseAPI}
 */
export class MatchupsApi extends BaseAPI {
    /**
     * Find standings for a given year
     * @summary Get the matchup details
     * @param {string} managerIdA Manager id for the first selected player
     * @param {string} managerIdB Manager id for the second selected player
     * @param {string} year Year of the matchup
     * @param {number} week Year of the matchup
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatchupsApi
     */
    public matchupDetails(managerIdA: string, managerIdB: string, year: string, week: number, options?: any) {
        return MatchupsApiFp(this.configuration).matchupDetails(managerIdA, managerIdB, year, week, options)(this.fetch, this.basePath);
    }

    /**
     * Find standings for a given year
     * @summary Find standings for a year
     * @param {string} managerIdA Manager id for the first selected player
     * @param {string} managerIdB Manager id for the second selected player
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MatchupsApi
     */
    public matchups(managerIdA: string, managerIdB: string, options?: any) {
        return MatchupsApiFp(this.configuration).matchups(managerIdA, managerIdB, options)(this.fetch, this.basePath);
    }

}

/**
 * StandingsApi - fetch parameter creator
 * @export
 */
export const StandingsApiFetchParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Find standings for all of the years
         * @summary Find standings for a year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        historicalStandings(options: any = {}): FetchArgs {
            const localVarPath = `/historicalStanding`;
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Find standings for a given year
         * @summary Find standings for a year
         * @param {string} year Fantasy Football year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        standings(year: string, options: any = {}): FetchArgs {
            // verify required parameter 'year' is not null or undefined
            if (year === null || year === undefined) {
                throw new RequiredError('year','Required parameter year was null or undefined when calling standings.');
            }
            const localVarPath = `/standing/{year}`
                .replace(`{${"year"}}`, encodeURIComponent(String(year)));
            const localVarUrlObj = url.parse(localVarPath, true);
            const localVarRequestOptions = Object.assign({ method: 'GET' }, options);
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarUrlObj.query = Object.assign({}, localVarUrlObj.query, localVarQueryParameter, options.query);
            // fix override query string Detail: https://stackoverflow.com/a/7517673/1077943
            localVarUrlObj.search = null;
            localVarRequestOptions.headers = Object.assign({}, localVarHeaderParameter, options.headers);

            return {
                url: url.format(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * StandingsApi - functional programming interface
 * @export
 */
export const StandingsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Find standings for all of the years
         * @summary Find standings for a year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        historicalStandings(options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<HistoricalStanding>> {
            const localVarFetchArgs = StandingsApiFetchParamCreator(configuration).historicalStandings(options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
        /**
         * Find standings for a given year
         * @summary Find standings for a year
         * @param {string} year Fantasy Football year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        standings(year: string, options?: any): (fetch?: FetchAPI, basePath?: string) => Promise<Array<Standing>> {
            const localVarFetchArgs = StandingsApiFetchParamCreator(configuration).standings(year, options);
            return (fetch: FetchAPI = portableFetch, basePath: string = BASE_PATH) => {
                return fetch(basePath + localVarFetchArgs.url, localVarFetchArgs.options).then((response) => {
                    if (response.status >= 200 && response.status < 300) {
                        return response.json();
                    } else {
                        throw response;
                    }
                });
            };
        },
    }
};

/**
 * StandingsApi - factory interface
 * @export
 */
export const StandingsApiFactory = function (configuration?: Configuration, fetch?: FetchAPI, basePath?: string) {
    return {
        /**
         * Find standings for all of the years
         * @summary Find standings for a year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        historicalStandings(options?: any) {
            return StandingsApiFp(configuration).historicalStandings(options)(fetch, basePath);
        },
        /**
         * Find standings for a given year
         * @summary Find standings for a year
         * @param {string} year Fantasy Football year
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        standings(year: string, options?: any) {
            return StandingsApiFp(configuration).standings(year, options)(fetch, basePath);
        },
    };
};

/**
 * StandingsApi - object-oriented interface
 * @export
 * @class StandingsApi
 * @extends {BaseAPI}
 */
export class StandingsApi extends BaseAPI {
    /**
     * Find standings for all of the years
     * @summary Find standings for a year
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StandingsApi
     */
    public historicalStandings(options?: any) {
        return StandingsApiFp(this.configuration).historicalStandings(options)(this.fetch, this.basePath);
    }

    /**
     * Find standings for a given year
     * @summary Find standings for a year
     * @param {string} year Fantasy Football year
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StandingsApi
     */
    public standings(year: string, options?: any) {
        return StandingsApiFp(this.configuration).standings(year, options)(this.fetch, this.basePath);
    }

}

