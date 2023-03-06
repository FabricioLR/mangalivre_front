import { Serie } from "../typesTemplate"

export enum WebtoonTypes {
    "GET_WEBTOONS_REQUEST" = "@webtoon/GET_WEBTOONS_REQUEST",
    "GET_WEBTOONS_SUCCESS" = "@webtoon/GET_WEBTOONS_SUCCESS",
    "GET_WEBTOONS_FAILURE" = "@webtoon/GET_WEBTOONS_FAILURE",
}

export type Webtoon = {
    dia: Serie[]
    semana: Serie[]
    mês: Serie[]
    ano: Serie[]
}

export type WebtoonState = {
    readonly data: Webtoon | null
    readonly loading: boolean
    readonly error: boolean
}
