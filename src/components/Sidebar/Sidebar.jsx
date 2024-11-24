import React, { useState } from "react";
import "./Sidebar.css";
import { Link, NavLink } from "react-router-dom";
import { IoMdClose } from "react-icons/io";


const Sidebar = ({ toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="row bg-white text-start ">
        {/* Close button for screens up to 767px */}
        <div className="col-12 d-md-none text-end mt-2">
          <button className="btn close-btn" onClick={toggleSidebar}>
            <IoMdClose /> {/* Bootstrap close icon */}
          </button>
        </div>

        <div className="col-md-12 mt-3 mb-3">
          <h2 className="text-center">
            <span className="mainColor">Dash</span>Stack
          </h2>
          <hr />
        </div>

        <div className="col-md-12 d-flex gap-2 mt-1 mb-1">
          {/* Sidebar Image */}
          <img
            src="src/Images/dash.png"
            className={`sidebarstyle ${isHovered ? "d-block" : "d-none"}`}
            alt=""
          />

          {/* NavLink */}
          <NavLink
            className="navlink"
            to="/dashboard"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
            onMouseEnter={() => setIsHovered(true)} // Set hover state
            onMouseLeave={() => setIsHovered(false)} // Reset hover state
          >
            <p className="p-2 hovermaincolor">
              <img className=" " src="src/Images/dashboard.png" alt="" />{" "}
              Dashboard
            </p>
          </NavLink>
        </div>
        <div className="col-md-12 d-flex gap-2 mt-1 mb-1">
          {/* Sidebar Image */}
          <img src="src/Images/dash.png" className="sidebarstyle" alt="" />

          {/* NavLink */}
          <NavLink
            className="navlink"
            to="/personaldetail"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
          >
            <p className="p-2 hovermaincolor">
              <img className=" " src="src/Images/personalcard.png" alt="" />{" "}
              Pesonal Details
            </p>
          </NavLink>
        </div>
        <div className="col-md-12 d-flex gap-2 mt-1 mb-1">
          {/* Sidebar Image */}
          <img src="src/Images/dash.png" className="sidebarstyle" alt="" />

          {/* NavLink */}
          <NavLink
            className="navlink"
            to="/serviceandcomplaint"
            style={{
              textDecoration: "none",
              color: "",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
          >
            <p className="p-2 hovermaincolor">
              <img className=" " src="src/Images/servicecomplain.png" alt="" />{" "}
              Service And Complaint
            </p>
          </NavLink>
        </div>
        <div className=" col-md-12  d-flex gap-2 mt-1 mb-1">
          <img src="src/Images/dash.png" alt="" />
          <NavLink
            className="navlink"
            to="/eventparticipation"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <img src="src/Images/event.png" alt="" /> Event Participation
            </p>
          </NavLink>
        </div>

        <div className=" col-md-12 d-flex  mt-1 mb-1">
          <img src="src/Images/dash.png" alt="" />

          <NavLink
            className="navlink"
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <div className="dropdown-container hovermaincolor">
              <button className="dropdown-btn bg-white ">
                <img
                  src="src/Images/comunity.png"
                  alt="icon"
                  className="dropdown-icon"
                />
                Community
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                <Link className="dropdown-item">
                  <p>Access Forums</p>
                </Link>
                <div className="">
                  <Link to={"/pollapp"} className="dropdown-item">
                    <p>Polls</p>
                  </Link>
                </div>
                <Link to={"/"} className="dropdown-item">
                  <p>Communities Discussion</p>
                </Link>
              </div>
            </div>
          </NavLink>
        </div>

        <div className=" col-md-12 d-flex  mt-1 mb-1">
          <img src="src/Images/dash.png" alt="" />

          <NavLink
            className="navlink"
            to="/"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <div className="dropdown-container hovermaincolor">
              <button className="dropdown-btn bg-white ">
                <img
                  src="src/Images/wallet.png"
                  alt="icon"
                  className="dropdown-icon"
                />
                Payment Portal
                <span className="dropdown-arrow">▼</span>
              </button>
              <div className="dropdown-menu">
                <div className="">
                  <Link to={"/"} className="dropdown-item">
                    <p>Maintanance Invoice</p>
                  </Link>
                </div>
                <div className="">
                  <Link to={"/"} className="dropdown-item">
                    <p>Other Income Invoice</p>
                  </Link>
                </div>
              </div>
            </div>
          </NavLink>
        </div>
        <div className=" col-md-12  d-flex gap-2 mt-1 mb-1">
          <img src="src/Images/dash.png" alt="" />
          <NavLink
            className="navlink"
            to="/securityprotocols"
            style={{
              textDecoration: "none",
              color: "black",
              height: "52px",
              width: "245px",
              fontStyle: "poppins",
              fontWeight: "500",
            }}
            onClick={toggleSidebar}
          >
            {/* Close sidebar on link click in small screens */}
            <p className=" p-2 hovermaincolor">
              <img src="src/Images/securityprotocol.png" alt="" /> Security
              Protocols
            </p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
