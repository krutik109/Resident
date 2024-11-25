import React, { useState } from "react";
import "./EventParticipation.css";
import { Link } from "react-router-dom";

const EventParticipation = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      paricipatorname: "Evelyn Harper",
      description: "Event and recreational activities.",
      time: "10:00 AM",
      date: "2022/01/01",
      eventname: "Holi Festival ",
    },
    {
      id: 2,
      paricipatorname: "Esther Howard",
      description: "Securing critical government systems.",
      time: "1:45 AM",
      date: "2022/01/01",
      eventname: "Holi Festival ",
    },
    {
      id: 3,
      paricipatorname: "Esther Howard",
      description: "Securing critical government systems.",
      time: "1:45 AM",
      date: "2022/01/01",
      eventname: "Holi Festival ",
    },
    {
      id: 4,
      paricipatorname: "Esther Howard",
      description: "Securing critical government systems.",
      time: "1:45 AM",
      date: "2022/01/01",
      eventname: "Holi Festival ",
    },
    // Additional entries...
  ]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div>
          <div className="d-flex justify-content-start mt-3">
            <Link
              className="border-bottom border-2 border-danger"
              to={"/eventparticipation"}
            >
              <button className="participatebtn hovermaincolor rounded-top bg-white text-dark btn border-bottom">
                <span className="participatebtnspan">Events Participate</span>
              </button>
            </Link>
            <Link
              className="border-bottom border-2 border-danger"
              to="/activityparticipate"
            >
              <button className="participatebtn hovermaincolor border-bottom text-dark bg-white rounded-top btn">
                <span className="participatebtnspan">Activity Participate</span>
              </button>
            </Link>
          </div>
          <div className='container-fluid'>
        <div className='row justify-content-center'>
        <div className="container-fluid row bg-white">
  <div>
    <h4 className="mt-3">Event Participation</h4>
  </div>
  <div className="eventtable" style={{ overflowX: "auto" }}>
    {/* Header Row */}
    <div
      className="row head   text-center align-items-center"
     
    >
      <div className="col-3 fw-bold text-start ">Participator Name</div>
      <div className="col-3 fw-bold text-center">Description</div>
      <div className="col-2 fw-bold text-center">Event Time</div>
      <div className="col-2 fw-bold text-center">Event Date</div>
      <div className="col-2 fw-bold text-center">Event Name</div>
      
    </div>

    {/* Rows */}
    {events.map((events, index) => (
      <div
        className="row data border-bottom p-2 align-items-center"
        key={index}
       
      >
        {/* Participator Name */}
        <div className="col-3 d-flex align-items-center ">
          <img
            src="src/Images/profileimg.png"
            alt="avatar"
            className=" profileimg me-2"
          />
          <span className='text-center'>{events.paricipatorname}</span>
        </div>

        {/* Description */}
        <div className="col-3 text-center ">
          <p>{events.description}</p>
        </div>

        {/* Time */}
        <div className="col-2 text-center">
        <p>{events.time}</p>
        </div>

        {/* Date */}
        <div className="col-2 text-center">
       <p>{events.date}</p>
        </div>
        <div className="col-2 text-center">
       <p>{events.eventname}</p>
        </div>

        {/* protocol Name */}
        
      </div>
    ))}
  </div>
</div> 
        </div>

      
    </div>
        </div>
      </div>
    </div>
  );
};

export default EventParticipation;
