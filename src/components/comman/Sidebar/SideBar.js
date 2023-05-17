import React from 'react'
import Index from '../..'
import { Link } from 'react-router-dom'


const SideBar = () => {

    const links = [
        {
            title: "Dashboard",
            icon: '',
            navigate: '',
        },
        {
            title: "Staff",
            icon: '',
            navigate: '',
        },
        {
            title: "Doctors",
            icon: '',
            navigate: '/',
        }
    ]

    return (
        <>
            <Index.Card className=" top-4 left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-full shadow-blue-gray-900/5">
                <div className="mb-2 p-4">
                    <Index.Typography variant="h5" color="blue-gray">
                        Sidebar
                    </Index.Typography>
                </div>
                <Index.List>
                    {links.map((link) => {
                        return (
                            <>
                                <Index.ListItem>
                                    <Index.ListItemPrefix>
                                        {/* <Index.DashboardIcon /> */}
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
