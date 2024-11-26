
import React, { useState } from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import { IoMdClose } from "react-icons/io";
import { MdDashboard } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa";
import { TbMessage2Cancel } from "react-icons/tb";
import { AiFillSecurityScan } from "react-icons/ai";
import { SiSpringsecurity } from "react-icons/si";
import { GrAnnounce } from "react-icons/gr";
import { Collapse } from 'react-bootstrap';
import { IoMdArrowDropdown } from "react-icons/io";
import { FaPersonChalkboard, FaSdCard } from 'react-icons/fa6';

const Sidebar = ({ toggleSidebar }) => {
  const [isFinancialOpen, setIsFinancialOpen] = useState(false);
  const [isSecurityOpen, setIsSecurityOpen] = useState(false);
  const [isComplaintOpen, setIsComplaintOpen] = useState(false);

  const toggleFinancialDropdown = () => {
    setIsFinancialOpen(!isFinancialOpen);
  };

  const toggleSecurityDropdown = () => {
    setIsSecurityOpen(!isSecurityOpen);
  }

  const toggleComplaintDropdown = () => {
    setIsComplaintOpen(!isComplaintOpen);
  }

  return (
    <>
      <div className="row">
        {/* Close button for screens up to 767px */}
        <div className="col-12  d-lg-none text-end mt-2">
          <button className="btn close-btn" onClick={toggleSidebar}>
            <IoMdClose />
          </button>
        </div>

        <div className="col-md-12 mt-2 d-flex align-items-center justify-content-center flex-column">
          <img src='src/Images/logo.png' height={70} className='pt-2' alt="Logo" />
        </div>
        <hr />

          <NavLink  className="text-decoration-none font_color"  to="/" onClick={toggleSidebar}>
        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto background_color sidebar_link  p-3">
            <p><MdDashboard className='me-2 fs-4 font_color' /> Dashboard</p>
        </div>
          </NavLink>

          <NavLink className="text-decoration-none font_color" to="/personaldetail" onClick={toggleSidebar}>
        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto p-3">
            <p ><img className='me-2 fs-4' src="src/Images/personalcard.png" alt="" />
            Personal Details</p>
        </div>
          </NavLink>
          <NavLink className="text-decoration-none font_color" to="/serviceandcomplaint" onClick={toggleSidebar}>
        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto p-3">
            <p ><img className='me-2 fs-4' src="src/Images/servicecomplain.png" alt="" />Service And Complaint</p>
        </div>
          </NavLink>
          <NavLink className="text-decoration-none font_color" to="/eventparticipation" onClick={toggleSidebar}>
        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto p-3">
            <p ><img className='me-2 fs-4' src="src/Images/event.png" alt="" />Event Participation</p>
        </div>
          </NavLink>
   
        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto financial_management_main p-3">
          <div onClick={toggleSecurityDropdown} style={{ cursor: 'pointer' }}>
            <p style={{ cursor: 'pointer', fontSize: '14px', fontWeight: '500' }}  className='ms-2 font_color f'><img className='me-2 fs-4' src="src/Images/comunity.png" alt="" /> Comunity</p>
          </div>
          {/* Dropdown for security Management */}
          <Collapse in={isSecurityOpen} className='dropdown-main '>
            <div className="ps-4">
              <NavLink className="text-decoration-none font_color " to="/" onClick={toggleSidebar}>
                <p className="p-3 sub-link">Access Forums</p>
              </NavLink>
              <NavLink  className="text-decoration-none font_color" to="/pollapp" onClick={toggleSidebar}>
                <p className="p-3 sub-link">Polls</p>
              </NavLink>
              <NavLink className="text-decoration-none font_color" to="/" onClick={toggleSidebar}>
                <p className="p-3 sub-link">Communication Discussion</p>
              </NavLink>
            </div>
          </Collapse>
        </div>

   

        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto financial_management_main p-3">
          <div onClick={toggleComplaintDropdown} style={{ cursor: 'pointer' }}>
            <p style={{ cursor: 'pointer', fontSize: '14px', fontWeight: '500' }} className='ms-2 font_color'><TbMessage2Cancel className='me-2 fs-4 font_color' /> Payment Portal</p>
          </div>

          {/* Dropdown for Complaint Tracking */}
          <Collapse in={isComplaintOpen} className='dropdown-main '>
            <div className="ps-4">
              <NavLink className="text-decoration-none font_color" to="/maintananceinvoice" onClick={toggleSidebar}>
                <p className="p-3 sub-link">Maintanance Invoices</p>
              </NavLink>
              <NavLink className="text-decoration-none font_color" to="/OtherIncomeInvoice" onClick={toggleSidebar}>
                <p className=" p-3 sub-link">Other Income Invoice</p>
              </NavLink>
            </div>
          </Collapse>
        </div>

        

        <div className="col-md-11 mt-2 mb-2 sidebar_link mx-auto p-3">
          <NavLink className="text-decoration-none font_color" to="/securityprotocols" onClick={toggleSidebar}>
            <p className='ms-2'><GrAnnounce className='me-2 fs-4 font_color' /> Seurity Protocol</p>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
