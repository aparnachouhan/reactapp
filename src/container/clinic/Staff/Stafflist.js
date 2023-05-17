import React from "react";
import Index from "../../../components";
import { GetStaffList } from "../../../redux/services/Clinic";


const StaffList = () => {


    const GetAllStafData = async () => {
        return await GetStaffList()
    }

    React.useEffect(() => {
        console.log(GetAllStafData())
    }, [])
    return (
        <>
            <Index.Card>


            </Index.Card>
        </>
    )
}

export default StaffList;
