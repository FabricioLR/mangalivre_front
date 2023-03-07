import axios from "axios"

//"http://localhost:4000/"
//"https://mangalivre-back.onrender.com"

const api = axios.create({
    baseURL: "https://d343-2804-2098-131-2300-6813-24c3-b021-4.sa.ngrok.io"
})

export default api

