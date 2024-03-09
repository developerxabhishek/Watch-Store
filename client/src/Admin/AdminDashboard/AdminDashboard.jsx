import "./AdminDashboard.css";
import { IoBagHandleOutline } from "react-icons/io5";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { GiHumanTarget } from "react-icons/gi";
import { CiMoneyCheck1 } from "react-icons/ci";
const AdminDashboard = () => {
  return (
  <>
    <div className="admin-dashboard">
    {/* <p style={{fontSize:"3rem" ,textAlign:"center" ,marginTop:"2rem"}}>Dashboard</p> */}
      <div className="admin-dashboard-container">
        <div className="admin-dashboard-part1">
          <div className="admin-dashboard-part1-box">
            <p>Total Revenue <CiMoneyCheck1  style={{fontSize:"3rem"}}/></p>
            <p> $67000 <span>+6.72%</span></p>
          </div>
          <div className="admin-dashboard-part1-box">
          <p>Total Customers <GiHumanTarget  style={{fontSize:"3rem"}} /></p>
          <p>3000 <span>+10.72%</span></p>
          </div>
          <div className="admin-dashboard-part1-box">
          <p>Total Orders <IoBagHandleOutline style={{fontSize:"3rem"}} /></p>
          <p>500 <span>+6.72%</span></p>
          </div>
          <div className="admin-dashboard-part1-box">
          <p>Total Products <MdOutlineProductionQuantityLimits  style={{fontSize:"3rem"}} /></p>
          <p>890 <span>+6.72%</span></p>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default AdminDashboard
