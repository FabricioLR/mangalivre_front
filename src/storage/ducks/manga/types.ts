import { Serie } from "../typesTemplate"

export enum MangaTypes {
    "GET_MANGAS_REQUEST" = "@manga/GET_MANGAS_REQUEST",
    "GET_MANGAS_SUCCESS" = "@manga/GET_MANGAS_SUCCESS",
    "GET_MANGAS_FAILURE" = "@manga/GET_MANGAS_FAILURE",
}

export type Manga = {
    dia: Serie[]
    semana: Serie[]
    mês: Serie[]
    ano: Serie[]
}

export type MangaState = {
    readonly data: Manga | null
    readonly loading: boolean
    readonly error: boolean
}