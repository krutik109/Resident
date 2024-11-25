import React, { useState } from 'react';
import './Dashboard.css';

import { MdOutlineCurrencyRupee } from "react-icons/md";
import { FaAngleDown } from "react-icons/fa";
import { FiX } from 'react-icons/fi';
import BalanceChart from '../BalanceChart/BalanceChart';
const Dashboard = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showDeleteModal1, setShowDeleteModal1] = useState(false);
  const [showViewModal, setShowViewModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);


  const handleShowAddModal = () => setShowAddModal(true);
  const handleCloseAddModal = () => setShowAddModal(false);

  const handleShowDeleteModal1 = () => setShowDeleteModal1(true);
  const handleCloseDeleteModal1 = () => setShowDeleteModal1(false);

  const handleShowDeleteModal = () => setShowDeleteModal(true);
  const handleCloseDeleteModal = () => setShowDeleteModal(false);

  const handleShowViewModal = () => setShowViewModal(true);
  const handleCloseViewModal = () => setShowViewModal(false);

  const handleShowEditModal = () => setShowEditModal(true);
  const handleCloseEditModal = () => setShowEditModal(false);

  return (
    <div className="container-fluid resident-management">
      {/* Top Balance Cards */}
      <div className="row ">
        <div className="col-lg-3 mb-2">
          <div className="balance-card balance-card-orange">
            <div className="balance-info">
              <p className="mb-0 text-muted mt-3">Total Balance</p>
              <p className="balance-amount">₹ 2,22,520</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group1.png" alt="Balance icon" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-2">
          <div className="balance-card balance-card-green">
            <div className="balance-info">
              <p className="mb-0 text-muted  mt-3">Total Income</p>
              <p className="balance-amount">₹ 55,000</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group2.png" alt="Income icon" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-2">
          <div className="balance-card balance-card-blue">
            <div className="balance-info">
              <p className="mb-0 text-muted  mt-3">Total Expense</p>
              <p className="balance-amount">₹ 20,550</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group3.png" alt="Expense icon" />
            </div>
          </div>
        </div>

        <div className="col-lg-3 mb-2">
          <div className="balance-card balance-card-pink">
            <div className="balance-info">
              <p className="mb-0 text-muted  mt-3">Total Unit</p>
              <p className="balance-amount">₹ 20,550</p>
            </div>
            <div className="icon-container">
              <img src="src/Images/Group4.png" alt="Unit icon" />
            </div>
          </div>
        </div>
      </div>
      {/* Balance Chart and Sidebar Panels */}
      <div className="row mb-3">
        <div className="col-lg-6 ">
          <div className="card balance-chart">
            <BalanceChart />
          </div>
        </div>

        <div className="col-lg-6 mt-1 ">
          <div className="row">
            {/* Important Numbers */}
            <div className="col-lg-6">
              <div className="card border rounded" style={{ height: "415px" }}>
                <div className="card-header d-flex justify-content-between align-items-center p-2">
                  <h5 style={{ fontSize: "20px" }}>Important Numbers</h5>
                  <button className="btn btn-primary" onClick={handleShowAddModal}>
                    Add
                  </button>
                </div>
                <div className="important-numbers scrollable-card">
                  <div className="m-2">
                    {[...Array(6)].map((_, index) => (
                      <div
                        className="border rounded mb-2 d-flex justify-content-between align-items-center"
                        key={index}
                      >
                        <div className="col-lg-8 p-2">
                          <h5 style={{ fontSize: "13px" }}>
                            Name: <span className="text-secondary fw-normal">Hanna Donin</span>
                          </h5>
                          <h5 style={{ fontSize: "12px" }}>
                            Phone: <span className="text-secondary fw-normal">+91 99857 33657</span>
                          </h5>
                          <h5 style={{ fontSize: "13px" }}>
                            Work: <span className="text-secondary fw-normal">Plumber</span>
                          </h5>
                        </div>
                        <div className="col-lg-4">
                          <img
                            className="delete-number me-2"
                            role="button"
                            tabIndex="0"
                            src="src/Images/delet.png"
                            alt="delete"
                            onClick={handleShowDeleteModal1}
                          />
                          <img className="edit-number" role="button" tabIndex="0" src="src/Images/edit.png" alt="edit" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Add Number Modal */}
              {showAddModal && (
                <>
                  <div className="modal-backdrop show"></div>
                  <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ width: "360px", height: "420px", marginTop:"200px" }}>
                        <div className="modal-header">
                          <h5 className="modal-title">Add Number</h5>
                          <button type="button" className="btn-close" onClick={handleCloseAddModal}></button>
                        </div>
                        <div className="modal-body">
                          <form>
                            <div className="mb-2">
                              <label className="form-label">Full Name<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Phone Number<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" required />
                            </div>
                            <div className="mb-3">
                              <label className="form-label">Work<span className='text-danger'>*</span></label>
                              <input type="text" className="form-control" required />
                            </div>
                          </form>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            style={{ width: "45%" }}
                            onClick={handleCloseAddModal}
                          >
                            Cancel
                          </button>
                          <button type="button" className="btn btn-primary" style={{ width: "45%" }}>
                            Save
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Delete Confirmation Modal */}
              {showDeleteModal1 && (
                <>
                  <div className="modal-backdrop show"></div>
                  <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                    <div className="modal-dialog">
                      <div className="modal-content" style={{ width: "360px", marginTop:"200px" }}>
                        <div className="modal-header">
                          <h5 className="modal-title">Delete Number?</h5>
                          <button type="button" className="btn-close" onClick={handleCloseDeleteModal1}></button>
                        </div>
                        <div className="modal-body">
                          <p>Are you sure you want to delete this number?</p>
                        </div>
                        <div className="modal-footer d-flex justify-content-between">
                          <button
                            type="button"
                            className="btn btn-outline-secondary"
                            style={{ width: "45%" }}
                            onClick={handleCloseDeleteModal1}
                          >
                            Cancel
                          </button>
                          <button
                            type="button"
                            className="btn btn-danger"
                            style={{ width: "45%" }}
                            onClick={() => {
                              // Add your delete logic here
                              handleCloseDeleteModal1();
                            }}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            {/* Pending Maintenances */}
            <div className="col-lg-6 mt-2">
              <div className="card pending-maintenance" style={{ height: "410px" }}>
                <div className="card-header d-flex justify-content-between align-items-center">
                  <h5 style={{ fontSize: "17px" }}>Pending Maintenances</h5>
                  <span className='text-primary'>View all</span>
                </div>
                <div className="card-body scrollable-card">
                  {/* Sample Pending Maintenance Item */}
                  {[...Array(10)].map((_, index) => (
                    <div className="maintenance-item d-flex bd-highlight mt-1 align-items-center border-bottom" key={index}>
                      <div className="bd-highlight rounded  mb-1">
                        <img src="src\Images\image2.png" alt="maintenance" style={{ height: "40px"  }} />
                      </div>
                      <div className="ps-2 bd-highlight">
                        <h5 style={{ fontSize: "13px" }}>Roger Lubin</h5>
                        <h5 style={{ fontSize: "12px" }} className='text-secondary fw-normal'>2 Month Pending</h5>
                      </div>
                      <div className="text-danger ms-auto p-2 bd-highlight">
                        <h2 style={{ fontSize: "12px" }}> <MdOutlineCurrencyRupee className='mb-1' />5000</h2>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Complaint List */}
      <div className="row">
        <div className="col-9 ">
          <div className="border rounded complaint-list p-3 bg-white">
            <div className="d-flex justify-content-between align-items-center ">
              <h5>Complaint List</h5>
              <button className="btn border">Month <i className="fas fa-angle-down"></i></button>
            </div>
            <div className="table-responsive mt-2">
              <table className="table rounded-table">
                <thead>
                  <tr>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Complainer Name</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Complaint Name</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Date</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Priority</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Complain Status</th>
                    <th style={{ backgroundColor: "#a3b4ec" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/profileimg.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions ">
                      <button className="btn-action mb-2">
                        <img
                          className="edit-Complaint"
                          src="src/Images/edit.png"
                          alt="Edit"
                          onClick={handleShowEditModal}
                        />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/profileimg.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions ">
                      <button className="btn-action mb-2">
                        <img
                          className="edit-Complaint"
                          src="src/Images/edit.png"
                          alt="Edit"
                          onClick={handleShowEditModal}
                        />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/profileimg.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions ">
                      <button className="btn-action mb-2">
                        <img
                          className="edit-Complaint"
                          src="src/Images/edit.png"
                          alt="Edit"
                          onClick={handleShowEditModal}
                        />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/profileimg.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions ">
                      <button className="btn-action mb-2">
                        <img
                          className="edit-Complaint"
                          src="src/Images/edit.png"
                          alt="Edit"
                          onClick={handleShowEditModal}
                        />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/profileimg.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions ">
                      <button className="btn-action mb-2">
                        <img
                          className="edit-Complaint"
                          src="src/Images/edit.png"
                          alt="Edit"
                          onClick={handleShowEditModal}
                        />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                      </button>
                    </td>
                  </tr>
                  <tr>
                    <td className="complainer">
                      <img src="src/Images/profileimg.png" alt="Complainer" className="complainer-image mb-2 me-2" />
                      Evelyn Harper
                    </td>
                    <td>Unethical Behavior</td>
                    <td>01/02/2024</td>
                    <td><span className="badge badge-medium">Medium</span></td>
                    <td><span className="status open">Open</span></td>
                    <td className="actions ">
                      <button className="btn-action mb-2">
                        <img
                          className="edit-Complaint"
                          src="src/Images/edit.png"
                          alt="Edit"
                          onClick={handleShowEditModal}
                        />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/view.png" alt="View" onClick={handleShowViewModal} />
                      </button>
                      <button className="btn-action">
                        <img src="src/Images/delet.png" alt="Delete" onClick={handleShowDeleteModal} />
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* View Complaint Modal */}
          {showViewModal && (
            <>
              <div className="modal-backdrop show"></div>
              <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog">
                  <div className="modal-content" style={{ width: "360px", marginTop:"200px" }}>
                    <div className="modal-header">
                      <h5 className="modal-title">View Complaint</h5>
                      <button type="button" className="btn-close" onClick={handleCloseViewModal}> </button>
                    </div>
                    <div className="modal-body">
                      <div className="d-flex align-items-center mb-3">
                        <img
                          src="src/Images/profileimg.png"
                          alt="Complainer"
                          className="rounded-circle me-3"
                          style={{ width: "50px", height: "50px" }}
                        />
                        <div>
                          <h6 className="mb-0">Evelyn Harper</h6>
                          <small className="text-muted">Aug 5, 2024</small>
                        </div>
                      </div>
                      <div className="mb-2">
                        <strong>Request Name</strong>
                        <p>Unethical Behavior</p>
                      </div>
                      <div className="mb-3">
                        <strong>Description</strong>
                        <p>
                          Offering, giving, receiving, or soliciting of value to influence the actions of an.
                        </p>
                      </div>
                      <div className="d-flex justify-content-between">
                        <span className="badge bg-light text-dark px-3 py-1">Wing A</span>
                        <span className="badge bg-light text-dark px-3 py-1">Unit 1002</span>
                        <span className="badge bg-primary text-white px-3 py-1">Medium</span>
                        <span className="badge bg-info text-dark px-3 py-1">Open</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Edit Complaint Modal */}
          {showEditModal && (
            <>
              <div className="modal-backdrop show"></div>
              <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog modal-dialog-centered">
                  <div className="modal-content" style={{ width: "410px" }}>
                    <div className="modal-header">
                      <h5 className="modal-title">Edit Complaint</h5>
                      <button type="button" className="btn-close" onClick={handleCloseEditModal}></button>
                    </div>
                    <div className="modal-body">
                      <form>
                        <div className="mb-1">
                          <label htmlFor="complainerName" className="form-label">Complainer Name<span className='text-danger'>*</span></label>
                          <input type="text" className="form-control" id="complainerName" defaultValue="Evelyn Harper" required />
                        </div>
                        <div className="mb-1">
                          <label htmlFor="complaintName" className="form-label">Complaint Name<span className='text-danger'>*</span></label>
                          <input type="text" className="form-control" id="complaintName" defaultValue="Unethical Behavior" required />
                        </div>
                        <div className="mb-1">
                          <label htmlFor="description" className="form-label">Description<span className='text-danger'>*</span></label>
                          <textarea className="form-control" id="description" rows="3" defaultValue="The celebration of Ganesh Chaturthi involves the installation of clay idols of Ganesa in Resident." required></textarea>
                        </div>
                        <div className="row">
                          <div className="col">
                            <label htmlFor="wing" className="form-label">Wing<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="wing" defaultValue="A" required />
                          </div>
                          <div className="col">
                            <label htmlFor="unit" className="form-label">Unit<span className='text-danger'>*</span></label>
                            <input type="text" className="form-control" id="unit" defaultValue="1001" required />
                          </div>
                        </div>
                        <div className="my-1">
                          <label className="form-label">Priority<span className='text-danger'>*</span></label>
                          <div className="d-flex gap-2d-flex justify-content-evenly">
                            <div className="col-4 form-check border p-2 me-1 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">High</label>
                            </div>
                            <div className="col-4 form-check  border p-2 me-1 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Medium</label>
                            </div>
                            <div className="col-4 form-check  border p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Low</label>
                            </div>
                          </div>
                        </div>
                        <div className="">
                          <label className="form-label">Status<span className='text-danger'>*</span></label>
                          <div className="d-flex gap-2d-flex justify-content-evenly">
                            <div className="col-4 form-check border me-1 p-2 rounded text-center ">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Open</label>
                            </div>
                            <div className="col-4 form-check  border me-1 p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Pending</label>
                            </div>
                            <div className="col-4 form-check  border p-2 rounded text-center">
                                <input type="radio" id="Red" name="colors" defaultValue="Red" value="High" />
                                <label className='ms-1' htmlFor="Red">Solve</label>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="modal-footer justify-content-between">
                      <button type="button" className="btn btn-secondary" style={{width:"46%"}} onClick={handleCloseEditModal}>Cancel</button>
                      <button type="button" className="btn btn-primary" style={{width:"46%"}}>Save</button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
          {/* Delete Confirmation Modal */}
          {showDeleteModal && (
            <>
              <div className="modal-backdrop show"></div>
              <div className="modal fade show d-block" tabIndex="-1" role="dialog" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
                <div className="modal-dialog" >
                  <div className="modal-content" style={{marginTop:"250px"}} >
                    <div className="modal-header">
                      <h5 className="modal-title">Delete Complain?</h5>
                      <button type="button" className="btn-close" onClick={handleCloseDeleteModal}></button>
                    </div>
                    <div className="modal-body">
                      <p>Are you sure you want to delate this complain?</p>
                    </div>
                    <div className="modal-footer d-flex justify-content-between">
                      <button
                        type="button"
                        className="btn btn-outline-secondary"
                        style={{ width: "45%" }}
                        onClick={handleCloseDeleteModal}
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        className="btn btn-danger"
                        style={{ width: "45%" }}
                        onClick={() => {
                          // Add your delete logic here
                          handleCloseDeleteModal();
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Upcoming Activity */}
        <div className="col-lg-3 mt-2">
          <div className="card upcoming-activity">
            <div className="card-header d-flex justify-content-between align-items-center">
              <h5 style={{ fontSize: "16px" }}>Upcoming Activity</h5>
              <button className='btn border' style={{ width: "90px", fontSize: "14px" }}>Month <FaAngleDown /></button>
            </div>
            <div className="card-body scrollable-card">
              {/* Sample Upcoming Activity Item */}

              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group5.png" alt="activity" style={{ height: "40px"}}/>
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Society Meeting</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group6.png" alt="activity" style={{ height: "40px"}} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Holi Festival </h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}> 24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group7.png" alt="activity" style={{ height: "40px"}} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Ganesh Chaturthi</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group8.png" alt="activity" style={{ height: "40px"}} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Navratri Festival</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className=" bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group7.png" alt="activity" style={{ height: "40px"}} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Ganesh Chaturthi</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group6.png" alt="activity" style={{ height: "40px"}} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Holi Festival </h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}> 24-09-2024</h2>
                </div>
              </div>
              <div className="maintenance-item d-flex bd-highlight align-items-center border-bottom" >
                <div className=" bd-highlight rounded">
                  <img src="src\Images\Group5.png" alt="activity" style={{ height: "40px" }} />
                </div>
                <div className="p-2 bd-highlight">
                  <h5 style={{ fontSize: "14px" }}>Society Meeting</h5>
                  <h5 style={{ fontSize: "12px" }} className="text-secondary fw-normal">8:00 PM To 10:00 PM</h5>
                </div>
                <div className="ms-auto  bd-highlight">
                  <h2 style={{ fontSize: "12px" }}>24-09-2024</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;