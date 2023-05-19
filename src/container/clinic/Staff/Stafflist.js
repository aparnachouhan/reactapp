import React from "react";
import Index from "../../../components";
import { GetStaffList } from "../../../redux/services/Clinic";
import DTable from "../../../components/comman/Table/Table";
import ClinicLayout from "../../../components/Layout/Clinic/ClinicLayout";
import { useSelector } from "react-redux";


const StaffList = () => {

    const [stafflist, setStaffList] = React.useState([])
    const token = useSelector(state => state.login.accessToken)

 

    React.useEffect(()=>{
        GetStaffList(token).then((res) => {
            setStaffList(res.data)
        }).catch((err) => {
        })
    },[])

    return (
        <>
            <ClinicLayout>
                <DTable title='Staff' data={stafflist} />
            </ClinicLayout>

        </>
    )
}

export default StaffList;
