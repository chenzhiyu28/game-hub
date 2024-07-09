import axios from "axios";


export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "d5813d3966db44e9b6e25b42b7ba36ad"
    }
})
