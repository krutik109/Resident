// import React from 'react'
// import "./Header.css"

// const Header = () => {
//   return (
//     <>
//       <div className="row d-flex justify-content-between align-items-center  mt-3 mb-3">
//         <div className="col-md-4 col-lg-3 col-xl-3 col-xxl-2">
//           <input type='text' placeholder='Search-here' className='input-width' />
//         </div>
//         <div className="col-md-4 col-lg-3 col-xl-2   col-xxl-2">
//           <h3>Name</h3>
//         </div>

//       </div>
//       <hr />
//     </>
//   )
// }

// export default Header


import React from 'react';
import './Header.css';
import { RxHamburgerMenu } from "react-icons/rx";


const Header = ({ toggleSidebar }) => {
  return (
    <>
      <div className="row d-flex justify-content-between align-items-center mt-3 mb-3">
        {/* Hamburger icon for small screens */}
        <div className="col-auto d-md-none">
          <button className="btn" onClick={toggleSidebar}>
            <RxHamburgerMenu />       {/* Bootstrap icon for hamburger menu */}
          </button>
        </div>

        {/* Search bar and user profile (Visible across all screen sizes) */}
        <div className="col">
          <h3>Header</h3>
        </div>
        <div className="col-auto">
          <i className="bi bi-person-circle"></i> {/* User icon */}
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;
