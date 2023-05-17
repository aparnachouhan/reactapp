import React from "react";
import Index from '../../index'
import SideBar from "../../comman/Sidebar/SideBar";
import ClinicHeader from "./ClinicHeader";


const ClinicLayout = (props) => {
    return (
        <>
            <Index.Card className="w-full flex flex-col h-screen">
                <Index.Card>
                    <ClinicHeader />
                </Index.Card>
                <Index.Card className="flex flex-row">
                    <Index.Card className="w-30">
                        <SideBar />
                    </Index.Card>
                    <Index.Card className="w-70">
                        {props.children}
                    </Index.Card>
                </Index.Card>
            </Index.Card>
        </>
    )
}

export default ClinicLayout;
