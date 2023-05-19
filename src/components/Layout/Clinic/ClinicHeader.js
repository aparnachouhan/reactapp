import React from 'react'
import Index from '../..';


const ClinicHeader = () => {
    return (
        <>

            <Index.Card className="bg-gray-50 px-12 py-8 rounded-none flex flex-row items-center justify-between ">

                <Index.Card className='bg-gray-50 shadow-none'>
                    <Index.Typography className='text-4xl font-bold'>
                        Clinic Name
                    </Index.Typography>
                </Index.Card>

                <Index.Card>

                    <Index.Button className='bg-red-500 rounded-none'>
                        Logout
                    </Index.Button>

                </Index.Card>


            </Index.Card>

        </>
    )
}



export default ClinicHeader;
