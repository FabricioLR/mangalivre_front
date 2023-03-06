import { useEffect } from "react"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Header from "../../components/header/Header"
import useQuery from "../../components/query"
import { ApplicationState } from "../../storage"
import { CurrentSerieTypes } from "../../storage/ducks/currentSerie/types"
import style from "./reader.module.css"

function Reader(){
    const query = useQuery()
    const dispatch = useDispatch()
    const State = useSelector(state => state) as ApplicationState
    const navigate = useNavigate()

    useEffect(() => {
        dispatch({ type: CurrentSerieTypes.SET_CURRENTSERIE_REQUEST, payload: { id_release: query.get("id_release"), series_name: query.get("series_name"), chapter_number: query.get("chapter_number") }})
        dispatch({ type: CurrentSerieTypes.SET_CURRENTSERIE_IMAGES_REQUEST, payload: { id_release: query.get("id_release")}})
    }, [query.get("id_release")])

    useEffect(() => {
        dispatch({ type: CurrentSerieTypes.SET_CURRENTSERIE_CHAPTERS_REQUEST, payload: { id_serie: query.get("id_serie") }})
    }, [query.get("id_serie")])

    return (
        <>
            {
                State.currentSerie ?
                    <div id={style.reader}>
                        <Header/>
                        <div id={style.cover}>
                            <img src={State.currentSerie.data?.cover} />
                            <p>{State.currentSerie.data?.name}</p>
                        </div>
                        <div id={style.chapters}>
                            <div onClick={() => {
                                const index_chapter = State.currentSerie.data?.chapters.findIndex(chapter => chapter.number == query.get("chapter_number")) as number
                                const id_release = State.currentSerie.data?.chapters[index_chapter + 1].releases[Object.keys(State.currentSerie.data.chapters[index_chapter + 1].releases)[0]].id_release
                                navigate("/reader?series_name=" + State.currentSerie.data?.series_name + "&chapter_number=" + String(State.currentSerie.data?.chapters[index_chapter + 1].number) + "&id_release=" + id_release + "&id_serie=" + State.currentSerie.data?.id_serie)
                            }}>
                                <p>{"<--"}</p>
                            </div>
                            <div>
                                <select value={String(query.get("id_release") + "/" + query.get("chapter_number"))} onChange={(e) => navigate("/reader?series_name=" + State.currentSerie.data?.series_name + "&chapter_number=" + e.target.value.split("/")[1] + "&id_release=" + e.target.value.split("/")[0] + "&id_serie=" + State.currentSerie.data?.id_serie)}>
                                    {
                                        State.currentSerie.data?.chapters ?
                                            State.currentSerie.data?.chapters.map(chapter => (
                                                <option value={chapter.releases[Object.keys(chapter.releases)[0]].id_release + "/" + chapter.number}>{chapter.number}</option>
                                            ))
                                        :
                                            null
                                    }
                                </select>
                            </div>
                            <div onClick={() => {
                                const index_chapter = State.currentSerie.data?.chapters.findIndex(chapter => chapter.number == query.get("chapter_number")) as number
                                const id_release = State.currentSerie.data?.chapters[index_chapter - 1].releases[Object.keys(State.currentSerie.data.chapters[index_chapter - 1].releases)[0]].id_release
                                navigate("/reader?series_name=" + State.currentSerie.data?.series_name + "&chapter_number=" + String(State.currentSerie.data?.chapters[index_chapter - 1].number) + "&id_release=" + id_release + "&id_serie=" + State.currentSerie.data?.id_serie)
                            }}>
                                <p>{"-->"}</p>
                            </div>
                        </div>
                        <div id={style.images}>
                            {
                                State.currentSerie.data?.images ?
                                    State.currentSerie.data.images.map(image => (
                                        <img src={image.avif} />
                                    ))
                                :
                                    null
                            }
                        </div>
                        <div id={style.footer}>
                            <div id={style.next} onClick={() => {
                                const index_chapter = State.currentSerie.data?.chapters.findIndex(chapter => chapter.number == query.get("chapter_number")) as number
                                const id_release = State.currentSerie.data?.chapters[index_chapter - 1].releases[Object.keys(State.currentSerie.data.chapters[index_chapter - 1].releases)[0]].id_release
                                navigate("/reader?series_name=" + State.currentSerie.data?.series_name + "&chapter_number=" + String(State.currentSerie.data?.chapters[index_chapter - 1].number) + "&id_release=" + id_release + "&id_serie=" + State.currentSerie.data?.id_serie)
                                window.scrollTo({ top: 0 })
                            }}>
                                    <p>{"-->"}</p>
                                </div>
                            <div id={style.top} onClick={() => window.scrollTo({ top: 0 })}>
                                <p>Voltar ao top</p>
                            </div>
                        </div>
                    </div>
                :
                    null
            }
        </>
    )
}

export default Reader