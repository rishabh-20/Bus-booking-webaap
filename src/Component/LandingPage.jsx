import { Link } from "react-router-dom";
import '../Style/LandingPage.css'
const LandingPage = () => {
    return ( 
        <div className="landingpage">
            <Link to="/adminlogin">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3m72Cln79G8HdSISSVbfnZfTD2POXmGWyEA&s" alt="" />
                <h2>Admin</h2>
            </Link>
           <Link to="/userlogin">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLEkUcrLOrBH7V2dmjv_2RQ8kvYcl3hLoGNyiEcYoaLQ&s" alt="" />
             <h2>User</h2>
           </Link>
        </div>
     );
}
 
export default LandingPage;
