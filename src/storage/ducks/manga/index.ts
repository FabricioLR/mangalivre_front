import { Reducer } from "redux";
import { MangaState, MangaTypes } from "./types";

const INITIAL_STATE: MangaState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<MangaState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case MangaTypes.GET_MANGAS_REQUEST:
            return { ...state, loading: true }
        case MangaTypes.GET_MANGAS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case MangaTypes.GET_MANGAS_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer