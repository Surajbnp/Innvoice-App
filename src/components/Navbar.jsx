import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  IconButton,
} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  SearchIcon,
  AddIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiOutlineBook } from "react-icons/ai";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Avatar, AvatarGroup } from "@chakra-ui/react";
// import { useSelector } from "react-redux";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  //const [query, setQuery] = useState("");
  //const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const bill = useSelector((state) => state.bill);
  const [toggle, setToggle] = useState(false);

  const addPage = () => {
    navigate("/add");
  };

  return (
    <>
      <Box bg={useColorModeValue("blue.800", "black")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Text fontSize="xl" color="#FF9933" fontWeight={700}>
              <span style={{ fontSize: "35px" }}>P</span>REM{" "}
              <span style={{ color: " #FFFFFF" }}>MEDICAL</span>{" "}
              <span style={{ color: " #138808" }}>
                AGENC<span style={{ fontSize: "35px" }}>Y</span>
              </span>
            </Text>
          </Link>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Box
                w={"40%"}
                display="flex"
                alignItems={"center"}
                gap="2"
                borderRadius={7}
              >
                <Box>
                  <IconButton
                    colorScheme="orange"
                    aria-label="Search database"
                    fontSize="14px"
                    height="33px"
                    icon={<SearchIcon />}
                  />
                  <ToastContainer />
                </Box>
                <Box>
                  <Button
                    size="sm"
                    colorScheme={"red"}
                    fontWeight="450"
                    leftIcon={<RepeatIcon />}
                  >
                    Reset
                  </Button>
                </Box>
              </Box>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              <Flex alignItems={"center"} direction="row">
                <Button
                  size={"sm"}
                  fontSize="12px"
                  colorScheme={"green"}
                  marginRight="15px"
                  onClick={addPage}
                  leftIcon={<AddIcon />}
                >
                  Add Product
                </Button>

                <Button
                  size={"sm"}
                  fontSize="12px"
                  colorScheme={"green"}
                  marginRight="15px"
                  leftIcon={<AiOutlineBook size={20} />}
                  onClick={() => {
                    navigate("/bill");
                  }}
                >
                  Bill Book
                </Button>

                <Box
                  width="20px"
                  top={-4}
                  left={-7}
                  position="relative"
                  height="20px"
                  bg={"red"}
                  color="white"
                  fontWeight={700}
                  fontSize={"12px"}
                  display="block"
                  borderRadius="50%"
                >
                  {bill?.length}
                </Box>

                <Box bg={"orange"} p={1} borderRadius="10px">
                  <BsFillCartPlusFill
                    size={25}
                    color={"black"}
                    display="block"
                    cursor="pointer"
                    onClick={() => navigate("/cart")}
                  />
                </Box>
                <Box
                  width="20px"
                  top={-4}
                  left={-2}
                  position="relative"
                  height="20px"
                  bg={"red"}
                  color="white"
                  fontWeight={700}
                  fontSize={"12px"}
                  display="block"
                  borderRadius="50%"
                >
                  {cart?.length}
                </Box>
                <AvatarGroup>
                  <Avatar
                    transition="0.5s ease-in"
                    onClick={() => setToggle(!toggle)}
                    _hover={{ cursor: "pointer" }}
                    name="suraj kumar"
                    bg="red"
                    src=""
                  />
                  {toggle ? (
                    <Button colorScheme={"green"}>Logout</Button>
                  ) : null}
                </AvatarGroup>
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export { Navbar };
