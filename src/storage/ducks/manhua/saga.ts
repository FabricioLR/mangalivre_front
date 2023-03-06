import { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { getManhuasFailure, getManhuasSuccess } from "./actions"
import { Manhua } from "./types"

interface ResponseData extends AxiosResponse {
    data: {
        manhuas: Manhua
    }
}

function getManhuas(){
    return api.get("getManhuas")
}


export function* GetManhuas(){
    try {
        const response: ResponseData = yield call(getManhuas)

        yield put(getManhuasSuccess(response.data.manhuas))
    } catch (error) {
        console.log(error)
        yield put(getManhuasFailure())
    } 
}