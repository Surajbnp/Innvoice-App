import { Box, Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addUser } from "../redux/action";
import {  useNavigate } from 'react-router-dom';

const Addpage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhon] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleAdd = (id) => {
    const payload = {
      name,
      email,
      phone,
      status:"false"
    }

    dispatch(addUser(payload))
    navigate("/")
    
  }

  return (
    <>
    <Text marginTop={'10px'}>Add User</Text>
    <Flex justifyContent="center">
      <Box
        border={"1px solid red"}
        width="30%"
        height={"60vh"}
        padding="60px"
        marginTop={"8vh"}
      >
        <Box  height="100%">
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <FormLabel>E-mail</FormLabel>
          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormLabel>Phone</FormLabel>
          <Input
            type="email"
            onChange={(e) => setPhon(e.target.value)}
          />
        </Box>
        <Button colorScheme={"green"}onClick={handleAdd}  >Add</Button>
      </Box>
    </Flex>
    </>
  );
};

export default Addpage;
