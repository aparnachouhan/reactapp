import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/Auth/AuthAction";
import { useNavigate } from "react-router-dom";
import AuthLayout from "../../components/Layout/Auth/Auth";
import Button from "../../components/comman/Button/Button";
const Login = (props) => {

    const [authDetails, setAuthDetails] = React.useState()
    // const [username, setusername] = React.useState()
    // const [password, setpassword] = React.useState()


    const dispatch = useDispatch();
    const navigate = useNavigate()

    const User = useSelector(state => state.Clinic.user)

    const onChange = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setAuthDetails({ ...authDetails, [e.target.name]: e.target.value })
    }

    const LoginButton = () => {
        dispatch(LoginAction(authDetails, navigate))
    }



    // React.useEffect(() => {

    //     if (User.token) {
    //         navigate('/dashboard')
    //     }

    // }, [])

    return (
        <>
            <AuthLayout>
                <div class="flex flex-col md:w-1/3 ml-auto mr-auto p-12   space-x-8 space-y-4 shadow-xl" >
                    <div className="ml-auto mr-auto">
                        <img className="w-32" src='/images/logo.png' />
                    </div>
                    <hr />
                    <label for="email"><b>Email</b></label>
                    <input onChange={onChange} name='email' className="p-4 bg-gray-100 rounded" type="text" placeholder="Enter Email" required />
                    <label for="psw"><b>Password</b></label>
                    <input onChange={onChange} name='password' className="p-4 bg-gray-100 rounded" type="password" placeholder="Enter Password" required />
                    {/* <label for="psw-repeat"><b>Repeat Password</b></label>
                <input onChange={(event) => { setcfpassword(event.target.value) }} className="p-4 bg-gray-100 rounded" type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}
                    <label>
                        <input type="checkbox" name="remember" style={{ marginTop: '20px' }} /> Remember me
                    </label>
                    <p>If facing any issue please contact to you're clinic<a href="#" ></a>.</p>
                    <div class="clearfix w-full">
                        <Button text="Login" background="red-500" onClick={LoginButton} />
                        {/* <button onClick={LoginButton} type="submit" className="p-4 hover:bg-black w-40 bg-red-500 text-white text-bold" >Login</button> */}
                    </div>
                </div>
            </AuthLayout>
        </>
    )
}


export default Login;
