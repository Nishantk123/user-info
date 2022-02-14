import React, { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const history = useHistory();

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    console.log(token);
    if (token === null) {
      history.push("/login");
    }
  }, []);

  useEffect(() => {
    axios.get("https://reqres.in/api/users").then((res) => {
      console.log(res.data);
      setUserData(res.data.data);
    });
  }, []);

  const handleUserModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleJob = (e) => {
    setJob(e.target.value);
  };

  const handleCreateUser = () => {
    let data = {
      name: name,
      job: job,
    };
    axios({
      method: "POST",
      url: "https://reqres.in/api/users",
      data: data,
    })
      .then((res) => {
        console.log("user created");
        setShowModal(false);
        alert("User crated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className=" d-flex justify-content-end my-3">
        <button className="btn btn-primary" onClick={handleUserModal}>
          {" "}
          Create new user
        </button>
      </div>
      <div className="row">
        {userData.map((data, index) => {
          console.log(data);
          return (
            <div className="col-sm-4 my-3" key={index}>
              <div className="card">
                <div className="card-body text-center">
                  <div className="">
                    <img src={data.avatar} />
                  </div>
                  <div className="text-center">
                    {data.first_name + " " + data.last_name}
                  </div>
                  <div>{data.email}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* user create new modal */}
      {showModal && (
        <div className="modal d-block" tabindex="-1">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create New User</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <input
                  className="form-control my-3"
                  placeholder="Enter your name"
                  onChange={(e) => handleName(e)}
                />
                <input
                  className="form-control my-3"
                  placeholder="Enter your job"
                  onChange={(e) => handleJob(e)}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={handleCloseModal}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={handleCreateUser}>
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User;
