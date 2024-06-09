import { useState } from "react";
import "../Style/addbus.css"
import axios from "axios";
const AddBus = () => {

    let [name, setName] = useState("");
    let [busNumber, setBusNumber] = useState("");
    let [numberOfSeats, setNumberofSeats] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");
    let [dateOfDeparture, setDateofDeparture] = useState("");

    let data={
        name,busNumber,numberOfSeats,from,to,dateOfDeparture
    }
    let admin=JSON.parse(localStorage.getItem("Admin"))
    console.log(admin);
    console.log(typeof(admin));

    function addbus(e) {
      e.preventDefault()
        axios.post(`http://localhost:8080/api/bus/${admin.id}`,data)
        .then((res)=>{
            alert("Bus Added")
            console.log(res);
        })
        .catch((err)=>{
            console.log(err);
            alert("Fail to add Bus");
        })
    }
    return ( 
        <div className="addbus">
        <form action="">
            <label htmlFor="">
                Name
            </label>
            <input type="text" required value={name} onChange={(e)=>{setName(e.target.value)}} placeholder="enter name" />
            <label htmlFor="">
                Bus Number
            </label>
            <input type="text" required value={busNumber} onChange={(e)=>{setBusNumber(e.target.value)}} placeholder="enter name" />
            <label htmlFor="">
                Number Of Seats
            </label>
            <input type="text" required value={numberOfSeats} onChange={(e)=>{setNumberofSeats(e.target.value)}} placeholder="enter name" />
            <label htmlFor="">
                From Location
            </label>
            <input type="text" required value={from} onChange={(e)=>{setFrom(e.target.value)}} placeholder="enter name" />
            <label htmlFor="">
                To Location
            </label>
            <input type="text" value={to} required onChange={(e)=>{setTo(e.target.value)}} placeholder="enter name" />
            <label htmlFor="">
                Date Of Departure
            </label>
            <input type="date" value={dateOfDeparture} required onChange={(e)=>{setDateofDeparture(e.target.value)}} placeholder="enter name" />
            <button onClick={addbus} id="addbusbutton">Add Bus</button>
        </form>
    </div>
     );
}
 
export default AddBus;