import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import '../Style/EditBus.css';
const EditBus = () => {

    let [name, setName] = useState("");
    let [busNumber, setBusNumber] = useState("");
    let [numberOfSeats, setNumberofSeats] = useState("");
    let [from, setFrom] = useState("");
    let [to, setTo] = useState("");
    let [dateOfDeparture, setDateofDeparture] = useState("");

    let param=useParams();

    useEffect(()=>{
        axios.get(`http://localhost:8080/api/bus/${param.id}`)
        .then((res)=>{
            console.log(res.data.data);
            setName(res.data.data.name);
            setBusNumber(res.data.data.busNumber);
            setFrom(res.data.data.from);
            setTo(res.data.data.to);
            setNumberofSeats(res.data.data.numberOfSeats)
            setDateofDeparture(res.data.data.dateOfDeparture)
        })
    },[])

    let newBus={
        name,busNumber,numberOfSeats,from,to,dateOfDeparture
    }

    function editBus(e){
        e.preventDefault()
        axios.put(`http://localhost:8080/api/bus/${param.id}`,newBus)
        .then((res)=>{
            console.log(res);
            alert("Bus Details Have Been Edited Successfully")
        })
    }
    return ( 
        <div className="editbus">
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
            <button className="btn btn-danger" onClick={editBus}>Edit</button>
        </form>
        </div>
     );
}
 
export default EditBus;