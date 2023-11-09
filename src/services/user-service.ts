import axios from "axios";
import { BASE_URL } from "../utils/system";

export function find(user: string){
    return axios.get(`${BASE_URL}${user}`)
}