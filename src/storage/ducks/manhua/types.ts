import { Serie } from "../typesTemplate"

export enum ManhuaTypes {
    "GET_MANHUAS_REQUEST" = "@manhua/GET_MANHUAS_REQUEST",
    "GET_MANHUAS_SUCCESS" = "@manhua/GET_MANHUAS_SUCCESS",
    "GET_MANHUAS_FAILURE" = "@manhua/GET_MANHUAS_FAILURE",
}

export type Manhua = {
    dia: Serie[]
    semana: Serie[]
    mês: Serie[]
    ano: Serie[]
}

export type ManhuaState = {
    readonly data: Manhua | null
    readonly loading: boolean
    readonly error: boolean
}