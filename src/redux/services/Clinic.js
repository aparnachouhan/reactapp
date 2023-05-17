import API from "../../config/API"
import DataService from "../../config/Dataservice"
import { handleError, setHeadersWithAccessToken } from "./Comman"

export const GetStaffList = async (token, navigate) => {
    setHeadersWithAccessToken(token)
    return await DataService.get(API.Clinic.Staff.GetAllStaffList).then((res) => {
        console.log(res)
        return res.data
    }).catch((err) => {
        return handleError(err)
    })
}