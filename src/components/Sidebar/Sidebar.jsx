

import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { FaTh } from 'react-icons/fa';

const Sidebar = ({ toggleSidebar }) => {
  return (
    <>
      <div className="row bg-white ">
        {/* Close button for screens up to 767px */}
        <div className="col-12 d-md-none text-end mt-2">
          <button className="btn close-btn" onClick={toggleSidebar}>
            <IoMdClose /> {/* Bootstrap close icon */}
          </button>
        </div>

        <div className="col-md-12 mt-3 mb-3">
          <h2 className="text-center"><span className="mainColor">Dash</span>Stack</h2>
          <hr />
        </div>

        <div className="col-md-12 mt-1 mb-1">
          <NavLink to="/" onClick={toggleSidebar}> {/* Close sidebar on link click in small screens */}
            <p className="text-center">Dashboard</p>
          </NavLink>
        </div>
    
        <div className=" col-md-12  mt-1 mb-1">

<NavLink
            className="navlink"
            to="/pollapp"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <FaTh className="" /> Polls
            </p>
          </NavLink>

</div>



<div className=" col-md-12  mt-1 mb-1">

<NavLink
            className="navlink"
            to="/eventparticipation"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <FaTh className="" /> Event Participation
            </p>
          </NavLink>

</div>

<div className=" col-md-12  mt-1 mb-1">

<NavLink
            className="navlink"
            to="/securityprotocols"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <FaTh className="" /> Security Protocols
            </p>
          </NavLink>

</div>



      </div>
    </>
  );
};

export default Sidebar;

