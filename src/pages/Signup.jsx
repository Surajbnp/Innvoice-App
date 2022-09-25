import React, { useState } from "react";
import { Box, Text, Input, Button, Stack, Spinner } from "@chakra-ui/react";
import { signup } from "../redux/action";
import { useDispatch } from "react-redux";
import {  toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {
  const [name, setName] = useState("");
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const [filled, setFilled] = useState(false);
  const dispatch = useDispatch();

  const handleSignup = () => {
    if (!name || !username || !password) {
      setFilled(true);
      return;
    }
    const payload = {
      name,
      username,
      password,
    };
    dispatch(signup(payload)).then((res) => {
      if (res.type == "SIGNUP_USER_SUCCESS") {
        toast.success("Account created successfully 😊", {
          position: "top-right",
          autoClose: 2000,
        });
      } else {
        toast.error("Username Allready Exists 😢", {
          position: "top-right",
          autoClose: 2000,
          theme: "colored",
        });
      }
    });
    setName("");
    setUser("");
    setPass("");
  };

  return (
    <Box
      h="90vh"
      fontFamily="'Comfortaa', cursive"
      backgroundImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXXShtgl2-qpGawpVmftpYpmj1eg2UmN9RJ1qOTCdsbRHT3j4_BHpTTtoI0PiPHZ1kwYo&usqp=CAU"}
      backgroundRepeat= 'no-repeat'
      backgroundSize= 'cover'
      color={'white'}
    >
      <Text fontSize={"3xl"} fontWeight="bold">
        Create Account
      </Text>
      {filled ? (
        <Text size="xs" fontStyle="revert" color="red" fontWeight={600}>
          Please fill all fields
        </Text>
      ) : null}
      <Box
        w="30%"
        h="auto"
        margin="10px auto"
        textAlign="start"
        padding="20px"
        mt={10}
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        borderRadius="15px"

      >
        <label>Name</label>
        <Input
          type="text"
          placeholder="enter name"
          value={name || ""}
          onChange={(e) => {
            setName(e.target.value);
            setFilled(false);
          }}
        />
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
          <Button
            spinner={<Spinner size={8} color="white" />}
            m="auto"
            mt={5}
            colorScheme="whatsapp"
            onClick={handleSignup}
          >
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
          Allready a user ? Please{" "}
          <span style={{ color: "blue", textDecoration: "underline" }}>
            <a href="/login">Login</a>
          </span>
        </p>
      </Box>
    </Box>
  );
};

export default Signup;
