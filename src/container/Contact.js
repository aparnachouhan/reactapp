import React, { useState } from "react";

const Contact = (props) => {

    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [cfpassword, setcfpassword] = useState();

    const Login = () => {
        console.log(email,password,cfpassword , props)
    }

    return (
        <>
            <div class="flex flex-col md:w-1/3 ml-auto mr-auto p-12  space-x-8 space-y-4 shadow-xl" >
                <h1 className="text-2xl font-bold">Sign Up</h1>
                <p>Please fill in this form to create an account. {props.name.data}</p>
                <hr />
                <label for="email"><b>Email</b></label>
                <input onChange={(event) => { setemail(event.target.value) }} className="p-4 bg-gray-100 rounded" type="text" placeholder="Enter Email" name="email" required />
                <label for="psw"><b>Password</b></label>
                <input onChange={(event) => { setpassword(event.target.value) }} className="p-4 bg-gray-100 rounded" type="password" placeholder="Enter Password" name="psw" required />
                <label for="psw-repeat"><b>Repeat Password</b></label>
                <input onChange={(event) => { setcfpassword(event.target.value) }} className="p-4 bg-gray-100 rounded" type="password" placeholder="Repeat Password" name="psw-repeat" required />
                <label>
                    <input type="checkbox" checked="checked" name="remember" style={{ marginTop: '20px' }} /> Remember me
                </label>
                <p>By creating an account you agree to our <a href="#" >Terms & Privacy</a>.</p>
                <div class="clearfix">
                    <button onClick={Login} type="submit" className="p-4 bg-red-500 text-white text-bold" >Sign Up</button>
                </div>
            </div>
        </>
    )
}


export default Contact;
