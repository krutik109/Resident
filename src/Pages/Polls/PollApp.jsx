import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PollApp.css";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

const PollApp = () => {
  const [polls, setPolls] = useState([
    {
      type: "Multichoice polls",
      question: "Sales Deal with Toyota - Azure HF - AMS Amplify?",
      options: ["Yes", "No"],
      votes: [{ yes: 75, no: 40 }],
      createdAt: "01/07/2024, 10:00 AM",
      user: {
        name: "Arlene McCoy",
        score: 20,
        avatar: "https://shorturl.at/sPaTn",
      }, // Ensure this exists
    },
  ]);

  const [newPoll, setNewPoll] = useState({
    type: "",
    question: "",
    options: ["", ""],
  });

  const predefinedPolls = [
    {
      type: "Multichoice Poll",
      question: "",
      options: ["", ""],
    },
    {
      type: "Ranking Poll",
      question: "",
      options: ["", ""],
    },
    {
      type: "Rating Poll",
      question: "",
      options: ["", ""],
    },  {
      type: "Numeric Polls",
      question: "",
      options: ["", ""],
    },
    {
      type: "Text Poll",
      question: "",
      options: ["", ""],
    },
  ];
  predefinedPolls.forEach((poll) => {
    if (!poll.user) {
      poll.user = {
        name: "Default User",
        score: 0,
        avatar: "https://shorturl.at/sPaTn",
      };
    }
  });

  // Add a new poll to the list
  const addPoll = () => {
    const selectedPredefinedPoll = predefinedPolls.find(
      (poll) => poll.type === newPoll.type
    );

    const newPollToAdd = selectedPredefinedPoll
      ? {
          ...selectedPredefinedPoll,
          question: newPoll.question,
          options: newPoll.options,
          votes: Array(selectedPredefinedPoll.options.length).fill({
            yes: 0,
            no: 0,
          }),
          user: {
            name: "Default User",
            score: 0,
            avatar: "https://shorturl.at/sPaTn",
          }, // Add default user
          createdAt: new Date().toLocaleString(),
        }
      : {
          type: newPoll.type || "Custom Poll",
          question: newPoll.question,
          options: newPoll.options,
          votes: Array(newPoll.options.length).fill({ yes: 0, no: 0 }),
          user: {
            name: "Default User",
            score: 0,
            avatar: "https://shorturl.at/sPaTn",
          }, // Add default user
          createdAt: new Date().toLocaleString(),
        };

    setPolls([...polls, newPollToAdd]);
    setNewPoll({ type: "", question: "", options: ["", ""] });
  };

  // Update new poll option text
  const updateOption = (index, value) => {
    const updatedOptions = [...newPoll.options];
    updatedOptions[index] = value;
    setNewPoll({ ...newPoll, options: updatedOptions });
  };

  // Handle voting
  const handleVote = (pollIndex, voteType) => {
    const updatedPolls = polls.map((poll, pIndex) => {
      if (pIndex === pollIndex) {
        const updatedVotes = poll.votes.map((vote) => ({
          ...vote,
          [voteType]: vote[voteType] + 1,
        }));
        return { ...poll, votes: updatedVotes };
      }
      return poll;
    });
    setPolls(updatedPolls);
  };

  return (
    <div className="container-fluid mt-5 ">
       <div>
          <Link to="/">
            <button
              style={{
                width: "135px",
                height: "49px",
                borderRadius: "",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="mainColor2 hovermaincolor rounded-top-only  bg-white  btn"
            >
              Owner
            </button>
          </Link>
          <Link to="/">
            <button
              style={{
                width: "135px",
                height: "49px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="hovermaincolor  bg-white rounded-top border-top-only text-dark btn"
            >
              Tenant
            </button>
          </Link>
          <Link to="/">
            <button
              style={{
                width: "135px",
                height: "49px",
                borderRadius: "10px",
                fontSize: "14px",
                fontWeight: "500",
              }}
              className="hovermaincolor  bg-white rounded-top-only border-top-only text-dark btn"
            >
              Tenant
            </button>
          </Link>
        </div>
      <div className="d-flex justify-content-between bg-white  align-items-center mb-3">
        <h4  className="semibold">Polls</h4>

        {/* Create Poll Modal */}

        <button
          className="btn  mainColor2 text-white mb-3"
          data-bs-toggle="modal"
          data-bs-target="#createPollModal"
          onClick={() =>
            document.getElementById("createPollModal").classList.add("show")
          }
        >
          Create Poll
        </button>
      </div>

      <div
        className="modal fade "
        id="createPollModal"
        tabIndex="-1"
        aria-labelledby="createPollModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div style={{ maxWidth: "410px" }} className="modal-content  ">
            <div className="modal-header">
              <h6 className="modal-title semibold" id="createPollModalLabel">
                Create Poll
              </h6>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body ">
              <div className="mb-3">
                <label className="form-label ">
                  Polls <span className="text-danger">*</span>
                </label>
                <div className="dropdown radio-group">
                  <button
                    className="btn polltype text-start border col-12 dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {newPoll.type || "Select Polls"}
                  </button>
                 
                  <ul
                    className="dropdown-menu col-12"
                    aria-labelledby="dropdownMenuButton"
                  >
                    {predefinedPolls.map((poll, index) => (
                      <li key={index}>
                        <button
                          className="dropdown-item bg-white   d-flex align-items-center"
                          onClick={() =>
                            setNewPoll({ ...newPoll, type: poll.type})
                          }
                        >
                          <input className="radio-group" type="radio" name="poll" id="" />
                          <img
                          name="poll"

                            src={
                              poll.type === "Multichoice Poll"?"src/Images/Multichoice.png": poll.type === "Ranking Poll"? " src/Images/ranking.png":poll.type === "Rating Poll"? "src/Images/rating.png":poll.type === "Numeric Poll"? "src/Images/numeric.png":poll.type === "Text Poll"? "src/Images/text.png":"src/Images/Vector.png"
                            }
                            alt={`${poll.type} Icon`}
                            className="me-2 ms-2"
                            style={{color:"black" }}
                          />
                         <span className="polltype">  {poll.type}</span>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label" >Question <span className="text-danger">*</span></label>
                <input
                  type="text"
                  
                  placeholder="Ask a question"
                  className="form-control polltype"
                  value={newPoll.question}
                  onChange={(e) =>
                    setNewPoll({ ...newPoll, question: e.target.value })
                  }
                />
              </div>
              {newPoll.options.map((option, index) => (
                <div className="mb-3" key={index}>
                  <label className="form-label">Option{index + 1 }</label><span className="text-danger">*</span>
                  <input
                    type="text"
                    placeholder="Add"
                    className="form-control polltype"
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                  />
                </div>
              ))}
            </div>
            <div className="modal-footer gap-2">
              <button
                type="button"
                className="btn btn1 bg-white text-black btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                className="btn btn1 mainColor2 text-white"
                onClick={addPoll}
                data-bs-dismiss="modal"
              >
                Create
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Poll Cards */}
      <div className="container my-4">
        <div className="row">
          {polls.map((poll, pollIndex) => {
            const totalYes = poll.votes[0].yes;
            const totalNo = poll.votes[0].no;
            const totalVotes = totalYes + totalNo;
            const yesPercent = totalVotes ? (totalYes / totalVotes) * 100 : 0;
            const noPercent = totalVotes ? (totalNo / totalVotes) * 100 : 0;

            return (
              <div className="col-md-4   mb-4" key={pollIndex}>
                <div className="card poll-card">
                  <div className="card-header d-flex align-items-center">
                    <img
                      src={poll.user?.avatar}
                      alt="Avatar"
                      className="rounded-circle me-3"
                    />
                    <div>
                      <h6 className="username mb-0">
                        {poll.user?.name || "Unknown User"}
                      </h6>
                      <small>{poll.type}</small>
                    </div>
                    <span className="badge  ms-auto">
                      <FaEye className="me-1" />
                      {poll.user?.score || 0}
                    </span>
                  </div>

                  <div className="card-body">
                    <p className="poll-question">{poll.question}</p>
                    <small className="text-muted d-block mb-3">
                      Select one or more options
                    </small>

                    <div className="d-flex justify-content-between align-items-center">
                      <label className="d-flex align-items-center">
                        <input
                          type="radio"
                          name={`poll-${pollIndex}`}
                          value="yes"
                          className="me-2"
                          onChange={() => handleVote(pollIndex, "yes")}
                        />
                        Yes
                      </label>
                      <div>
                        <img src="src/Images/totaluser.png" alt="" /> {totalYes}
                      </div>
                    </div>
                    {/* Separate progress bars for Yes and No */}
                    <div className="progress mb-3">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: `${yesPercent}%` }}
                      ></div>
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <label className="d-flex align-items-center">
                        <input
                          type="radio"
                          name={`poll-${pollIndex}`}
                          value="no"
                          className="me-2"
                          onChange={() => handleVote(pollIndex, "no")}
                        />
                        No
                      </label>
                      <div>
                        <img src="src/Images/totaluser.png" alt="" /> {totalNo}
                      </div>
                    </div>
                    <div className="progress mb-3">
                      <div
                        className="progress-bar progressbarno"
                        role="progressbar"
                        style={{ width: `${noPercent}%` }}
                      ></div>
                    </div>

                    {/* Radio buttons for Yes and No */}
                    <div className="d-flex justify-content-between align-items-center"></div>
                  </div>

                  <div className="card-footer text-end">
                    <small className="text-muted">{poll.createdAt}</small>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PollApp;
