import { useNavigate } from "react-router-dom"
import style from "./header.module.css"

function Header(){
    const navigate = useNavigate()

    return (
        <div id={style.header}>
            <div id={style.logo} onClick={() => navigate("/")}>
                <p>Home</p>
            </div>
        </div>
    )
}

export default Header