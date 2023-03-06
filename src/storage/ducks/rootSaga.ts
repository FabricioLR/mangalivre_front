import { all, takeLatest } from "redux-saga/effects"
import { GetChapters, GetImages, GetSerie } from "./currentSerie/saga"
import { CurrentSerieTypes } from "./currentSerie/types"
import { GetMangas } from "./manga/saga"
import { MangaTypes } from "./manga/types"
import { GetManhuas } from "./manhua/saga"
import { ManhuaTypes } from "./manhua/types"
import { GetWebtoons } from "./webtoon/saga"
import { WebtoonTypes } from "./webtoon/types"

export default function* rootSaga(){
    yield all([
        takeLatest(MangaTypes.GET_MANGAS_REQUEST, GetMangas),
        takeLatest(ManhuaTypes.GET_MANHUAS_REQUEST, GetManhuas),
        takeLatest(WebtoonTypes.GET_WEBTOONS_REQUEST, GetWebtoons),
        takeLatest(CurrentSerieTypes.SET_CURRENTSERIE_REQUEST, GetSerie),
        takeLatest(CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_REQUEST, GetImages),
        takeLatest(CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_REQUEST, GetChapters),
    ])
}