// #region Local Imports
import { ActionConsts } from "@Definitions";
// #endregion Local Imports

// #region Interface Imports
import { IAction, IHomePage } from "@Interfaces";
// #endregion Interface Imports

const INITIAL_STATE: IHomePage.IStateProps = {
    home: {
        version: 1,
    },
    category: '',
    articles: [],
    filters: {},
    image: {
        url: "",
    },
};

type IMapPayload = IHomePage.Actions.IMapPayload;

export const HomeReducer = (
    state = INITIAL_STATE,
    action: IAction<IMapPayload>
) => {
    switch (action.type) {
        case ActionConsts.Home.SetReducer:
            return {
                ...state,
                ...action.payload,
            };
  case ActionConsts.Home.SetArticles:
            return {
                ...state,
                articles: action.payload
            };
case ActionConsts.Home.SetCategory:
            return {
                ...state,
                category: action.payload.category,
                articles: action.payload.articles,
                filters: {}
            };
case ActionConsts.Home.SetFilter:
            return {
                ...state,
                filters: action.payload.filters,
                articles: action.payload.articles
            };

        case ActionConsts.Home.ResetReducer:
            return INITIAL_STATE;

        default:
            return state;
    }
};
