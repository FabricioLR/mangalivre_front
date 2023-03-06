import { action } from "typesafe-actions";
import { MangaTypes, Manga } from "./types";

export const getMangasRequest = () => action(MangaTypes.GET_MANGAS_REQUEST)
export const getMangasSuccess = (data: Manga) => action(MangaTypes.GET_MANGAS_SUCCESS, { data })
export const getMangasFailure = () => action(MangaTypes.GET_MANGAS_FAILURE)
