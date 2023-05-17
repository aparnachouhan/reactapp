import axios from 'axios'
import DataService from '../../config/Dataservice';
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
    for (const key in error) {
        if (Object.hasOwnProperty.call(error, key)) {
            const element = error["response"];
            return { message: element.data.message, status: element.status };
        }
    }
};


export const ResetPassword = async (data) => {
    return await DataService.post('', data).then((res) => {
        return res
    }).catch((err) => {
        return handleError(err)
    })
}


export { handleError, setGetHeadersWithAccessToken, setHeadersWithAccessToken, setHeadersWithContentType2, setHeadersWithContentType, setHeadersWithDeleteAccessToken } 