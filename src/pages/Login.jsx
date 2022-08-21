import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setN] = useState("");
  const [pass, setP] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (name === "ajay" && pass === "ajay8809") {
      localStorage.setItem("token", "5245545");
    } else {
      alert("Invalid User or Password");
    }
    navigate("/");
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          border: "1px solid red",
          width: "300px",
          textAlign: "start",
          padding: "20px",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <label>Username</label>
        <input
          style={{ border: "1px solid grey", paddingLeft: "5px" }}
          type="text"
          onChange={(e) => setN(e.target.value)}
        />
        <label> Password</label>
        <input
          style={{ border: "1px solid grey", paddingLeft: "5px" }}
          type="password"
          onChange={(e) => setP(e.target.value)}
        />
        <button
          style={{ background: "green", color: "white", marginTop: "20px" }}
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
