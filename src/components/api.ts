import axios from "axios"

//"http://localhost:4000/"
//"https://mangalivre-back.onrender.com"

const api = axios.create({
    baseURL: "https://mangalivre-back.onrender.com"
})

export default api

