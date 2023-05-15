import axios from 'axios'

let baseURL = 'https://dummyjson.com'

const DataService = axios.create({
    baseURL: baseURL
})

export default DataService;
