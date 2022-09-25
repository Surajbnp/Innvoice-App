import React from "react";
import { Box, Text, Input, Button, Stack } from "@chakra-ui/react";

const Signup = () => {
  return (
    <Box h="80vh">
      <Text mt="2" fontSize={"3xl"} fontWeight="bold">
        Create Account
      </Text>
      <Box
        w="30%"
        h="auto"
        margin="10px auto"
        textAlign="start"
        padding="20px"
        boxShadow="rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        borderRadius="15px"
      >
        <label>Name</label>
        <Input type="text" placeholder="enter name" />
        <label>Username</label>
        <Input type="text" placeholder="enter username" />
        <label>Password</label>
        <Input type="password" placeholder="enter password" />
        <br />
        <Stack>
          <Button m="auto" mt={5} colorScheme="whatsapp">
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
          <a href="/login">Login</a></span>
        </p>
      </Box>
    </Box>
  );
};

export default Signup;
