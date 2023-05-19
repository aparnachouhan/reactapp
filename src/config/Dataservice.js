import axios from 'axios'

let baseURL = 'http://sagar.pythonanywhere.com/'

const DataService = axios.create({
    baseURL: baseURL
})

export default DataService;
