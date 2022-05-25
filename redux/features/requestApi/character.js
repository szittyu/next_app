import axios from "axios";

export function getAllCharacters() {
    return axios.request({
        method: "get",
        url: "https://rickandmortyapi.com/api/character"
    })
}