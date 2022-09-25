import React, { useState } from "react";
import { Box, Text, Input, Stack, Button } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/action";

const Login = () => {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();

  const handleLogin = () => {
    const payload = {
      username,
      password,
    };

    // dispatch(login(payload));
    fetch('http://localhost:8080/login',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload)
    }).then((res) => res.json()).then((res) => {
      console.log(res);
    }).catch((err) => console.log(err))
  };

  return (
    <Box h="80vh">
      <Text mt="2" fontSize={"3xl"} fontWeight="bold">
        Login
      </Text>
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
          onChange={(e) => setUser(e.target.value)}
        />
        <label>Password</label>
        <Input
          type="password"
          placeholder="enter password"
          value={password || ""}
          onChange={(e) => setPass(e.target.value)}
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
