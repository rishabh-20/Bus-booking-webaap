import React,{useState} from "react"
import '../Style/AdminSignup.css'
import axios from "axios"
const AdminSignup = () => {
    let [name,setname]=useState("")
    let [email,setemail]=useState("")
    let [phone,setphone]=useState("")
    let [gst_number,setgst_number]=useState("")
    let [travels_name,settravels_name]=useState("")
    let [password,setpassword]=useState("")

    let data={
      name,email,password,phone,gst_number,travels_name
    }

    function createAdmin(e){
      e.preventDefault()
      axios.post('http://localhost:8080/api/admins',data)
      .then((res)=>{
         alert("Data Added Succesfully")
         console.log(res);
      })
      .catch((err)=>{
         alert("Invalid Data")
         console.log(err);
      })
    }

    return ( 
        <div className="signup">
           <form onSubmit={createAdmin} action="">
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Enter the Name'  required value={name} onChange={(e)=>{setname(e.target.value)}}/>
        <label htmlFor="">Email</label>
        <input type="text" placeholder='Enter the Email'  required value={email} onChange={(e)=>{setemail(e.target.value)}}/>
        <label htmlFor="">Phone</label>
        <input type="text" placeholder='Enter the Phone'  required value={phone} onChange={(e)=>{setphone(e.target.value)}}/>
        <label htmlFor="">Gst_Number</label>
        <input type="text" placeholder='Enter the Gst_Number'  required value={gst_number} onChange={(e)=>{setgst_number(e.target.value)}}/>
        <label htmlFor="">Travels_Name</label>
        <input type="text" placeholder='Enter the Travels_name'  required value={travels_name} onChange={(e)=>{settravels_name(e.target.value)}}/>
        <label htmlFor="">Password</label>
        <input type="text" placeholder='Enter the Password'  required value={password} onChange={(e)=>{setpassword(e.target.value)}}/>

        <button className="btn btn-danger">Register </button>
      </form>

        </div>
     );
}
 
export default AdminSignup;