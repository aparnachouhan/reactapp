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
                    <Index.Card className="w-[23%]">
                        <SideBar />
                    </Index.Card>
                    <Index.Card className=" px-32 pt-12">
                        {props.children}
                    </Index.Card>
                </Index.Card>
            </Index.Card>
        </>
    )
}

export default ClinicLayout;
