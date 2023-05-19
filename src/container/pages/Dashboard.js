import React from 'react'
import DoctorsHeader from '../../components/Layout/Doctors/DoctorsHeader';
import ClinicLayout from '../../components/Layout/Clinic/ClinicLayout';
import StatsCard from '../../components/comman/StatsCard/StatsCard';
import Index from '../../components';
import { useSelector } from 'react-redux';
const Dashboard = () => {

    const data = useSelector(state=>state.clinic.DashboardState)
    return <>
    <ClinicLayout>
<Index.Card className='grid grid-cols-4'>
    {data.map((item)=>{
    return(
        <StatsCard state={item}/>
    )
})}
</Index.Card>
    </ClinicLayout>
    </>;
}


export default Dashboard;
