import { configureStore, Store } from "@reduxjs/toolkit"
import createMiddleware from "redux-saga"
import { CurrentSerieState } from "./ducks/currentSerie/types"
import { MangaState } from "./ducks/manga/types"
import { ManhuaState } from "./ducks/manhua/types"

import rootReducer from "./ducks/rootReducer"
import rootSaga from "./ducks/rootSaga"
import { WebtoonState } from "./ducks/webtoon/types"

const sagaMiddleware = createMiddleware()

export type ApplicationState = {
    manga: MangaState,
    manhua: ManhuaState,
    webtoon: WebtoonState,
    currentSerie: CurrentSerieState
}

const store: Store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({ thunk: false }).prepend(sagaMiddleware);
    }
})

sagaMiddleware.run(rootSaga)

export default store

