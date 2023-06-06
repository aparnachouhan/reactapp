import React from 'react'
import Index from '../..'
import { Link } from 'react-router-dom'


const SideBar = () => {

    const links = [
        {
            title: "Dashboard",
            icon: <Index.DashboardOutlined />,
            navigate: '/clinic/dashboard',
        },
        {
            title: "Staff",
            icon: <Index.PeopleAltOutlined />,
            navigate: '/clinic/staff/list',
        },
        {
            title: "Doctors",
            icon: <Index.MedicalServicesOutlined />,
            navigate: '/clinic/doctors',
        }
    ]

    return (
        <>
            <Index.Card className="  left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xxl ">
                <div className="mb-2 p-4">
                    <Index.Typography variant="h5" color="blue-gray">

                    </Index.Typography>
                </div>
                <Index.List>
                    {links.map((link) => {
                        return (
                            <> 
                            <Link to={link.navigate}>
                                <Index.ListItem>
                                    <Index.ListItemPrefix>
                                        {/* <Index.DashboardIcon /> */}
                                        {link.icon}
                                    </Index.ListItemPrefix>
                                    {link.title}
                                </Index.ListItem>
                            </Link>
                            </>
                        )
                    })}
                </Index.List>
            </Index.Card></>
    )
}

export default SideBar;
