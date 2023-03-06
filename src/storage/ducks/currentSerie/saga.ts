import { AxiosResponse } from "axios"
import { call, put } from "redux-saga/effects"
import api from "../../../components/api"
import { setCurrentSerieChaptersFailure, setCurrentSerieChaptersRequest, setCurrentSerieChaptersSuccess, setCurrentSerieFailure, setCurrentSerieImagesFailure, setCurrentSerieImagesRequest, setCurrentSerieImagesSuccess, setCurrentSerieRequest, setCurrentSerieSuccess } from "./actions"
import { Chapter } from "./types"
import { CurrentSerie, } from "./types";

interface ResponseData extends AxiosResponse {
    data: {
        chapters: Chapter[]
        chapter: any[]
        serie: Omit<CurrentSerie, "images"|"chapters">
    }
}

function getSerie(serieName: string){
    return api.post("getSerie", {
        search: serieName
    })
}

function getChapters(serieId: number){
    return api.post("getChapters", {
        serieId
    })
}

function getImages(chapterId: number){
    return api.post("getChapter", {
        chapterId
    })
}

export function* GetSerie({ payload }: Parameters<typeof setCurrentSerieRequest>[0]){
    const { series_name, chapter_number, id_release } = payload

    try {
        const response: ResponseData = yield call(getSerie, series_name)

        yield put(setCurrentSerieSuccess({ ...response.data.serie, chapter_number, id_release, series_name }))
    } catch (error) {
        console.log(error)
        yield put(setCurrentSerieFailure())
    }
}

export function* GetChapters({ payload }: Parameters<typeof setCurrentSerieChaptersRequest>[0]){
    const { id_serie } = payload

    try {
        const response: ResponseData = yield call(getChapters, id_serie)

        yield put(setCurrentSerieChaptersSuccess({ chapters: response.data.chapters }))
    } catch (error) {
        console.log(error)
        yield put(setCurrentSerieChaptersFailure())
    }
}

export function* GetImages({ payload }: Parameters<typeof setCurrentSerieImagesRequest>[0]){
    const { id_release } = payload
    
    try {
        const response: ResponseData = yield call(getImages, id_release)

        yield put(setCurrentSerieImagesSuccess({ images: response.data.chapter }))
    } catch (error) {
        console.log(error)
        yield put(setCurrentSerieImagesFailure())
    }
}