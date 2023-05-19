import React from "react";
import Index from '../../index'
import SideBar from "../../comman/Sidebar/SideBar";
import ClinicHeader from "./ClinicHeader";
import StatsCard from "../../comman/StatsCard/StatsCard";


const ClinicLayout = ({children}) => {
    return (
        <>
            <Index.Card className="flex flex-col h-screen">
                <Index.Card>
                    <ClinicHeader />
                </Index.Card>
                <Index.Card className="flex  flex-row ">
                    <Index.Card className="w-[23vw]">
                        <SideBar />
                    </Index.Card>
                    <Index.Card className="w-[77vw] shadow-none">
                        {children}
                    </Index.Card>
                </Index.Card>
            </Index.Card>
        </>
    )
}

export default ClinicLayout;
