import { Reducer } from "redux";
import { CurrentSerieState, CurrentSerieTypes } from "./types";

const INITIAL_STATE: CurrentSerieState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<CurrentSerieState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case CurrentSerieTypes.SET_CURRENTSERIE_REQUEST:
            return { ...state, loading: true, data: null }
        case CurrentSerieTypes.SET_CURRENTSERIE_SUCCESS:
            return { ...state, loading: false, error: false, data: { ...state.data, ...action.payload.data } }
        case CurrentSerieTypes.SET_CURRENTSERIE_FAILURE:
            return { ...state, loading: false, error: true }
        case CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_REQUEST:
            return { ...state, loading: true }
        case CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_SUCCESS:
            return { ...state, loading: false, error: false, data: { ...state.data, images: action.payload.data.images } }
        case CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_FAILURE:
            return { ...state, loading: false, error: true }
        case CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_REQUEST:
            return { ...state, loading: true }
        case CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_SUCCESS:
            return { ...state, loading: false, error: false, data: { ...state.data, chapters: action.payload.data.chapters } }
        case CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer