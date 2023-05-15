import axios from 'axios'
const setHeadersWithAccessToken = (token) => {
    axios.defaults.headers.post["Authorization"] = `Bearer ${token}`;
};

const setHeadersWithDeleteAccessToken = (token) => {
    axios.defaults.headers.delete["Authorization"] = `Bearer ${token}`;
};

const setHeadersWithContentType = () => {
    axios.defaults.headers.post["Content-Type"] =
        "application/x-www-form-urlencoded";
};

const setHeadersWithContentType2 = () => {
    axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
};

const setGetHeadersWithAccessToken = (token) => {
    axios.defaults.headers.get["Authorization"] = `Bearer ${token}`;
};

const handleError = (error) => {
    console.log(error)
    for (const key in error) {
        if (Object.hasOwnProperty.call(error, key)) {
            const element = error["response"];
            // console.log(element,4444);
            return { message: element.data.message, status: element.status };
        }
    }
};


export { handleError, setGetHeadersWithAccessToken, setHeadersWithAccessToken, setHeadersWithContentType2, setHeadersWithContentType, setHeadersWithDeleteAccessToken } 