import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { editUser, getSingleUser } from "../redux/action";

const Editpage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhon] = useState("");
  const [status, setStatus] = useState("false");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const users = useSelector((state) => state.users);

  const handleUpdate = () => {
    const payload = {
      name,
      email,
      phone,
      status,
    };

    console.log("payload is ", payload);
    dispatch(editUser(id, payload));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (users) {
      setName(users.name);
      setEmail(users.email);
      setPhon(users.phone);
      setStatus(users.status);
    }
  }, [users]);

  return (
    <>
      <Text marginTop={"10px"}>Edit User</Text>
      <Flex justifyContent="center">
        <Box
          border={"1px solid red"}
          width="30%"
          height={"70vh"}
          padding="60px"
          marginTop={"10px"}
        >
          <Box height="100%">
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              value={name || ""}
              onChange={(e) => setName(e.target.value)}
            />
            <FormLabel>E-mail</FormLabel>
            <Input
              type="email"
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormLabel>Phone</FormLabel>
            <Input
              type="number"
              value={phone || ""}
              onChange={(e) => setPhon(e.target.value)}
            />
            <FormLabel>Status</FormLabel>
            <Input
              type="text"
              value={status || ""}
              onChange={(e) => setStatus(e.target.value)}
            />
          </Box>
          <Button colorScheme={"green"} onClick={handleUpdate}>
            Update
          </Button>
        </Box>
      </Flex>
    </>
  );
};

export default Editpage;
