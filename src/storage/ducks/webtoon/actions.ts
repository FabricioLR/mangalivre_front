import { action } from "typesafe-actions";
import { WebtoonTypes, Webtoon } from "./types";

export const getWebtoonsRequest = () => action(WebtoonTypes.GET_WEBTOONS_REQUEST)
export const getWebtoonsSuccess = (data: Webtoon) => action(WebtoonTypes.GET_WEBTOONS_SUCCESS, { data })
export const getWebtoonsFailure = () => action(WebtoonTypes.GET_WEBTOONS_FAILURE)