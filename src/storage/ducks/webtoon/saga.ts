import { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { getWebtoonsFailure, getWebtoonsSuccess } from "./actions"
import { Webtoon } from "./types"

interface ResponseData extends AxiosResponse {
    data: {
        webtoons: Webtoon
    }
}

function getWebtoons(){
    return api.get("getWebtoons")
}

export function* GetWebtoons(){
    try {
        const response: ResponseData = yield call(getWebtoons)

        yield put(getWebtoonsSuccess(response.data.webtoons))
    } catch (error) {
        console.log(error)
        yield put(getWebtoonsFailure())
    }
}