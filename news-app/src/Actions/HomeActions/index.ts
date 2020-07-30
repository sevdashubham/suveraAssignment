// #region Global Imports
import { Dispatch } from "redux";
// #endregion Global Imports

// #region Local Imports
import { ActionConsts } from "@Definitions";
import { PlanetaryService } from "@Services";
// #endregion Local Imports

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),
    queryNews: (payload: IHomePage.Actions.IGetApodPayload) => async (
        dispatch: Dispatch
    ) => {
        const result = await PlanetaryService.queryNews({
            type: payload.type,
            params: payload.params,
        });
        dispatch({
            payload: result.articles,
            type: ActionConsts.Home.SetArticles,
        });
    },
    setCategory: (payload: IHomePage.Actions.IGetApodPayload) => async (
        dispatch: Dispatch
    ) => {
        const result = await PlanetaryService.queryNews({
            type: payload.type,
            params: JSON.stringify(payload.params),
        });
        dispatch({
            payload: {category: payload.params.category, articles: result.articles},
            type: ActionConsts.Home.SetCategory,
        });
    }, setFilter: (payload: IHomePage.Actions.IGetApodPayload) => async (
        dispatch: Dispatch
    ) => {
        const result = await PlanetaryService.queryNews({
            type: payload.type,
            params: JSON.stringify(payload.params),
        });
        dispatch({
            payload: {articles: result.articles, filters: payload.params},
            type: ActionConsts.Home.SetFilter,
        });
    }
};
