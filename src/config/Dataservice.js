import axios from 'axios'

let baseURL = 'https://183e-49-43-40-217.ngrok-free.app/'

const DataService = axios.create({
    baseURL: baseURL
})

export default DataService;
