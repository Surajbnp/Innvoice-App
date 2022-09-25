import React, { useState } from "react";
import { Box, Text, Input, Stack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [filled, setFilled] = useState(false);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const token = localStorage.getItem("token")
  console.log(token);


  const handleLogin = () => {
    if (!username || !password) {
      setFilled(true);
      return;
    }
    const payload = {
      username,
      password,
    };
    dispatch(login(payload)).then((res) => {
       localStorage.setItem("token", res.token)
      if(res.type == "LOGIN_USER_SUCCESS"){
          navigate('/')
        toast.success("Login successfully 😍", {
          position: "top-right",
          autoClose: 2000,
        });
      }else{
        toast.error("Invalid Credentials 🤦‍♂️", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      }
    })
    setUser("");
    setPass("");
  };

  return (
    <Box
      h="90vh"
      fontFamily="'Comfortaa', cursive"
      bgRepeat="none"
      backgroundSize= 'cover'
      color={'white'}
      backgroundImage={
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXShtgl2-qpGawpVmftpYpmj1eg2UmN9RJ1qOTCdsbRHT3j4_BHpTTtoI0PiPHZ1kwYo&usqp=CAU"
      }
    >
      <Text fontSize={"3xl"} fontWeight="bold">
        Login
      </Text>
      {filled ? (
        <Text size="xs" color="red" fontWeight={600}>
          Please fill all fields
        </Text>
      ) : null}
      <Box
        w="30%"
        h="auto"
        margin="10px auto"
        textAlign="start"
        padding="25px"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        borderRadius="15px"
      >
        <label>Username</label>
        <Input
          type="text"
          placeholder="enter username"
          value={username || ""}
          onChange={(e) => {
            setUser(e.target.value);
            setFilled(false);
          }}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="enter password"
          value={password || ""}
          onChange={(e) => {
            setPass(e.target.value);
            setFilled(false);
          }}
        />
        <br />
        <Stack>
          <Button m="auto" mt={4} colorScheme="whatsapp" onClick={handleLogin}>
            Create
          </Button>
        </Stack>
        <p
          style={{
            fontStyle: "italic",
            textAlign: "center",
            marginTop: "10px",
          }}
        >
          New User ? Please{" "}
          <span style={{ color: "blue", textDecoration: "underline" }}>
            <a href="/signup">Create a account</a>
          </span>
        </p>
      </Box>
    </Box>
  );
};

export default Login;
