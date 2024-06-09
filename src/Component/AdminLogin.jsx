import { useState } from 'react';
import '../Style/AdminLogin.css'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdminLogin = () => {
    let [email,setusername]=useState("")
    let[password,setpassword]=useState("")

    let navigate=useNavigate()

   function verify(e){
    e.preventDefault()
    axios.post(`http://localhost:8080/api/admins/verify-by-email?email=${email}&password=${password}`)
    .then((res)=>{
        navigate('/adminhomepage')
        alert("Login Succesfully")
        console.log(res.data.data);
        localStorage.setItem("Admin",JSON.stringify(res.data.data))
    })
    .catch((err)=>{
        alert("Login Failed")
        console.log(err);
    })
   }
    return ( 
        <div className="adminlogin">
            <form onSubmit={verify} action="">
                <label htmlFor="">UserName</label>
                <input type="text" value={email} onChange={(e)=>{setusername(e.target.value)}} placeholder="Enter The UserName" required />

                <label htmlFor="">Password</label>
                <input type="password"value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder="Enter The Password" required />

                <button className="btn btn-primary">Login</button>
            </form>

            <p>Are You A New Admin ? <Link to="/adminsignup" >Register Here</Link></p>
        </div>
     );
}
 
export default AdminLogin;