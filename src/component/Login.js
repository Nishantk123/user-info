import React, { useState } from "react";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () =>{
    let data ={
        "email":email,
        "password": password
    }
    axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:data
    })
  }

  console.log(email, password);
  return (
    <div className="card w-50 mx-auto my-3 bg-info">
      <div className="card-body">
        <h3 className="text-center">Login </h3>
        <input
          type="text"
          className="form-control my-3"
          placeholder="Enter your email"
          onChange={(e) => handleEmail(e)}
        />
        <input
          type="password"
          className="form-control my-3"
          placeholder="Enter your password"
          onChange={(e) => handlePassword(e)}
        />

        <div className="text-center">
          <button className="btn btn-warning" onClick={handleSubmit}>Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
