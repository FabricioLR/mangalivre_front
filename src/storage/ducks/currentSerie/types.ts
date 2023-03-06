export enum CurrentSerieTypes {
    "SET_CURRENTSERIE_REQUEST" = "@CurrentSerie/SET_CURRENTSERIE_REQUEST",
    "SET_CURRENTSERIE_SUCCESS" = "@CurrentSerie/SET_CURRENTSERIE_SUCCESS",
    "SET_CURRENTSERIE_FAILURE" = "@CurrentSerie/GET_CURRENTSERIE_FAILURE",

    "SET_CURRENTSERIE_IMAGES_REQUEST" = "@CurrentSerie/SET_CURRENTSERIE_IMAGES_REQUEST",
    "SET_CURRENTSERIE_IMAGES_SUCCESS" = "@CurrentSerie/SET_CURRENTSERIE_IMAGES_SUCCESS",
    "SET_CURRENTSERIE_IMAGES_FAILURE" = "@CurrentSerie/GET_CURRENTSERIE_IMAGES_FAILURE",

    "SET_CURRENTSERIE_CHAPTERS_REQUEST" = "@CurrentSerie/SET_CURRENTSERIE_CHAPTERS_REQUEST",
    "SET_CURRENTSERIE_CHAPTERS_SUCCESS" = "@CurrentSerie/SET_CURRENTSERIE_CHAPTERS_SUCCESS",
    "SET_CURRENTSERIE_CHAPTERS_FAILURE" = "@CurrentSerie/GET_CURRENTSERIE_CHAPTERS_FAILURE",
}

export type Payload = {
    payload: CurrentSerie
    type: string
}

export type Chapter = {
    chapter_name: string
    id_chapter: number
    id_serie: number
    name: string
    number: string
    officialLink: string
    officialSerieLink: string
    predictionDate: string
    predictionDateToCalc: string
    releases: {
        [key: string]: {
            id_release: number
            link: string
            scanlators: [
                {
                    id_scanlator: number
                    name: string
                    link: string
                    views: number
                }
            ]
        }
    }
    seasonAnimeFinished: string
    serieFirstChapter: string
}

export type CurrentSerie = {
    chapter_number: string
    id_chapter: number
    id_serie: number
    id_release: number
    series_name: string
    cover: string
    cover_avif: string
    cover_thumb: string
    cover_thumb_avif: string
    label: string
    name: string
    score: number
    value: string
    chapters: Chapter[]
    images: {
        avif: string
        legacy: string
    }[]
}

export type CurrentSerieState = {
    readonly data: CurrentSerie | null
    readonly loading: boolean
    readonly error: boolean
}
