import { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { getMangasSuccess, getMangasFailure } from "./actions"
import { Manga } from "./types"

interface ResponseData extends AxiosResponse {
    data: {
        mangas: Manga
    }
}

function getMangas(){
    return api.get("getMangas")
}

export function* GetMangas(){
    try {
        const response: ResponseData = yield call(getMangas)
    
        yield put(getMangasSuccess(response.data.mangas))
    } catch (error) {
        console.log(error)
        yield put(getMangasFailure())
    }
}