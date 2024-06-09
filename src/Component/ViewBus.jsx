import axios from "axios";
import { useEffect, useState } from "react";
import '../Style/ViewBus.css'
import { useNavigate } from "react-router-dom";

const ViewBus = () => {

    let navigate=useNavigate();

    let[bus,setbus]=useState([])
    useEffect(()=>{
        axios.get(`http://localhost:8080/api/bus`)
        .then((res)=>{
            console.log(res.data);
            setbus(res.data.data)
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])

    function editNavigate(id){
        navigate(`/adminhomepage/editbus/${id}`)

    }

    function removeBus(id,bus_no){

        axios.delete(`http://localhost:8080/api/bus/${id}`)
        .then((res)=>{
            alert(`Bus Number ${bus_no} has been Removed from the list`)
            console.log(res);
        })
        .catch((err)=>{
            alert("Cannot Remove This Item")
            console.log(err);
        })

       window.location.assign("/adminhomepage/viewbus")
    }
    return ( 
        <div className="ViewBus">
            {bus.map((item)=>{
                return(
                    <div className="bus_details">
                        <h4>{item.name}</h4>
                        <i>Seats:<b> {item.numberofSeats}</b></i>
                        <p>From: {item.from}</p>
                        <p>To: {item.to}</p>
                        <p>Date: {item.dateOfDeparture}</p>
                        <span>Bus Number: {item.busNumber}</span>
                        <button className="btn btn-warning" onClick={()=>{editNavigate(item.id)}}>Edit</button>
                        <button className="btn btn-warning" onClick={()=>{removeBus(item.id,item.bus_number)}}>Delete</button>

                    </div>
                )
            })}
        </div>
     );
}
 
export default ViewBus;