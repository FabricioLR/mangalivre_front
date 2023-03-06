import { useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import { ApplicationState } from "../../storage"
import { Manga, MangaTypes } from "../../storage/ducks/manga/types"
import { ManhuaTypes } from "../../storage/ducks/manhua/types"
import { WebtoonTypes } from "../../storage/ducks/webtoon/types"
import style from "./home.module.css"

function Home(){
    const State = useSelector(state => state) as ApplicationState
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [time, setTime] = useState<"dia" | "semana" | "mês" | "ano">("semana")
    const [serieType, setSerieType] = useState<"manga" | "manhua" | "webtoon">("manga")

    return(
        <div id={style.home}>
            <Header/>
            <div id={style.serieTypes}>
                <div className={style.serieType} onClick={() => {dispatch({ type: MangaTypes.GET_MANGAS_REQUEST }); setSerieType("manga")}}>
                    <p>Manga</p>
                </div>
                <div className={style.serieType} onClick={() => {dispatch({ type: ManhuaTypes.GET_MANHUAS_REQUEST }); setSerieType("manhua")}}>
                    <p>Manhua</p>
                </div>
                <div className={style.serieType} onClick={() => {dispatch({ type: WebtoonTypes.GET_WEBTOONS_REQUEST }); setSerieType("webtoon")}}>
                    <p>Webtoon</p>
                </div>
            </div>
            <div id={style.serieOptions}>
                <div id={style.serieTime}>
                    <select defaultValue={"semana"} onChange={(e) => setTime(e.target.value as any)}>
                        <option value="dia">Mais lidos do dia</option>
                        <option value="semana">Mais lidos da semana</option>
                        <option value="mês">Mais lidos do mês</option>
                        <option value="ano">Mais lidos do ano</option>
                    </select>
                </div>
                <div id={style.series}>
                {
                    State[serieType].data ?
                    (State[serieType].data as Manga)[time].map(serie => (
                        <div className={style.serie}>
                            <p>{serie.chapter_number}</p>
                            <img src={serie.series_image_thumb} onClick={() => {
                                navigate("/reader?series_name=" + serie.series_name + "&chapter_number=" + serie.chapter_number + "&id_release=" + serie.id_release + "&id_serie=" + serie.id_serie)
                            }}/>
                            <p>{serie.series_name}</p>
                        </div>
                    ))
                    :
                    null
                }
                </div>
            </div>
        </div>
    )
}

export default Home