import { Dropdown } from "react-bootstrap";
import DropDown from "./DropDown";
import '../Style/AdminNavbar.css'
import AdminHomePage from "./AdminHomePage";


const AdminNavbar = () => {
    return ( 
        <div className="navbar">
            <div className="logo">
                {/* <h1><i>Yatra</i> <sup>.in</sup></h1> */}
                <img src="https://img.freepik.com/premium-vector/travel-bus-logo-vector-illustration_600323-357.jpg" alt="" />
            </div>
            <div className="account">
                <DropDown/>
            </div>
        </div>
     );
}
 
export default AdminNavbar;