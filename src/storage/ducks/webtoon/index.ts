import { Reducer } from "redux";
import { WebtoonState, WebtoonTypes } from "./types";

const INITIAL_STATE: WebtoonState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<WebtoonState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case WebtoonTypes.GET_WEBTOONS_REQUEST:
            return { ...state, loading: true }
        case WebtoonTypes.GET_WEBTOONS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case WebtoonTypes.GET_WEBTOONS_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer