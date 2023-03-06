import { action } from "typesafe-actions";
import { ManhuaTypes, Manhua } from "./types";

export const getManhuasRequest = () => action(ManhuaTypes.GET_MANHUAS_REQUEST)
export const getManhuasSuccess = (data: Manhua) => action(ManhuaTypes.GET_MANHUAS_SUCCESS, { data })
export const getManhuasFailure = () => action(ManhuaTypes.GET_MANHUAS_FAILURE)
