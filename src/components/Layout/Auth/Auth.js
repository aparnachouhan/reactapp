import React from 'react'
import AuthHeader from './AuthHeader';


const AuthLayout = (props) =>{
    return(
        <>
        <div className=''>
            <div className=''>
                <AuthHeader/>
            </div>
            <div className=''>
                {props.children}
            </div>
        </div>
        </>
    )
}

export default AuthLayout;
