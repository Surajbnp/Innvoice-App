import React, { useState } from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  InputGroup,
  Text,
  InputLeftElement,
  Input,
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
import { useDispatch, useSelector } from "react-redux";
import { loadUser, searchProd } from "../redux/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useSelector } from "react-redux";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const bill = useSelector((state) => state.bill);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query) {
      dispatch(searchProd(query)).then((r) => {
        console.log(r.payload);

        if (r.payload?.length === 0) {
          toast.error("Sorry😒 ! No Items Found", {
            autoClose: 2000,
          });
          dispatch(loadUser());
        }
      });
      setQuery("");
    }
  };

  const addPage = () => {
    navigate("/add");
  };

  return (
    <>
      <Box bg={useColorModeValue("rgb(200, 48, 79)", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Link to="/">
            <Text fontWeight={600}>PREM MEDICAL AGENCY</Text>
          </Link>

          <Box
            w={"40%"}
            display="flex"
            alignItems={"center"}
            gap="2"
            borderRadius={7}
          >
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<SearchIcon color="orange.300" />}
              />
              <Input
                type="text"
                placeholder="Search Products..."
                variant="flushed"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </InputGroup>
            <Box>
              <IconButton
                colorScheme="orange"
                aria-label="Search database"
                fontSize="14px"
                height="33px"
                icon={<SearchIcon />}
                onClick={handleSearch}
              />
              <ToastContainer />
            </Box>
            <Box>
              <Button
                size="sm"
                colorScheme={"red"}
                fontWeight="450"
                leftIcon={<RepeatIcon />}
                onClick={() => {
                  dispatch(loadUser());
                }}
              >
                Reset
              </Button>
            </Box>
          </Box>

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
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
              </Flex>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export { Navbar };
