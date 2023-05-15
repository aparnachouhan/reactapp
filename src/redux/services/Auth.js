import API from "../../config/API"
import DataService from "../../config/Dataservice"
import { handleError, setHeadersWithAccessToken } from "./Comman"


export const LoginHandler = async (data) => {
    let d = await DataService.post(API.Auth.Login, data)
    console.log(d)
    return await DataService.post(API.Auth.Login, data).then((res) => {
        return res.data
    }).catch((err) => {
        handleError(err.response.data)
    })

}