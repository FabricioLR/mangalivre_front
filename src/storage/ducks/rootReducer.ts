import { combineReducers } from "redux"

import webtoon from "./webtoon/index"
import manga from "./manga/index"
import manhua from "./manhua/index"
import currentSerie from "./currentSerie/index"

export default combineReducers({
    manhua, manga, webtoon, currentSerie
})