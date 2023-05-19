import React from 'react'
import Index from '../..'
import { Link } from 'react-router-dom'


const SideBar = () => {

    const links = [
        {
            title: "Dashboard",
            icon:<Index.DashboardOutlined />,
            navigate: '',
        },
        {
            title: "Staff",
            icon: <Index.PeopleAltOutlined/>,
            navigate: '',
        },
        {
            title: "Doctors",
            icon: <Index.MasksOutlined/>,
            navigate: '/',
        }
    ]

    return (
        <>
            <Index.Card className="  left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xxl ">
                <div className="mb-2 p-4">
                    <Index.Typography variant="h5" color="blue-gray">
                        {/* Sidebar */}
                    </Index.Typography>
                </div>
                <Index.List>
                    {links.map((link) => {
                        return (
                            <>
                                <Index.ListItem>
                                    <Index.ListItemPrefix>
                                        {/* <Index.DashboardIcon /> */}

                                        {link.icon}
                                        {/* <PresentationChartBarIcon className="h-5 w-5" /> */}
                                    </Index.ListItemPrefix>
                                    <Link to={link.navigate}>{link.title}</Link>
                                </Index.ListItem>
                            </>
                        )
                    })}
                </Index.List>
            </Index.Card></>
    )
}

export default SideBar;
