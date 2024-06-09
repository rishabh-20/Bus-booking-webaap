import { useState } from 'react';
import '../Style/LoginUser.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginUser = () => {
    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")

    let navigate=useNavigate()

    function verifyUser(e){
        e.preventDefault()
        axios.post(`http://localhost:8080/api/users/verify-by-email?email=${email}&password=${password}`)
        .then((res)=>{
            navigate=('/userhomepage')
            alert("Verify Succesfully")
            console.log(res);
        })
        .catch((err)=>{
            alert("Failed To Verify")
            console.log(err);
        })
    }
    return ( 
        <div className="userlogin">
             <form onSubmit={verifyUser} action="">
             <label htmlFor="email">Email</label>
                <input
                    type="email"
                    placeholder="Enter Your Email"
                    required
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    placeholder="Enter Your Password"
                    required
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                />

                <button type="submit" className="btn btn-primary">Login</button>

            </form>

            <p>Are You A New User? <Link to='/usersignup'>Register Here </Link></p>
        </div>
     );
}
 
export default LoginUser;