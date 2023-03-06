import { action } from "typesafe-actions";
import { CurrentSerieTypes, CurrentSerie, Payload } from "./types";

export const setCurrentSerieRequest = (payload: { payload: Pick<Payload["payload"], "id_release"|"series_name"|"chapter_number">, type: string }) => action(CurrentSerieTypes.SET_CURRENTSERIE_REQUEST, { payload })
export const setCurrentSerieSuccess = (data: Omit<CurrentSerie, "images"|"chapters">) => action(CurrentSerieTypes.SET_CURRENTSERIE_SUCCESS, { data })
export const setCurrentSerieFailure = () => action(CurrentSerieTypes.SET_CURRENTSERIE_FAILURE)

export const setCurrentSerieImagesRequest = (payload: { payload: Pick<Payload["payload"], "id_release">, type: string }) => action(CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_REQUEST, { payload })
export const setCurrentSerieImagesSuccess = (data: Pick<CurrentSerie, "images">) => action(CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_SUCCESS, { data })
export const setCurrentSerieImagesFailure = () => action(CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_FAILURE)

export const setCurrentSerieChaptersRequest = (payload: { payload: Pick<Payload["payload"], "id_serie">, type: string }) => action(CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_REQUEST, { payload })
export const setCurrentSerieChaptersSuccess = (data: Pick<CurrentSerie, "chapters">) => action(CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_SUCCESS, { data })
export const setCurrentSerieChaptersFailure = () => action(CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_FAILURE)