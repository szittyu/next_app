import axios from "axios";

export function requestGetCharacter() {
    return axios.request({
        method: "get",
        url: "https://rickandmortyapi.com/api/character"
    })
}