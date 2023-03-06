import { Reducer } from "redux";
import { ManhuaState, ManhuaTypes } from "./types";

const INITIAL_STATE: ManhuaState = {
    data: null,
    loading: false,
    error: false
}

const reducer: Reducer<ManhuaState> = (state = INITIAL_STATE, action) => {
    switch (action.type){
        case ManhuaTypes.GET_MANHUAS_REQUEST:
            return { ...state, loading: true }
        case ManhuaTypes.GET_MANHUAS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload.data }
        case ManhuaTypes.GET_MANHUAS_FAILURE:
            return { ...state, loading: false, error: true }
        default:
            return state
    }
}

export default reducer