import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();

  const addPage = () => {
    navigate('/add')
  };

  return (
    <>
      <Box bg={useColorModeValue("orange", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to='/'>CRUD APP</Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Flex alignItems={'center'} direction='row'>
              <Button
                size={"sm"}
                fontSize="12px"
                colorScheme={"blue"}
                marginRight="15px"
                onClick={addPage}
              >
                Add User
              </Button>
              <Button size={"sm"} fontSize="12px" colorScheme={"pink"}>
                LOGIN
              </Button>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}



export { Navbar };
