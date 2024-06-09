import AdminDashBoard from "./AdminDashBoard";
import AdminNavbar from "./AdminNavbar";
import { Route,Routes } from "react-router-dom";
import React from "react";
import AddBus from "./AddBus";
import ViewBus from "./ViewBus";
import EditBus from "./EditBus";

const AdminHomePage = () => {
    return ( 
        <div>
            <AdminNavbar/>
            <Routes>
                <Route path='/' element={<AdminDashBoard/>}></Route>
                <Route path="/addbus" element={<AddBus/>}></Route>
                <Route path="/viewbus" element={<ViewBus/>}/>
                <Route path="/editbus/:id" element={<EditBus/>}/>
            </Routes>
        </div>
     );
}
 
export default AdminHomePage;