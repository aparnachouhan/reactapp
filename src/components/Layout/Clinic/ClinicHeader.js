import React from 'react'
import Index from '../..';
import { useDispatch } from 'react-redux';
import { LogoutAction } from '../../../redux/Auth/AuthAction';
import { useNavigate } from 'react-router-dom';


const ClinicHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();




    return (
        <>

            <Index.Card className="bg-gray-50 px-12 py-8 rounded-none flex flex-row items-center justify-between ">

                <Index.Card className='bg-gray-50 shadow-none'>
                    <Index.Typography className='text-4xl font-bold'>
                        Clinic Name
                    </Index.Typography>
                </Index.Card>

                <Index.Card>

                    <Index.Button onClick={() => { dispatch(LogoutAction(navigate)) }} className='bg-red-500 rounded-none'>
                        Logout
                    </Index.Button>

                </Index.Card>


            </Index.Card>

        </>
    )
}



export default ClinicHeader;
