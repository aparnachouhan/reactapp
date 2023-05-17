import axios from 'axios'

let baseURL = 'https://81a5-2405-201-300b-f6b-5836-e3ae-70c8-dbd0.ngrok-free.app/'

const DataService = axios.create({
    baseURL: baseURL
})

export default DataService;
