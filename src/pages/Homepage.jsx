import React, { useState, useEffect,useCallback } from "react";
import {
  Table,
  Thead,
  Tr,
  Th,
  Box,
  Text,
  TableContainer,
  Select,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { deleteProduct, getProduct } from "../redux/action";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Homepage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let token = localStorage.getItem("token");
  const products = useSelector((state) => state.products);
  const isError = useSelector((state) => state.isError);
  const isLoading = useSelector((state) => state.isLoading);
  let val = localStorage.getItem("mode");
  const [mode, setMode] = useState(val);

  if (mode !== undefined) {
    localStorage.setItem("mode", mode);
  }

  const handleMode = (e) => {
    setMode(e.target.value);
  };

  const handleDel = (id) => {
    dispatch(deleteProduct(id,token)).then(() => {
      toast.success("Item deleted successfully 😍", {
        position: "top-right",
        autoClose: 2000,
      });
     dispatch(getProduct(token));
    });
  };

  useEffect(() => {
    if (token == "undefined") {
      navigate("/login");
    }
    dispatch(getProduct(token))
  }, []);

  return (
    <Box border={"1px solid red"} w="100%" h="100vh">
      <TableContainer>
        <Table variant="striped">
          <Thead>
            <Tr>
              <Th>No.</Th>
              <Th>Product Name</Th>
              <Th>Brand</Th>
              <Th>MFG Date</Th>
              <Th>EXP Date</Th>
              <Th>
                <Select
                  placeholder="Box Price"
                  size="xl"
                  fontSize={14}
                  fontWeight="600"
                  value={mode}
                  onChange={handleMode}
                  >
                  <option value="wholesale">Wholesale</option>
                  <option value="retail">Retail</option>
                </Select>
              </Th>
              {/* <Th>Leaf Price</Th>
              <Th>Retail Price</Th> */}
              <Th>Action</Th>
            </Tr>
          </Thead>
          {isError ? navigate('*') : null}
          {!products ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              position="absolute"
              margin="auto"
              top={0}
              left={0}
              right={0}
              bottom={0}
            />
          ) : (
            products?.length &&
            products.map((e, index) => {
              return <Card key={index} {...e} handleDel={handleDel} serial={index} />;
            })
          )}
        </Table>
      </TableContainer>
    </Box>
    );
};

export default Homepage;

/* <Spinner
  thickness='4px'
  speed='0.65s'
  emptyColor='gray.200'
  color='blue.500'
  size='xl'
/>       */
